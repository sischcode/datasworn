// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Dataforged
{
    /// <summary>
    /// Asset controls are fields that are expected to change throughout the
    /// asset's lifespan. The most common example are the condition meters on
    /// certain assets. A more complex example is the distinct mechanical modes
    /// on Ironsworn's 'Armored'.
    /// </summary>
    [JsonConverter(typeof(AssetControlFieldJsonConverter))]
    public abstract class AssetControlField
    {
    }

    public class AssetControlFieldJsonConverter : JsonConverter<AssetControlField>
    {
        public override AssetControlField Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var readerCopy = reader;
            var tagValue = JsonDocument.ParseValue(ref reader).RootElement.GetProperty("field_type").GetString();

            switch (tagValue)
            {
                case "checkbox":
                    return JsonSerializer.Deserialize<AssetControlFieldCheckbox>(ref readerCopy, options);
                case "condition_meter":
                    return JsonSerializer.Deserialize<AssetControlFieldConditionMeter>(ref readerCopy, options);
                case "select_asset_extension":
                    return JsonSerializer.Deserialize<AssetControlFieldSelectAssetExtension>(ref readerCopy, options);
                default:
                    throw new ArgumentException(String.Format("Bad FieldType value: {0}", tagValue));
            }
        }

        public override void Write(Utf8JsonWriter writer, AssetControlField value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize(writer, value, value.GetType(), options);
        }
    }
}
