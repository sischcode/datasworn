// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A delve site with a theme, domain, and denizens.
    /// </summary>
    public class DelveSite
    {
        /// <summary>
        /// The unique Datasworn ID for this item.
        /// </summary>
        [JsonPropertyName("_id")]
        public DelveSiteId Id { get; set; }

        /// <summary>
        /// Attribution for the original source (such as a book or website) of
        /// this item, including the author and licensing information.
        /// </summary>
        [JsonPropertyName("_source")]
        public SourceInfo Source { get; set; }

        [JsonPropertyName("denizens")]
        public IList<DelveSiteDenizen> Denizens { get; set; }

        [JsonPropertyName("description")]
        public MarkdownString Description { get; set; }

        [JsonPropertyName("domain")]
        public DelveSiteDomainId Domain { get; set; }

        /// <summary>
        /// The primary name/label for this item.
        /// </summary>
        [JsonPropertyName("name")]
        public Label Name { get; set; }

        [JsonPropertyName("rank")]
        public ChallengeRank Rank { get; set; }

        [JsonPropertyName("theme")]
        public DelveSiteThemeId Theme { get; set; }

        [JsonPropertyName("type")]
        public DelveSiteType Type_ { get; set; }

        /// <summary>
        /// Any implementation hints or other developer-facing comments on
        /// this object. These should be omitted when presenting the object
        /// for gameplay.
        /// </summary>
        [JsonPropertyName("_comment")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string Comment { get; set; }

        /// <summary>
        /// The name of this item as it appears on the page in the book, if it's
        /// different from `name`.
        /// </summary>
        [JsonPropertyName("canonical_name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Label? CanonicalName { get; set; }

        /// <summary>
        /// An additional theme or domain card ID, for use with optional rules
        /// in Ironsworn: Delve.
        /// </summary>
        [JsonPropertyName("extra_card")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string ExtraCard { get; set; }

        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }

        /// <summary>
        /// The ID of an atlas entry representing the region in which this delve
        /// site is located.
        /// </summary>
        [JsonPropertyName("region")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public AtlasEntryId? Region { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }

        [JsonPropertyName("tags")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, IDictionary<string, Tag>> Tags { get; set; }
    }
}
