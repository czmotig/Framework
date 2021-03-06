﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Validators.Handlers
{
    /// <summary>
    /// Validator for instances of <typeparamref name="TModel"/>.
    /// </summary>
    /// <typeparam name="TModel">Type of model to validate.</typeparam>
    public interface IValidationHandler<TModel>
    {
        /// <summary>
        /// Validates <paramref name="model"/> and returns validation result.
        /// </summary>
        /// <param name="model">An instance to validate.</param>
        /// <returns><see cref="IValidationResult"/> describing success or validation failure.</returns>
        Task<IValidationResult> HandleAsync(TModel model);
    }
}
