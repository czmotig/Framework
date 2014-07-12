﻿using Neptuo.Web.Services;
using Neptuo.Web.Services.Behaviors;
using Neptuo.Web.Services.Hosting.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.WebServices
{
    public class GetHello : IGet, IPost, IWithOutput<string>, IWithRedirect
    {
        public HttpStatus Status { get; private set; }
        public string Location { get; private set; }
        public string Output { get; private set; }

        public void Get()
        {
            //Status = HttpStatus.MovedPermanently;
            Location = "http://www.google.com/";
            Output = "Hello, Get!";
        }

        public void Post()
        {
            Output = "Hello, Post!";
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}