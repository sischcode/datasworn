// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    public class Asset
    {
        [JsonPropertyName("abilities")]
        public IList<AssetAbility> Abilities { get; set; }

        /// <summary>
        /// A localized category label for this asset. This is the surtitle
        /// above the asset's name on the card.
        /// </summary>
        [JsonPropertyName("category")]
        public Label Category { get; set; }

        /// <summary>
        /// If `true`, this asset counts as an impact (Starforged) or a debility
        /// (classic Ironsworn).
        /// </summary>
        [JsonPropertyName("count_as_impact")]
        public bool CountAsImpact { get; set; }

        /// <summary>
        /// The unique Datasworn ID for this item.
        /// </summary>
        [JsonPropertyName("id")]
        public AssetId Id { get; set; }

        /// <summary>
        /// The primary name/label for this item.
        /// </summary>
        [JsonPropertyName("name")]
        public Label Name { get; set; }

        /// <summary>
        /// Most assets only benefit to their owner, but certain assets (like
        /// Starforged's module and command vehicle assets) are shared amongst
        /// the player's allies, too.
        /// </summary>
        [JsonPropertyName("shared")]
        public bool Shared { get; set; }

        /// <summary>
        /// Attribution for the original source (such as a book or website) of
        /// this item, including the author and licensing information.
        /// </summary>
        [JsonPropertyName("source")]
        public Source Source { get; set; }

        [JsonPropertyName("attachments")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public AssetAttachment? Attachments { get; set; }

        /// <summary>
        /// The name of this item as it appears on the page in the book, if it's
        /// different from `name`.
        /// </summary>
        [JsonPropertyName("canonical_name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Label? CanonicalName { get; set; }

        /// <summary>
        /// A thematic color associated with this asset.
        /// </summary>
        [JsonPropertyName("color")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public CssColor? Color { get; set; }

        /// <summary>
        /// Controls are condition meters, clocks, counters, and other asset
        /// input fields whose values are expected to change throughout the life
        /// of the asset.
        /// </summary>
        [JsonPropertyName("controls")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, AssetControlField> Controls { get; set; }

        /// <summary>
        /// This asset's icon.
        /// </summary>
        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }

        /// <summary>
        /// Options are input fields set when the player purchases the asset.
        /// They're likely to remain the same through the life of the asset.
        /// Typically, they are rendered at the top of the asset card.
        /// </summary>
        [JsonPropertyName("options")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, AssetOptionField> Options { get; set; }

        /// <summary>
        /// Describes prerequisites for purchasing or using this asset.
        /// </summary>
        [JsonPropertyName("requirement")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Requirement { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }

        [JsonPropertyName("tags")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, IDictionary<string, string>> Tags { get; set; }
    }
}
