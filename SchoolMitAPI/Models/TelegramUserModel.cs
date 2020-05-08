using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace SchoolMitAPI.Models
{
    public class TelegramUserModel
    {
        [JsonProperty("ChatID")]
        //[JsonConverter(typeof(ParseStringConverter))]
        public long ChatId { get; set; }

        [JsonProperty("Username")]
        public string Username { get; set; }

        [JsonProperty("FirstName")]
        public string FirstName { get; set; }

        [JsonProperty("LastName")]
        public string LastName { get; set; }

        [JsonProperty("PhoneNumber")]
        //[JsonConverter(typeof(ParseStringConverter))]
        public long PhoneNumber { get; set; }

        [JsonProperty("Email")]
        public string Email { get; set; }

        [JsonProperty("Password")]
        public string Password { get; set; }

        [JsonProperty("Scopes")]
        public Scope[] Scopes { get; set; }
    }

    public class Scope
    {
        [JsonProperty("scope")]
        public string ScopeScope { get; set; }
    }
}
