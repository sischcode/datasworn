// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Dataforged
{
    [JsonConverter(typeof(TriggerOptionActionChoiceJsonConverter))]
    public abstract class TriggerOptionActionChoice
    {
    }

    public class TriggerOptionActionChoiceJsonConverter : JsonConverter<TriggerOptionActionChoice>
    {
        public override TriggerOptionActionChoice Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var readerCopy = reader;
            var tagValue = JsonDocument.ParseValue(ref reader).RootElement.GetProperty("using").GetString();

            switch (tagValue)
            {
                case "custom_value":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceCustomValue>(ref readerCopy, options);
                case "edge":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceEdge>(ref readerCopy, options);
                case "health":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceHealth>(ref readerCopy, options);
                case "heart":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceHeart>(ref readerCopy, options);
                case "iron":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceIron>(ref readerCopy, options);
                case "ref":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceRef>(ref readerCopy, options);
                case "shadow":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceShadow>(ref readerCopy, options);
                case "spirit":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceSpirit>(ref readerCopy, options);
                case "supply":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceSupply>(ref readerCopy, options);
                case "wits":
                    return JsonSerializer.Deserialize<TriggerOptionActionChoiceWits>(ref readerCopy, options);
                default:
                    throw new ArgumentException(String.Format("Bad Using value: {0}", tagValue));
            }
        }

        public override void Write(Utf8JsonWriter writer, TriggerOptionActionChoice value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize(writer, value, value.GetType(), options);
        }
    }
}
