import {GearSlot} from './gear';

/**
 * Outfit
 *
 * A collection of garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individuallly.
 */
export type OutfitType = {
  name: string;
  description: string;
  gearSlots?: GearSlot[];
};

export enum Outfit {
  TSHIRT_AND_JEANS = 'T-Shirt and Jeans',
  OFFICERS_UNIFORM = "Officer's Uniform",
}

export const TShirtAndJeans: OutfitType = {
  name: Outfit.TSHIRT_AND_JEANS,
  description: 'White t-Shirt and denim jeans',
  gearSlots: [GearSlot.OUTFIT],
};

export const OfficersUniform: OutfitType = {
  name: Outfit.OFFICERS_UNIFORM,
  description: 'Black Embellished Tarry Coat',
  gearSlots: [GearSlot.OUTFIT],
};
