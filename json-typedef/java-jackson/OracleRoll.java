// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class OracleRoll {
    @JsonProperty("auto")
    private Boolean auto;

    @JsonProperty("dice")
    private DiceExpression dice;

    @JsonProperty("duplicates")
    private OracleDuplicateBehavior duplicates;

    @JsonProperty("number_of_rolls")
    private Short numberOfRolls;

    @JsonProperty("oracle")
    private OracleRollableId oracle;

    public OracleRoll() {
    }

    /**
     * Getter for auto.<p>
     * Both Ironsworn and Starforged explicitly recommend *against* rolling
     * all details at once. That said, some oracle results only provide useful
     * information once a secondary roll occurs, such as "Action + Theme" or
     * "Roll Twice".
     */
    public Boolean getAuto() {
        return auto;
    }

    /**
     * Setter for auto.<p>
     * Both Ironsworn and Starforged explicitly recommend *against* rolling
     * all details at once. That said, some oracle results only provide useful
     * information once a secondary roll occurs, such as "Action + Theme" or
     * "Roll Twice".
     */
    public void setAuto(Boolean auto) {
        this.auto = auto;
    }

    /**
     * Getter for dice.<p>
     */
    public DiceExpression getDice() {
        return dice;
    }

    /**
     * Setter for dice.<p>
     */
    public void setDice(DiceExpression dice) {
        this.dice = dice;
    }

    /**
     * Getter for duplicates.<p>
     * Special rules on how to handle duplicate results, when rolling multiple
     * times.
     */
    public OracleDuplicateBehavior getDuplicates() {
        return duplicates;
    }

    /**
     * Setter for duplicates.<p>
     * Special rules on how to handle duplicate results, when rolling multiple
     * times.
     */
    public void setDuplicates(OracleDuplicateBehavior duplicates) {
        this.duplicates = duplicates;
    }

    /**
     * Getter for numberOfRolls.<p>
     * The number of times to roll.
     */
    public Short getNumberOfRolls() {
        return numberOfRolls;
    }

    /**
     * Setter for numberOfRolls.<p>
     * The number of times to roll.
     */
    public void setNumberOfRolls(Short numberOfRolls) {
        this.numberOfRolls = numberOfRolls;
    }

    /**
     * Getter for oracle.<p>
     */
    public OracleRollableId getOracle() {
        return oracle;
    }

    /**
     * Setter for oracle.<p>
     */
    public void setOracle(OracleRollableId oracle) {
        this.oracle = oracle;
    }
}