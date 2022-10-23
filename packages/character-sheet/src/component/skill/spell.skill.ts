import {Attribute} from '../attribute';
import {EffectTag} from '../tag.effect';
import {StatusEffect} from '../status.effect';
import {EffectRecord} from '../table.effect';

/**
 * Spells are actions that are casted by magic users.
 * Spells feature a prefix that differs based on skill level.
 * This indicates to astute players the magic rankings of their adversary
 *
 * | min | max | rank   | example        |
 * | --  | --  | --     | --             |
 * |  0  |   3 | Normal | Fireball       |
 * |  3  |   6 | Mega   | Mega Fireball  |
 * |  6  |   9 | Giga   | Giga Fireball  |
 * |  9  |  12 | Tera   | Tera Fireball  |
 * | 12  |  15 | Omega  | Omega Fireball |
 */

export enum Spell {
  GRAVITY = 'Gravity',
  SHOCK = 'Shock',
  QUAKE = 'Quake',
  LANDSLIDE = 'Landslide',
  BLIZZARD = 'Blizzard',
  DARKNESS = 'Darkness',
  STOP = 'Stop',
  SLOW = 'Slow',
  HASTE = 'Haste',
  CHILL = 'Chill',
  CHARM = 'Charm',
  FROST = 'Frost',
  LEECH = 'Leech',
  DRAIN = 'Drain',
  FIREBALL = 'Fireball',
  INFERNO = 'Inferno',
  TWISTER = 'Twister',
  GUST = 'Gust',
  GALE = 'Gale',
  CYCLONE = 'Cyclone',
  TSUMANI = 'Tsunami',
  AQUA = 'Aqua',
  HEAL = 'Heal',
  REVIVE = 'Revive',
  CURE = 'Cure',
  BARRIR = 'Barrier',
  BOOM = 'Boom',
  REFLECT = 'Reflect',
  FLARE = 'Flare',
  MERTEOR = 'Meteor',
  TELEPATHY = 'Telepathy',
  LIGHT = 'Light',
  DESOLATE = 'Desolate',
}

// menuSlot: MenuSlot.First,
// category: SkillCategory.CLASS,

export namespace SpellSkill {
  export type SpellType = {
    name: string;
    description: string;
    targets?: number;
    effect?: EffectRecord[];
  };

  export const Gravity: SpellType = {
    name: 'Gravity',
    description:
      'Coalesce gravity around target. Causes flying targets to hit ground',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
      },
    ],
  };

  export const Shock: SpellType = {
    name: 'Shock',
    description: 'Electrocutes target',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.ELECTRIC]},
      {add: StatusEffect.STUNNED, chance: 0.2, tags: [EffectTag.ELECTRIC]},
    ],
  };

  export const Quake: SpellType = {
    name: 'Quake',
    description: 'Shakes earth surrounding target',
    targets: 1, // AOE?
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH]},
      {
        add: StatusEffect.DOWN,
        chance: 0.2,
        tags: [EffectTag.EARTH, EffectTag.GROUNDLEVEL],
      },
    ],
  };

  export const Landslide: SpellType = {
    name: 'Landslide',
    description: 'Creates a landslide',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH]},
      {add: StatusEffect.DOWN, chance: 0.2, tags: [EffectTag.EARTH]},
      {add: StatusEffect.EXILED, chance: 0.3, tags: [EffectTag.EARTH]},
    ],
  };

  export const Blizzard: SpellType = {
    name: 'Blizzard',
    description: 'Creates a Blizzard',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.WATER, EffectTag.AIR],
      },
      {
        add: StatusEffect.COLD,
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.AIR],
      },
      {
        add: StatusEffect.EXILED,
        chance: 0.3,
        tags: [EffectTag.WATER, EffectTag.AIR],
      },
    ],
  };

  export const Fireball: SpellType = {
    name: 'Fireball',
    description: 'Shoot a fireball at target',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE]},
      {add: StatusEffect.BURNED, chance: 0.2, tags: [EffectTag.FIRE]},
    ],
  };

  export const Inferno: SpellType = {
    name: 'Inferno',
    description: 'Creates a Inferno',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE]},
      {add: StatusEffect.BURNED, chance: 0.2, tags: [EffectTag.FIRE]},
    ],
  };

  export const Twister: SpellType = {
    name: 'Twister',
    description: 'Creates a Twister',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR]},
      {
        add: StatusEffect.BURNED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
  };

  export const Gust: SpellType = {
    name: 'Gust',
    description: 'Creates a Gust',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR]},
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
  };

  export const Gale: SpellType = {
    name: 'Gale',
    description: 'Creates Gale',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR]},
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
  };

  export const Cyclone: SpellType = {
    name: 'Cyclone',
    description: 'Creates Cyclone',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR]},
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
  };

  export const Tsunami: SpellType = {
    name: 'Tsunami',
    description: 'A water-based attack that creates Tsunami',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER]},
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL],
      },
    ],
  };

  export const Aqua: SpellType = {
    name: 'Aqua',
    description: 'Creates Aqua',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER]},
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL],
      },
    ],
  };

  export const Heal: SpellType = {
    name: 'Heal',
    description: 'Heal target',
    targets: 1,
    effect: [{add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER]}],
  };

  export const Revive: SpellType = {
    name: 'Revive',
    description: 'Restore life to target',
    targets: 1,
    effect: [{remove: StatusEffect.LIFELESS, chance: 0.9, tags: []}],
  };

  export const Cure: SpellType = {
    name: 'Cure',
    description: 'Cures StatusEffects',
    targets: 1,
    effect: [
      {remove: StatusEffect.COLD, chance: 1},
      {remove: StatusEffect.DOOMED, chance: 1},
      {remove: StatusEffect.INFECTION, chance: 1},
      {remove: StatusEffect.SILENCE, chance: 1},
    ],
  };

  export const Barrier: SpellType = {
    name: 'Barrier',
    description: 'Barrier StatusEffects',
    targets: 1,
    effect: [{add: StatusEffect.BARRIER, chance: 1, tags: [EffectTag.AIR]}],
  };

  export const Boom: SpellType = {
    name: 'Boom',
    description: 'Cast Boom on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
    ],
  };

  export const Reflect: SpellType = {
    name: 'Reflect',
    description: 'Cast Reflect on target',
    targets: 1,
    effect: [{add: StatusEffect.REFLECT, chance: 1}],
  };

  export const Flare: SpellType = {
    name: 'Flare',
    description: 'Cast Flare on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.LIGHT],
      },
    ],
  };

  export const Meteor: SpellType = {
    name: 'Meteor',
    description: 'Cast Meteor on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.EARTH],
      },
    ],
  };

  export const Telepathy: SpellType = {
    name: 'Telepathy',
    description: 'Cast Telepathy on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.PSYCHIC],
      },
    ],
  };

  export const Light: SpellType = {
    name: 'Light',
    description: 'Cast light on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.LIGHT],
      },
    ],
  };

  export const Desolate: SpellType = {
    name: 'Desolate',
    description: 'To make an area empty or bare.',
    targets: 1,
    effect: [
      {remove: Attribute.LIFE, quantity: '1d6+4', tags: [EffectTag.DARKNESS]},
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.DARKNESS],
      },
    ],
  };

  export const Darkness: SpellType = {
    name: 'Darkness',
    description: 'Decrease the area that your opponent can see',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.DARKNESS],
      },
    ],
  };

  export const Stop: SpellType = {
    name: 'Stop',
    description: 'Freezes a chracter in time',
    targets: 1,
    effect: [
      {
        add: StatusEffect.STOP,
        tags: [EffectTag.TIME],
      },
    ],
  };

  export const Slow: SpellType = {
    name: 'Slow',
    description: 'Slow down an opponent',
    targets: 1,
    effect: [
      {
        add: StatusEffect.SLOW,
        tags: [EffectTag.TIME],
      },
    ],
  };

  export const Haste: SpellType = {
    name: 'Haste',
    description: 'Speed up a character',
    targets: 1, // self
    effect: [
      {
        add: StatusEffect.HASTE,
        tags: [EffectTag.TIME],
      },
    ],
  };

  export const Chill: SpellType = {
    name: 'Chill',
    description: '',
    targets: 1,
  };

  export const Charm: SpellType = {
    name: 'Charm',
    description: '',
    targets: 1,
  };

  export const Frost: SpellType = {
    name: 'Frost',
    description: '',
    targets: 1,
  };

  export const Absorb: SpellType = {
    name: 'Frost',
    description: '',
    targets: 1,
  };

  export const Leech: SpellType = {
    name: 'Leech',
    description: '',
    targets: 1,
  };

  export const Drain: SpellType = {
    name: 'Drain',
    description: '',
    targets: 1,
  };
}
