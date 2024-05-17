// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// The version of the Datasworn format used by this data.
    /// </summary>
    [JsonConverter(typeof(RulesPackageRulesetDataswornVersionJsonConverter))]
    public enum RulesPackageRulesetDataswornVersion
    {
        DefaultName,
    }
    public class RulesPackageRulesetDataswornVersionJsonConverter : JsonConverter<RulesPackageRulesetDataswornVersion>
    {
        public override RulesPackageRulesetDataswornVersion Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "0.0.10":
                    return RulesPackageRulesetDataswornVersion.DefaultName;
                default:
                    throw new ArgumentException(String.Format("Bad RulesPackageRulesetDataswornVersion value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, RulesPackageRulesetDataswornVersion value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case RulesPackageRulesetDataswornVersion.DefaultName:
                    JsonSerializer.Serialize<string>(writer, "0.0.10", options);
                    return;
            }
        }
    }
}
