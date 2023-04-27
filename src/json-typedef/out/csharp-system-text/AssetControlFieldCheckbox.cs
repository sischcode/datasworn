// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Dataforged
{
    public class AssetControlFieldCheckbox : AssetControlField
    {
        [JsonPropertyName("field_type")]
        public string FieldType { get => "checkbox"; }

        [JsonPropertyName("id")]
        public Id Id { get; set; }

        [JsonPropertyName("label")]
        public Label Label { get; set; }

        [JsonPropertyName("value")]
        public bool? Value { get; set; }
    }
}
