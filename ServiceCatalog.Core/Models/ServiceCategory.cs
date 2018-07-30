using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ServiceCatalog.Core.Models
{
    public enum ServiceCategory
    {
        [Description("Accounts and Passwords")]
        AccountsAndPasswords = 1,
        [Description("Classroom Labs & Printing")]
        ClassroomLabsAndPrinting = 2,
        [Description("Desktop Service")]
        DesktopServices = 3,
        [Description("Educational Technology")]
        EducationalTechnology = 4,
        [Description("Email & Collaboration")]
        EmailAndCollaboration = 5,
        [Description("Internet & Network")]
        InternetAndNetwork = 6,
        [Description("Media & Events")]
        MediaAndEvents = 7,
        [Description("Professional Services")]
        ProfessionalServices = 8,
        [Description("Security")]
        Security = 9,
        [Description("Servers & Storage")]
        ServersAndStorage = 10,
        [Description("Software & Business Applications")]
        SoftwareAndBusinessApplications = 11,
        [Description("Web Services")]
        WebServices = 12
    }
}
