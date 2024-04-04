// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// The version of the Datasworn format used by this data.
    /// </summary>
    [JsonConverter(typeof(RulesPackageExpansionDataswornVersionJsonConverter))]
    public enum RulesPackageExpansionDataswornVersion
    {
        DefaultName,
    }
    public class RulesPackageExpansionDataswornVersionJsonConverter : JsonConverter<RulesPackageExpansionDataswornVersion>
    {
        public override RulesPackageExpansionDataswornVersion Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "0.0.9":
                    return RulesPackageExpansionDataswornVersion.DefaultName;
                default:
                    throw new ArgumentException(String.Format("Bad RulesPackageExpansionDataswornVersion value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, RulesPackageExpansionDataswornVersion value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case RulesPackageExpansionDataswornVersion.DefaultName:
                    JsonSerializer.Serialize<string>(writer, "0.0.9", options);
                    return;
            }
        }
    }
}
