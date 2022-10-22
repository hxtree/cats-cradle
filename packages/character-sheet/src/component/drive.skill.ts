import {BaseSkill, SkillCategory} from './base.skill';
import {MenuSlot} from './menu-slot';

export enum DriveSkillList {
  BERSERK = 'Berserk',
  TOXIC_THRUST = 'Toxic Thrust',
  AERIAL_ASSUALT = 'Aerial Assualt',
  ONI = 'Oni',
  TRUE_ONI = 'True Oni',
}

/**
 * Drive Actions are special actions that consume drive gauge
 */
export abstract class DriveAction implements BaseSkill {
  abstract name: DriveSkillList;
  abstract description: string;
  menuSlot: MenuSlot.Third;
  category: SkillCategory.DRIVE;
}

export class Berserk extends DriveAction {
  name: DriveSkillList.BERSERK;
  description: 'Become completely focused on winning';
}

export class ToxicThrust extends DriveAction {
  name: DriveSkillList.TOXIC_THRUST;
  description: '';
}

export class AerialAssault extends DriveAction {
  name: DriveSkillList.AERIAL_ASSUALT;
  description: 'Jump into air and throws boomerang (jump attack)';
}

export class Oni extends DriveAction {
  name: DriveSkillList.ONI;
  description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
    If character stays in Oni too long they will go Berserk`;
}

export class TrueOni extends DriveAction {
  name: DriveSkillList.TRUE_ONI;
  description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
    If character stays in Oni too long they will go Berserk.`;
  conditions: 'Player must have very little life left and max DriveAction in order to perform.';
}
