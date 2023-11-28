// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    public class AssetOptionFieldSelectStatChoiceOption : AssetOptionFieldSelectStatChoice
    {
        [JsonPropertyName("option_type")]
        public string OptionType { get => "option"; }

        /// <summary>
        /// A localized label for this input. In some contexts it may be
        /// undesirable to render this text, but it should always be exposed to
        /// assistive technology (e.g. with `aria-label` in HTML).
        /// </summary>
        [JsonPropertyName("label")]
        public Label Label { get; set; }

        /// <summary>
        /// The current value of this input.
        /// </summary>
        [JsonPropertyName("value")]
        public StatId Value { get; set; }

        /// <summary>
        /// Is this option currently selected?
        /// </summary>
        [JsonPropertyName("selected")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool? Selected { get; set; }
    }
}
