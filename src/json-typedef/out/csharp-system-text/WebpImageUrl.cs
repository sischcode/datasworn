// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Dataforged
{
    /// <summary>
    /// A relative URL pointing to a WEBP image.
    /// </summary>
    [JsonConverter(typeof(WebpImageUrlJsonConverter))]
    public class WebpImageUrl
    {
        /// <summary>
        /// The underlying data being wrapped.
        /// </summary>
        public string Value { get; set; }
    }

    public class WebpImageUrlJsonConverter : JsonConverter<WebpImageUrl>
    {
        public override WebpImageUrl Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return new WebpImageUrl { Value = JsonSerializer.Deserialize<string>(ref reader, options) };
        }

        public override void Write(Utf8JsonWriter writer, WebpImageUrl value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize<string>(writer, value.Value, options);
        }
    }
}
