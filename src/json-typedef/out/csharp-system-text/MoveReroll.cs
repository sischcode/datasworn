// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Dataforged
{
    public class MoveReroll
    {
        [JsonPropertyName("method")]
        public MoveRerollMethod Method { get; set; }

        [JsonPropertyName("text")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Text { get; set; }
    }
}
