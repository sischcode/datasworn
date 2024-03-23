// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// Represents a single column in an OracleCollection.
    /// </summary>
    public class OracleColumnText
    {
        /// <summary>
        /// The unique Datasworn ID for this item.
        /// </summary>
        [JsonPropertyName("_id")]
        public OracleRollableId Id { get; set; }

        /// <summary>
        /// The roll used to select a result on this oracle.
        /// </summary>
        [JsonPropertyName("dice")]
        public DiceExpression Dice { get; set; }

        /// <summary>
        /// The primary label at the head of this column.
        /// </summary>
        [JsonPropertyName("name")]
        public Label Name { get; set; }

        [JsonPropertyName("oracle_type")]
        public OracleColumnTextOracleType OracleType { get; set; }

        /// <summary>
        /// An array of objects, each representing a single row of the table.
        /// </summary>
        [JsonPropertyName("rows")]
        public IList<OracleTableRowText> Rows { get; set; }

        /// <summary>
        /// Any implementation hints or other developer-facing comments on
        /// this object. These should be omitted when presenting the object
        /// for gameplay.
        /// </summary>
        [JsonPropertyName("_comment")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string Comment { get; set; }

        /// <summary>
        /// An optional thematic color for this column. For an example, see
        /// "Basic Creature Form" (Starforged p. 337)
        /// </summary>
        [JsonPropertyName("color")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public CssColor? Color { get; set; }

        /// <summary>
        /// An optional icon for this column.
        /// </summary>
        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }

        /// <summary>
        /// Most oracle tables are insensitive to matches, but a few define
        /// special match behavior.
        /// </summary>
        [JsonPropertyName("match")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public OracleMatchBehavior? Match { get; set; }

        /// <summary>
        /// Indicates that this object replaces the identified OracleRollable.
        /// References to the replaced object can be considered equivalent to
        /// this object.
        /// </summary>
        [JsonPropertyName("replaces")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public OracleRollableId? Replaces { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }

        /// <summary>
        /// Optional secondary text at the head of this column. For best
        /// results, this should be no more than a few words in length.
        /// </summary>
        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Summary { get; set; }

        [JsonPropertyName("tags")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, IDictionary<string, Tag>> Tags { get; set; }
    }
}
