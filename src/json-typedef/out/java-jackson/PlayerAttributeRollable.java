// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * A standard player stat, or a condition meter that can be used as a stat in an
 * action roll.
 */
public enum PlayerAttributeRollable {
    @JsonProperty("edge")
    EDGE,

    @JsonProperty("health")
    HEALTH,

    @JsonProperty("heart")
    HEART,

    @JsonProperty("iron")
    IRON,

    @JsonProperty("shadow")
    SHADOW,

    @JsonProperty("spirit")
    SPIRIT,

    @JsonProperty("supply")
    SUPPLY,

    @JsonProperty("wits")
    WITS,
}
