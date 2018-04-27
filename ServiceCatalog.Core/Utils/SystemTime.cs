using System;

namespace ServiceCatalog.Core.Utils
{
    public static class SystemTime
    {
        public static Func<DateTime> Now = () => DateTime.Now;
        public static DateTime Today() { var now = Now(); return new DateTime(now.Year, now.Month, now.Day); }
    }
}
