// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Dataforged
{
    public class TriggerActionRoll : Trigger
    {
        [JsonPropertyName("roll_type")]
        public string RollType { get => "action_roll"; }

        /// <summary>
        /// Text describing the primary trigger condition of the move. Any
        /// trigger options are assumed to meet this condition in addition to
        /// their own trigger conditions.
        /// </summary>
        [JsonPropertyName("text")]
        public MarkdownString Text { get; set; }

        [JsonPropertyName("options")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<TriggerOptionAction> Options { get; set; }
    }
}
