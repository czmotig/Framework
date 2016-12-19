﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Neptuo.Observables.Commands
{
    /// <summary>
    /// A base implementation of <see cref="ICommand"/> for commands without parameter.
    /// A derived class is responsible of checking <see cref="CanExecute"/> in the <see cref="Execute"/> if needed.
    /// </summary>
    public abstract class Command : ICommand
    {
        /// <summary>
        /// An event raised when the <see cref="CanExecute"/> has changed its value.
        /// </summary>
        public event EventHandler CanExecuteChanged;

        /// <summary>
        /// Raises <see cref="CanExecuteChanged"/> safely if there is a listener.
        /// </summary>
        protected void RaiseCanExecuteChanged()
        {
            CanExecuteChanged?.Invoke(this, EventArgs.Empty);
        }

        bool ICommand.CanExecute(object parameter)
        {
            return CanExecute();
        }

        /// <summary>
        /// Returns <c>true</c> is command can be executed.
        /// </summary>
        /// <returns><c>true</c> is command can be executed; <c>false</c> otherwise.</returns>
        public abstract bool CanExecute();

        void ICommand.Execute(object parameter)
        {
            Execute();
        }

        /// <summary>
        /// Executes the command.
        /// </summary>
        public abstract void Execute();
    }

    /// <summary>
    /// A base implementation of <see cref="ICommand"/> for commands 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class Command<T> : ICommand
    {
        public event EventHandler CanExecuteChanged;

        protected void RaiseCanExecuteChanged()
        {
            CanExecuteChanged?.Invoke(this, EventArgs.Empty);
        }

        bool ICommand.CanExecute(object parameter)
        {
            return CanExecute((T)parameter);
        }

        public abstract bool CanExecute(T parameter);

        void ICommand.Execute(object parameter)
        {
            Execute((T)parameter);
        }

        public abstract void Execute(T parameter);
    }
}