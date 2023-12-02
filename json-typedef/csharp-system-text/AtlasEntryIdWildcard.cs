// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A wildcarded ID that can be used to match multiple AtlasEntrys.
    /// </summary>
    [JsonConverter(typeof(AtlasEntryIdWildcardJsonConverter))]
    public class AtlasEntryIdWildcard
    {
        /// <summary>
        /// The underlying data being wrapped.
        /// </summary>
        public string Value { get; set; }
    }

    public class AtlasEntryIdWildcardJsonConverter : JsonConverter<AtlasEntryIdWildcard>
    {
        public override AtlasEntryIdWildcard Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return new AtlasEntryIdWildcard { Value = JsonSerializer.Deserialize<string>(ref reader, options) };
        }

        public override void Write(Utf8JsonWriter writer, AtlasEntryIdWildcard value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize<string>(writer, value.Value, options);
        }
    }
}