// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "using")
@JsonSubTypes({
    @JsonSubTypes.Type(name = "custom_value", value = TriggerOptionActionChoiceCustomValue.class),
    @JsonSubTypes.Type(name = "edge", value = TriggerOptionActionChoiceEdge.class),
    @JsonSubTypes.Type(name = "health", value = TriggerOptionActionChoiceHealth.class),
    @JsonSubTypes.Type(name = "heart", value = TriggerOptionActionChoiceHeart.class),
    @JsonSubTypes.Type(name = "iron", value = TriggerOptionActionChoiceIron.class),
    @JsonSubTypes.Type(name = "ref", value = TriggerOptionActionChoiceRef.class),
    @JsonSubTypes.Type(name = "shadow", value = TriggerOptionActionChoiceShadow.class),
    @JsonSubTypes.Type(name = "spirit", value = TriggerOptionActionChoiceSpirit.class),
    @JsonSubTypes.Type(name = "supply", value = TriggerOptionActionChoiceSupply.class),
    @JsonSubTypes.Type(name = "wits", value = TriggerOptionActionChoiceWits.class),
})
public abstract class TriggerOptionActionChoice {
}
