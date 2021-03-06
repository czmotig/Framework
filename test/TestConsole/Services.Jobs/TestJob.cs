﻿using Neptuo;
using Neptuo.Jobs;
using Neptuo.Jobs.Handlers;
using Neptuo.Jobs.Handlers.Behaviors;
using Neptuo.Jobs.Handlers.Behaviors.Processing;
using Neptuo.Jobs.Handlers.Behaviors.Processing.Compilation;
using Neptuo.Compilers;
using Neptuo.Behaviors;
using Neptuo.Behaviors.Processing.Compilation;
using Neptuo.Behaviors.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TestConsole.Services.Jobs
{
    class TestJob
    {
        public static void Test()
        {
            TestServices();
            //TestThreadingTimer();
        }

        private static void TestServices()
        {
            Console.WriteLine("Current ThreadID: {0}", Thread.CurrentThread.ManagedThreadId);

            IBehaviorProvider behaviors = new BehaviorProviderCollection()
                .Add(
                    new AttributeBehaviorCollection()
                        .Add(typeof(ReprocessAttribute), typeof(ReprocessBehavior))
                );

            ICompilerConfiguration configuration = new CompilerConfiguration()
                //.BaseType(typeof(WorkerPipelineHandler<>))
                .AddTempDirectory(@"C:\Temp\Pipelines");
            
            configuration.References()
                .AddDirectory(Environment.CurrentDirectory);

            configuration.GetBehaviorGenerator(
                new CodeDomBehaviorGeneratorCollection()
                    .Add(typeof(ReprocessAttribute), new CodeDomReprocessBehaviorInstanceGenerator())
            );

            ServiceHandlerCollection collection = new ServiceHandlerCollection();
            //collection.Add(new TempCheckServiceHandler());
            collection.Add(
                new BackgroundServiceCollection()
                    .AddIntervalHandler(TimeSpan.FromSeconds(5), new TempCheckWorkerHandler())
            );
            //collection.Add(new Temp2CheckServiceHandler());


            Console.WriteLine("Starting services...");
            collection.Start();
            Console.WriteLine("Press any key to stop services...");
            Console.ReadKey(true);
            collection.Stop();
            Console.WriteLine("All services stopped...");
        }

        private static void TestThreadingTimer()
        {
            Console.WriteLine("ThreadID: {0}", Thread.CurrentThread.ManagedThreadId);

            Timer timer = new Timer(OnTimer, 5, 0, 2000);

            Console.ReadKey(true);
            timer.Change(5000, 1000);

            Console.ReadKey(true);
            timer.Dispose();
        }

        private static void OnTimer(object state)
        {
            Console.WriteLine("State: {0}; DateTime: {1}; ThreadID: {2}", state, DateTime.Now, Thread.CurrentThread.ManagedThreadId);
        }
    }
}
