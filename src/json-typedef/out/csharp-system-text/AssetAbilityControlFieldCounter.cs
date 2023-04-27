// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Dataforged
{
    public class AssetAbilityControlFieldCounter : AssetAbilityControlField
    {
        [JsonPropertyName("field_type")]
        public string FieldType { get => "counter"; }

        [JsonPropertyName("id")]
        public Id Id { get; set; }

        [JsonPropertyName("label")]
        public Label Label { get; set; }

        [JsonPropertyName("max")]
        public sbyte? Max { get; set; }

        [JsonPropertyName("min")]
        public sbyte Min { get; set; }

        [JsonPropertyName("value")]
        public sbyte Value { get; set; }
    }
}
