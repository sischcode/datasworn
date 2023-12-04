// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// Describes a standard player character condition meter.
    /// </summary>
    public class ConditionMeterRule
    {
        /// <summary>
        /// A description of this condition meter.
        /// </summary>
        [JsonPropertyName("description")]
        public MarkdownString Description { get; set; }

        [JsonPropertyName("label")]
        public InputLabel Label { get; set; }

        /// <summary>
        /// The maximum value of this meter.
        /// </summary>
        [JsonPropertyName("max")]
        public sbyte Max { get; set; }

        /// <summary>
        /// The minimum value of this meter.
        /// </summary>
        [JsonPropertyName("min")]
        public sbyte Min { get; set; }

        [JsonPropertyName("rollable")]
        public bool Rollable { get; set; }

        /// <summary>
        /// Is this condition meter shared by all players?
        /// </summary>
        [JsonPropertyName("shared")]
        public bool Shared { get; set; }

        /// <summary>
        /// The current value of this meter.
        /// </summary>
        [JsonPropertyName("value")]
        public sbyte Value { get; set; }
    }
}
