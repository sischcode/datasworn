import type { HasId, HasText, MoveOutcome } from '@schema'

/**
 * @public
 */
export interface AlterMomentum extends HasId {
  /**
   * Information on how the player's momentum burn is altered.
   */
  Burn?: AlterMomentumBurn[] | undefined
  /**
   * Information on how the player's momentum reset is altered.
   */
  Reset?: AlterMomentumReset[] | undefined
}
/**
 * @public
 */
export interface AlterMomentumBurn extends HasId {
  /**
   * The trigger condition for altering the PC's momentum burn.
   */
  Trigger: HasText
  /**
   * The effect altering the PC's momentum burn.
   */
  Effect: HasText
  Outcomes?: Array<typeof MoveOutcome[1] | typeof MoveOutcome[2]> | undefined
}
/**
 * @public
 */
export interface AlterMomentumReset extends HasId {
  /**
   * The trigger condition for altering the PC's momentum reset.
   */
  Trigger: HasText
  /**
   * The amount by which the PC's momentum reset is change.
   */
  Value: number
}