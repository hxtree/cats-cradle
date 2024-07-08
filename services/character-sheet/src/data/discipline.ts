import { SkillType, Skill } from './skill';

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipline may unlock other disciplines, actions, and attributes bonuses.
 */
export enum Category {
  // Specialty Classes
  PROFESSION = 'Profession',
  // Combat Classes
  ARCHETYPE = 'Archetype',
  // Spirit Class
  // Drive Classes
  OMEGA = 'Omega',
}

export type GainSkillType = {
  level: number;
  skill: SkillType;
};

export type GainAttributeType = {
  level: number;
  power?: number;
  speed?: number;
  wisdom?: number;
  intelligence?: number;
  defense?: number;
  accuracy?: number;
  evasion?: number;
  luck?: number;
};

export namespace Discipline {
  export interface ProgressionType {
    level: number;
    skill: SkillType;
  }

  export type Type = {
    name: string;
    description: string;
    category: Category;
    history?: string;
    prerequisites?: DisciplineId[]; // After level etc?
    // could also be event like defeated Lawzon, but may be that's too
    // character specific?
    progression?: ProgressionType[];
  };

  export const GYMNAST: Type = {
    category: Category.PROFESSION,
    description: 'Trains in gymnastics.',
    name: 'Gymnast',
    progression: [
      { level: 10, skill: Skill.BACK_FLIP_LV1 },
      { level: 25, skill: Skill.DOUBLE_BACK_FLIP_LV1 },
      { level: 50, skill: Skill.HIGH_JUMP_LV1 },
      { level: 70, skill: Skill.CONCENTRATION_LV1 },
    ],
  };

  export const WIZARD: Type = {
    category: Category.PROFESSION,
    description: 'Studies mysterious forces.',
    name: 'Wizard',
    progression: [
      { level: 10, skill: Skill.GUST_LV1 },
      { level: 25, skill: Skill.FLARE_LV1 },
      { level: 50, skill: Skill.HEAL_LV1 },
      { level: 70, skill: Skill.LIGHT_LV1 },
    ],
  };

  export const HISTORIAN: Type = {
    category: Category.PROFESSION,
    description: 'Studies the world as it was.',
    name: 'Historian',
    progression: [
      { level: 10, skill: Skill.APPRAISE_LV1 },
      { level: 25, skill: Skill.SCAN_LV1 },
      { level: 50, skill: Skill.HERALDIC_LION_LV1 },
    ],
  };
  export const BODY_BUILDER: Type = {
    category: Category.PROFESSION,
    description: 'Do you even lift?',
    name: 'Body Builder',
    progression: [{ level: 50, skill: Skill.SCRIBBLES_LV1 }],
  };

  // may be anyone can become a cook?>
  export const COOK: Type = {
    category: Category.PROFESSION,
    description: 'Prepares and cooks food',
    name: 'Cook',
    progression: [{ level: 10, skill: Skill.PREPARE_FOOD_LV1 }],
    // todo prepare different food items
  };

  export const CHEERLEADER: Type = {
    category: Category.PROFESSION,
    description: 'Cheers their team as a form of encouragement.',
    name: 'Cheerleader',
    progression: [
      { level: 1, skill: Skill.CHEER_LV1 },
      { level: 10, skill: Skill.SUPPORT_LV1 },
      { level: 40, skill: Skill.INSPIRE_LV1 },
      { level: 50, skill: Skill.HOPE_LV1 },
    ],
  };

  export const COMMANDER: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize in giving orders to others.',
    name: 'Commander',
    progression: [
      { level: 1, skill: Skill.BOAST_LV1 },
      { level: 12, skill: Skill.BOAST_LV2 },
      { level: 10, skill: Skill.LAST_STAND_LV1 },
      { level: 50, skill: Skill.BLITZ_STRIKE_LV1 },
      { level: 80, skill: Skill.FLANK_LV1 },
    ],
  };

  export const MAGI: Type = {
    category: Category.ARCHETYPE,
    description: 'Has a basic understanding of Magic',
    name: 'Magi',
    prerequisites: [],
    progression: [],
  };

  export const MAGI_BLACK: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize destruction Magic',
    history: 'Harnessed from the power of Ouren',
    name: 'MagiBlack',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.DARKNESS_LV1 },
      { level: 25, skill: Skill.DESOLATE_LV1 },
    ],
  };

  export const MAGI_BLUE: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize water Magic',
    history: 'Harnessed from the power of Genki',
    name: 'Magi Blue',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.RAGE_LV1 },
      { level: 15, skill: Skill.AQUA_LV1 },
      { level: 25, skill: Skill.TSUNAMI_LV1 },
    ],
  };

  export const MAGI_BROWN: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize rock Magic',
    history: 'Harnessed from the power of Asmin',
    name: 'Magi Brown',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.QUAKE_LV1 },
      { level: 15, skill: Skill.LANDSLIDE_LV1 },
    ],
  };

  export const MAGI_GREEN: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize time Magic',
    history: 'Harnessed from the power of Void',
    name: 'Magi Green',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.STOP_LV1 },
      { level: 15, skill: Skill.SLOW_LV1 },
      { level: 15, skill: Skill.HASTE_LV1 },
    ],
  };

  export const MAGI_PINK: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize charm Magic',
    history: 'Harnessed from the power of Suyri',
    name: 'Magi Pink',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.CHARM_LV1 },
      { level: 15, skill: Skill.CHILL_LV1 },
    ],
  };

  export const MAGI_PURPLE: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize ??? Magic',
    history: 'Harnessed from the power of Diag',
    name: 'Magi Purple',
    prerequisites: ['MAGI'],
    progression: [{ level: 10, skill: Skill.QUAKE_LV1 }],
    // TODO CHANGE may be instead of quake do tainted
  };

  export const MAGI_WHITE: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize snow Magic',
    history: 'Harnessed from the power of Lawzon',
    name: 'Magi White',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.BLIZZARD_LV1 },
      { level: 10, skill: Skill.FROST_LV1 },
      { level: 10, skill: Skill.CHILL_LV1 },
    ],
  };

  export const MAGI_YELLOW: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize absorption Magic',
    history: 'Harnessed from the power of Wisp',
    name: 'Magi Yellow',
    prerequisites: ['MAGI'],
    progression: [
      { level: 10, skill: Skill.DRAIN_LV1 },
      { level: 25, skill: Skill.LEECH_LV1 },
      { level: 50, skill: Skill.DRAIN_LV1 },
    ],
  };

  export const GUARD: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize in protection.',
    name: 'Guard',
    progression: [{ level: 10, skill: Skill.BLOCK_LV1 }],
  };

  export const GUARDIAN: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize in protection.',
    name: 'Guardian',
    progression: [],
  };

  export const HERO: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize in saving others.',
    name: 'Hero',
    progression: [],
  };

  export const KNIGHT: Type = {
    category: Category.ARCHETYPE,
    description: 'A honored fighter who protects the kingdom.',
    name: 'Knight',
    progression: [],
  };

  export const MECHANIC: Type = {
    category: Category.ARCHETYPE,
    description: 'Specializes in electromechanical engineering',
    name: 'Mechanic',
    progression: [{ level: 10, skill: Skill.SCAN_LV1 }], // Actions: Tools
  };

  export const ROUGE: Type = {
    category: Category.ARCHETYPE,
    description: 'Specializes sneak attacks and picking locks',
    name: 'Rouge',
    progression: [
      { level: 10, skill: Skill.DUAL_WELD_LV1 },
      { level: 10, skill: Skill.PICKPOCKET_LV1 },
    ],
  };

  export const ROYALTY: Type = {
    category: Category.ARCHETYPE,
    description: 'Specializes in ruling others',
    name: 'Royalty',
    progression: [],
  };

  export const REBEL: Type = {
    category: Category.ARCHETYPE,
    description: 'Rebel',
    name: 'Rebel',
    progression: [{ level: 10, skill: Skill.STRIKE_LV1 }],
  };

  export const SCOUT: Type = {
    category: Category.ARCHETYPE,
    description:
      'Specialize in moving ahead of the party to gathering information and reconnaissance.',
    name: 'Scout',
    progression: [{ level: 10, skill: Skill.SCOUT_LV1 }],
  };

  export const SOLIDER: Type = {
    category: Category.ARCHETYPE,
    description:
      'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.',
    name: 'Solider',
    progression: [{ level: 10, skill: Skill.CLEAVE_LV1 }],
  };

  export const SUMMONER: Type = {
    category: Category.ARCHETYPE,
    description: 'Summons and commands magical beings.',
    name: 'Summoner',
    progression: [
      { level: 10, skill: Skill.SUMMON_LV1 },
      { level: 10, skill: Skill.DISMISS_LV1 },
      { level: 10, skill: Skill.COMMAND_LV1 },
    ],
  };

  export const THIEF: Type = {
    category: Category.ARCHETYPE,
    description: 'Proficient at stealing and picking locks.',
    name: 'Thief',
    progression: [
      { level: 10, skill: Skill.PICKPOCKET_LV1 },
      { level: 10, skill: Skill.PICK_LOCK_LV1 },
    ],
  };

  export const WARRIOR: Type = {
    category: Category.ARCHETYPE,
    description: 'Specializes in combat on the battlefield.',
    name: 'Warrior',
    progression: [],
  };

  export const XSOLIDER: Type = {
    category: Category.ARCHETYPE,
    description:
      'Soldiers that have gone against their teachings to gain new skills.',
    name: 'XSolider',
    progression: [],
  };

  export const ASSASSIN: Type = {
    category: Category.ARCHETYPE,
    description: 'Specializes in sneak attacks and picking locks.',
    name: 'Assassin',
    progression: [
      { level: 3, skill: Skill.DUAL_WELD_LV1 },
      { level: 12, skill: Skill.PICKPOCKET_LV1 },
      { level: 18, skill: Skill.PICK_LOCK_LV1 },
      { level: 20, skill: Skill.BACK_FLIP_LV1 },
    ],
  };

  export const HEALER: Type = {
    category: Category.ARCHETYPE,
    description: 'Specialize in healing.',
    name: 'Healer',
    progression: [],
  };

  export const BARD: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Bard',
    progression: [],
  };

  export const DUELIST: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Duelist',
    progression: [{ level: 10, skill: Skill.PARRY_LV1 }],
  };

  export const RUNE_KING: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Rune King',
    progression: [{ level: 10, skill: Skill.BOAST_LV1 }],
  };

  export const MAIDEN: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Maiden',
    progression: [],
  };

  export const Keeper: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Keeper',
    progression: [],
  };

  export const SAGE: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Sage',
    progression: [],
  };

  export const POSSESSED: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Possessed',
    progression: [],
  };

  export const NINJA: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Ninja',
    progression: [],
  };

  export const AMBER_ASSASSIN: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Amber Assassin',
    progression: [],
  };

  export const ELITE_ASSASSIN: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Elite Assassin',
    progression: [],
  };

  export const ENGINEER: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Engineer',
    progression: [],
  };

  export const BERSERKER: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Berserker',
    progression: [],
  };

  export const ONI: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Oni',
    progression: [],
  };

  export const KEEPER: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Keeper',
    progression: [],
  };

  export const LIGHTENING_WARRIOR: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Lightening Warrior',
    progression: [
      { level: 10, skill: Skill.STRIKE_LV1 },
      { level: 15, skill: Skill.SHOCK_LV1 },
    ],
  };

  export const OUROBOROS: Type = {
    category: Category.ARCHETYPE,
    description: '',
    name: 'Ouroboros',
    progression: [],
  };
}

export const DisciplineIds = Object.keys(Discipline);

export type DisciplineId = keyof typeof Discipline;

export function canLearn(
  disciplineId: DisciplineId,
  currentDisciplines: DisciplineId[],
): boolean {
  const prerequisites = Discipline[disciplineId].prerequisites ?? [];
  const currentDisciplinesSet = new Set(currentDisciplines);

  for (const discipline of prerequisites) {
    if (!currentDisciplinesSet.has(discipline)) {
      return false;
    }
  }

  return true;
}
