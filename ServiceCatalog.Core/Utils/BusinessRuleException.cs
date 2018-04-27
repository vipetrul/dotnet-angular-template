using System;

namespace ServiceCatalog.Core.Utils
{
    public class BusinessRuleException : Exception
    {
        public BusinessRuleException(string msg) : base(msg)
        {
        }
    }
}
