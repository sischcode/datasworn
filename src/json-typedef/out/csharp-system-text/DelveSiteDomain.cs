// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Dataforged
{
    public class DelveSiteDomain
    {
        [JsonPropertyName("card_type")]
        public DelveSiteDomainCardType CardType { get; set; }

        [JsonPropertyName("dangers")]
        public IList<FeatureOrDanger> Dangers { get; set; }

        [JsonPropertyName("features")]
        public IList<FeatureOrDanger> Features { get; set; }

        [JsonPropertyName("id")]
        public DelveSiteDomainId Id { get; set; }

        [JsonPropertyName("name")]
        public Label Name { get; set; }

        [JsonPropertyName("source")]
        public Source Source { get; set; }

        [JsonPropertyName("summary")]
        public MarkdownString Summary { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Description { get; set; }

        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }
    }
}
