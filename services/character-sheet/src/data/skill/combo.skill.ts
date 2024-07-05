import { Button, ButtonCombo } from '../buttons';
import { GameContext } from '../game-context';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';

/**
 * Combo Skills can only be used when a character action history matches exactly
 * prerequisite of prior skills
 * Once prerequisite is matched the combination activation button (Square by default)
 * can be pressed to activate the action
 *
 * If prerequisites is undefined, a player may customize a characters to set a custom
 * combo in order for quicker action selection.
 */
export namespace Combo {
  export const BLITZ: SkillType = {
    name: 'Blitz',
    description: '',
    menuSlot: MenuSlot.TOOLS,
    buttonCombos: [
      {
        simultaneous: [Button.ATTACK, Button.ATTACK, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
  };
}
