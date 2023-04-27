// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Dataforged
{
    public class Suggestions
    {
        [JsonPropertyName("assets")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<Id> Assets { get; set; }

        [JsonPropertyName("moves")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<Id> Moves { get; set; }

        [JsonPropertyName("oracles")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<Id> Oracles { get; set; }
    }
}
