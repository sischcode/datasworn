// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum ProgressRollMethod {
    /**
     * An automatic miss.
     */
    @JsonProperty("miss")
    MISS,

    /**
     * Make a progress roll on a progress track associated with this move.
     */
    @JsonProperty("progress_roll")
    PROGRESS_ROLL,

    /**
     * An automatic strong hit.
     */
    @JsonProperty("strong_hit")
    STRONG_HIT,

    /**
     * An automatic weak hit.
     */
    @JsonProperty("weak_hit")
    WEAK_HIT,
}