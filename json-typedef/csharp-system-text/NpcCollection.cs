// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    public class NpcCollection
    {
        /// <summary>
        /// The unique Datasworn ID for this item.
        /// </summary>
        [JsonPropertyName("_id")]
        public NpcCollectionId Id { get; set; }

        /// <summary>
        /// Attribution for the original source (such as a book or website) of
        /// this item, including the author and licensing information.
        /// </summary>
        [JsonPropertyName("_source")]
        public SourceInfo Source { get; set; }

        /// <summary>
        /// The primary name/label for this item.
        /// </summary>
        [JsonPropertyName("name")]
        public Label Name { get; set; }

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
        /// A thematic color associated with this collection.
        /// </summary>
        [JsonPropertyName("color")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public CssColor? Color { get; set; }

        [JsonPropertyName("contents")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, Npc> Contents { get; set; }

        /// <summary>
        /// A longer description of this collection, which might include
        /// multiple paragraphs. If it's only a couple sentences, use the
        /// `summary` key instead.
        /// </summary>
        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Description { get; set; }

        /// <summary>
        /// This collection's content enhances the identified collection, rather
        /// than being a standalone collection of its own.
        /// </summary>
        [JsonPropertyName("enhances")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public NpcCollectionId? Enhances { get; set; }

        /// <summary>
        /// An SVG icon associated with this collection.
        /// </summary>
        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }

        [JsonPropertyName("images")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<WebpImageUrl> Images { get; set; }

        /// <summary>
        /// This collection replaces the identified collection. References
        /// to the replaced collection can be considered equivalent to this
        /// collection.
        /// </summary>
        [JsonPropertyName("replaces")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public NpcCollectionId? Replaces { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }

        /// <summary>
        /// A brief summary of this collection, no more than a few sentences
        /// in length. This is intended for use in application tooltips and
        /// similar sorts of hints. Longer text should use the "description"
        /// key instead.
        /// </summary>
        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Summary { get; set; }

        [JsonPropertyName("tags")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, IDictionary<string, Tag>> Tags { get; set; }
    }
}
