using System.Linq;
using ServiceCatalog.Core.Utils;

namespace ServiceCatalog.Core.Commands
{
    public class CreateOrderCommand
    {
        public string Description { get; protected set; }
        public string HawkId { get; protected set; }

        public CreateOrderCommand(string description, string hawkId)
        {
            if (string.IsNullOrWhiteSpace(hawkId) || !hawkId.All(char.IsLetterOrDigit))
            {
                throw new BusinessRuleException($"Requested HawkID [{hawkId}] is invalid.");
            }
            if (description.Length > 100)
            {
                throw new BusinessRuleException("Description should be less than 100 characters.");
            }
            Description = description;
            HawkId = hawkId.ToLower();
        }
    }
}
