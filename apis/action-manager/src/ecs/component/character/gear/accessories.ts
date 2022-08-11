export enum GearSlot {
  'RIGHT_WRIST' = 'Right Wrist',
  'LEFT_WRIST' = 'Left Wrist',
  'NECK' = 'Neck',
  'BELT' = 'Belt',
  'BACK' = 'Back',
  'RIGHT_HAND' = 'Right Hand',
  'LEFT_HAND' = 'Left Hand',
}

export class GoldBracelets {
  name: 'Gold Bracelets';
  description: 'Weighted gold bracelets that occupy both wrists meant';
  purpose: 'To keep Meeku’s power at bay (increase experience earned)';
  gearSlots: [GearSlot.RIGHT_WRIST, GearSlot.LEFT_WRIST];
}

export class RedScarf {
  name: 'Red Scarf';
  description: 'a red scarf knitted by Meeku’s mother to keep him warm.';
  gearSlots: [GearSlot.NECK];
}

export class FuneralJar {
  name: 'Funeral Jar';
  description: 'a jar meant to contain the ashes of the dead';
  gearSlots: [GearSlot.BELT];
}

export class SwordSheath {
  name: 'Sword sheath';
  description: 'a sheath meant to hold a broad sword.';
  gearSlots: [GearSlot.BACK];
}

export class MagenticGloves {
  name: 'Magnetic Gloves';
  description: 'Helps catch metal objects (Traez’s boomerang).';
  effects: '+20 to catch action.';
  gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}

export class CatchersMitt {
  name: 'Catchers Mitt';
  effects: '+20 to catch action.';
  gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}
