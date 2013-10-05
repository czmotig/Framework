﻿using Neptuo.Data.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.Data.Queries
{
    public interface ICategoryFilter
    {
        IntSearch Key { get; set; }
        TextSearch Name { get; set; }
    }
}
