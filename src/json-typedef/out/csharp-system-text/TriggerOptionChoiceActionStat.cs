// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Dataforged
{
    public class TriggerOptionChoiceActionStat : TriggerOptionChoiceAction
    {
        [JsonPropertyName("using")]
        public string Using { get => "stat"; }

        [JsonPropertyName("ref")]
        public StatId Ref { get; set; }
    }
}
