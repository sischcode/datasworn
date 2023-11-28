// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    public class Ruleset
    {
        [JsonPropertyName("id")]
        public NamespaceId Id { get; set; }

        /// <summary>
        /// A dictionary object containing asset types, which contain assets.
        /// </summary>
        [JsonPropertyName("assets")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, AssetType> Assets { get; set; }

        /// <summary>
        /// A dictionary object containing atlas collections, which contain
        /// atlas entries.
        /// </summary>
        [JsonPropertyName("atlas")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, Atlas> Atlas { get; set; }

        /// <summary>
        /// A dictionary object of delve sites, like the premade delve sites
        /// presented in Ironsworn: Delve
        /// </summary>
        [JsonPropertyName("delve_sites")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, DelveSite> DelveSites { get; set; }

        /// <summary>
        /// A dictionary object containing move categories, which contain moves.
        /// </summary>
        [JsonPropertyName("moves")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, MoveCategory> Moves { get; set; }

        /// <summary>
        /// A dictionary object containing NPC collections, which contain NPCs.
        /// </summary>
        [JsonPropertyName("npcs")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, NpcCollection> Npcs { get; set; }

        /// <summary>
        /// A dictionary object containing oracle collections, which may contain
        /// oracle tables and/or oracle collections.
        /// </summary>
        [JsonPropertyName("oracles")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, OracleCollection> Oracles { get; set; }

        /// <summary>
        /// A dictionary object containing rarities, like those presented in
        /// Ironsworn: Delve.
        /// </summary>
        [JsonPropertyName("rarities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, Rarity> Rarities { get; set; }

        [JsonPropertyName("rules")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Rules? Rules { get; set; }

        /// <summary>
        /// A dictionary object containing delve site domains.
        /// </summary>
        [JsonPropertyName("site_domains")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, DelveSiteDomain> SiteDomains { get; set; }

        /// <summary>
        /// A dictionary object containing delve site themes.
        /// </summary>
        [JsonPropertyName("site_themes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, DelveSiteTheme> SiteThemes { get; set; }

        /// <summary>
        /// A dictionary object of truth categories.
        /// </summary>
        [JsonPropertyName("truths")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, Truth> Truths { get; set; }
    }
}
