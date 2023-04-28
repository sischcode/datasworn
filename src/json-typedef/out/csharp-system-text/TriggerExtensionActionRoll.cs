// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Dataforged
{
    /// <summary>
    /// Extends or upgrades an existing action roll trigger.
    /// </summary>
    public class TriggerExtensionActionRoll : TriggerExtension
    {
        [JsonPropertyName("roll_type")]
        public string RollType { get => "action_roll"; }

        [JsonPropertyName("options")]
        public IList<TriggerOptionAction> Options { get; set; }
    }
}
