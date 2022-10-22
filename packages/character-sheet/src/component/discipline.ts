import {
  Boast,
  Cheer,
  Dismiss,
  Hope,
  Inspire,
  Rage,
  Scan,
  Support,
} from './class.skill';
import {Appraise, PrepareFood} from './item.skill';
import {BackFlip, DoubleBackFlip, HighJump} from './movement.skill';
import {Concentration} from './passive.skill';
import {
  Aqua,
  Blizzard,
  Charm,
  Chill,
  Darkness,
  Desolate,
  Drain,
  Flare,
  Frost,
  Gust,
  Haste,
  Heal,
  Landslide,
  Leech,
  Light,
  Quake,
  Slow,
  Stop,
  Tsunami,
} from './spell.skill';
import {Summon} from './summon.skill';
import {Command, Formations, Order} from './teamwork.skill';
import {Cleave} from './weapon.skill';

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */

export enum DisciplineCategory {
  PROFESSION = 'Profession',
  ARCHETYPE = 'Archetype',
  // Combat Classes
  // Specialty Classes
  // Drive Classes
  // Omega Classes
  //  | Spirit Class | Drive Class | Omega Class
}

export enum Discipline {
  AMBER_ASSASSIN = 'Amber Assassin',
  ASSASSIN = 'Assassin',
  BARD = 'Bard',
  BERSERKER = 'Berserker',
  BODY_BUILDER = 'Body Builder',
  CHEERLEADER = 'Cheerleader',
  COMMANDER = 'Commander',
  COOK = 'Cook',
  DUELIST = 'Duelist',
  ELITE_ASSASIN = 'Elite Assasin',
  ENGINEER = 'Engineer',
  GAURD = 'Gaurd',
  GUARDIAN = 'Guardian',
  GYMNAST = 'Gymnast',
  HEALER = 'Healer',
  HERO = 'Hero',
  HISTORIAN = 'Historian',
  KEEPER = 'Keeper',
  KNIGHT = 'Knight',
  LIGHTENING_WARRIOR = 'Lightening Warrior',
  MADIEN = 'Madien',
  MAGI = 'Magi',
  MAGI_BLACK = 'Magi Black',
  MAGI_BLUE = 'Magi Blue',
  MAGI_BROWN = 'Magi Brown',
  MAGI_GREEN = 'Magi Green',
  MAGI_PINK = 'Magi Pink',
  MAGI_PURPLE = 'Magi Purple',
  MAGI_WHITE = 'Magi White',
  MAGI_YELLOW = 'Magi Yellow',
  MECHANIC = 'Mechanic',
  NINJA = 'Ninja',
  ONI = 'Oni',
  OUROBOROS = 'Ouroboros',
  POSSESSED = 'Possessed',
  REBEL = 'Rebel',
  ROUGE = 'Rouge',
  ROYALTY = 'Royalty',
  RUNE_KING = 'Rune King',
  SAGE = 'Sage',
  SCOUT = 'Scout',
  SOLIDER = 'Solider',
  SUMMONER = 'Summoner',
  THIEF = 'Thief',
  WARRIOR = 'Warrior',
  WIZARD = 'Wizard',
  XSOLIDER = 'XSolider',
}

export abstract class BaseDiscipline {
  abstract name: string;
  abstract description: string;
  abstract category: DisciplineCategory;
  prerequisites?: Discipline[]; // could also be event like defeated Lawzon, but may be that's too character specific?

  protected _experience: number;

  public constructor(experience: number = 0) {
    this._experience = experience;
  }

  public get level(): number {
    return Math.floor(Math.sqrt(this._experience / 100));
  }

  public get nextLevel(): number {
    return this._experience - ((this.level * (this.level - 1)) / 2) * 100;
  }

  public get experienceToNextLevel(): number {
    return this.nextLevel - this._experience;
  }

  public get experienceToNextLevelPercentage(): number {
    return this.experienceToNextLevel / this.nextLevel;
  }

  // todo load from Class
  public get effects(): Array<string> {
    return [];
  }
}

// TODO add
// Bard,
// Duelist,
// Knight,
// RuneKing,
// Maiden,
// Keeper,
// Sage,
// Guardian'
// Possessed,
// Ouroboros,?
// Berserker,
// Ninja,
// AmberAssassin,
// EliteAssasin,
// Engineer,
// LighteningWarrior,

export class Gymnast extends BaseDiscipline {
  name: Discipline.GYMNAST;
  description: 'Trains in gymnastics.';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 10, skill: BackFlip],
    [level: 25, skill: DoubleBackFlip],
    [level: 50, skill: HighJump],
    [level: 70, skill: Concentration],
  ];
}

export class Wizard extends BaseDiscipline {
  name: Discipline.WIZARD;
  description: 'Studies mysterious forces.';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 10, skill: Gust],
    [level: 25, skill: Flare],
    [level: 50, skill: Heal],
    [level: 70, skill: Light],
  ];
}

export class Historian extends BaseDiscipline {
  name: Discipline.HISTORIAN;
  description: 'Studies the world as it was.';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 10, skill: Appraise],
    [level: 25, skill: Scan],
    [level: 50, skill: Summon.HERALDIC_LION],
  ];
}
export class BodyBuilder extends BaseDiscipline {
  name: Discipline.BODY_BUILDER;
  description: 'Do you even lift?';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 10, skill: Appraise],
    [level: 25, skill: Scan],
    [level: 50, skill: Summon.SCRIBBLES],
  ];
}

// may be anyone can become a cook?>
export class Cook extends BaseDiscipline {
  name: Discipline.COOK;
  description: 'Prepares and cooks food';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [[level: 10, skill: PrepareFood]];
  // todo prepare different food items
}

export class Cheerleader extends BaseDiscipline {
  name: Discipline.CHEERLEADER;
  description: 'Cheers their team as a form of encouragement.';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 1, skill: Cheer],
    [level: 10, skill: Support],
    [level: 40, skill: Inspire],
    [level: 50, skill: Hope],
  ];
}

export class Commander extends BaseDiscipline {
  name: Discipline.COMMANDER;
  description: 'Specialize in giving orders to others.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 1, skill: Boast],
    [level: 10, skill: Formations],
    [level: 50, skill: Order],
  ];
}

export class Magi extends BaseDiscipline {
  name: Discipline.MAGI;
  description: 'Has a basic understanding of Magic';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [];
  skillProgression: [];
}

export class MagiBlack extends BaseDiscipline {
  name: Discipline.MAGI_BLACK;
  description: 'Specialize destruction Magic';
  history: 'Harnessed from the power of Ouren';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [
    [level: 10, skill: Darkness],
    [level: 25, skill: Desolate],
  ];
}

export class MagiBlue extends BaseDiscipline {
  name: Discipline.MAGI_BLUE;
  description: 'Specialize water Magic';
  history: 'Harnessed from the power of Genki';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [
    [level: 10, skill: Rage],
    [level: 15, skill: Aqua],
    [level: 25, skill: Tsunami],
  ];
}

export class MagiBrown extends BaseDiscipline {
  name: Discipline.MAGI_BROWN;
  description: 'Specialize rock Magic';
  history: 'Harnessed from the power of Asmin';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [[level: 10, skill: Quake], [level: 15, skill: Landslide]];
}

export class MagiGreen extends BaseDiscipline {
  name: Discipline.MAGI_GREEN;
  description: 'Specialize time Magic';
  history: 'Harnessed from the power of Void';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [
    [level: 10, skill: Stop],
    [level: 15, skill: Slow],
    [level: 15, skill: Haste],
  ];
}

export class MagiPink extends BaseDiscipline {
  name: Discipline.MAGI_PINK;
  description: 'Specialize charm Magic';
  history: 'Harnessed from the power of Suyri';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [[level: 10, skill: Charm], [level: 15, skill: Chill]];
}

export class MagiPurple extends BaseDiscipline {
  name: Discipline.MAGI_PURPLE;
  description: 'Specialize ??? Magic';
  history: 'Harnessed from the power of Diag';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [[level: 10, skill: Quake]]; // ?? is quake correct
}

export class MagiWhite extends BaseDiscipline {
  name: Discipline.MAGI_WHITE;
  description: 'Specialize snow Magic';
  history: 'Harnessed from the power of Lawzon';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [
    [level: 10, skill: Blizzard],
    [level: 10, skill: Frost],
    [level: 10, skill: Chill],
  ];
}

export class MagiYellow extends BaseDiscipline {
  name: Discipline.MAGI_YELLOW;
  description: 'Specialize absorption Magic';
  history: 'Harnessed from the power of Wisp';
  category: DisciplineCategory.ARCHETYPE;
  prerequisites: [Discipline.MAGI];
  skillProgression: [
    [level: 10, skill: Drain],
    [level: 25, skill: Leech],
    [level: 50, skill: Drain],
  ];
}

export class Gaurd extends BaseDiscipline {
  name: Discipline.GAURD;
  description: 'Specialize in protection.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Gaurdian extends BaseDiscipline {
  name: Discipline.GUARDIAN;
  description: 'Specialize in protection.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Hero extends BaseDiscipline {
  name: Discipline.HERO;
  description: 'Specialize in saving others.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Knight extends BaseDiscipline {
  name: Discipline.KNIGHT;
  description: 'A honored fighter for protects the kingdom.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Mechanic extends BaseDiscipline {
  name: Discipline.MECHANIC;
  description: 'Specializes in electromechanical engineering';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: []; // Actions: Tools
}

export class Rouge extends BaseDiscipline {
  name: Discipline.ROUGE;
  description: 'Specializes sneak attacks and picking locks';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Royalty extends BaseDiscipline {
  name: Discipline.ROYALTY;
  description: 'Specializes in ruling others';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Rebel extends BaseDiscipline {
  name: Discipline.REBEL;
  description: 'Rebel';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Scout extends BaseDiscipline {
  name: Discipline.SCOUT;
  description: 'Specialize in moving ahead of the party to gathering information and reconnaissance.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Solider extends BaseDiscipline {
  name: Discipline.SOLIDER;
  description: 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [[level: 10, skill: Cleave]];
}

export class Summoner extends BaseDiscipline {
  name: Discipline.SUMMONER;
  description: 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 10, skill: Summon],
    [level: 10, skill: Dismiss],
    [level: 10, skill: Command],
  ];
}

export class Thief extends BaseDiscipline {
  name: Discipline.THIEF;
  description: '';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Warrior extends BaseDiscipline {
  name: Discipline.WARRIOR;
  description: 'Specializzes in combat on the battlefield.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class XSolider extends BaseDiscipline {
  name: Discipline.XSOLIDER;
  description: 'Soldiers that have gone against their teachings to gain new skills.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Assassin extends BaseDiscipline {
  name: Discipline.ASSASSIN;
  description: '';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Healer extends BaseDiscipline {
  name: Discipline.HEALER;
  description: 'Specialize in healing.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}
