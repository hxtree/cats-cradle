import { EffectTag } from './tag.effect';
import { StatusEffect } from './status.effect';
import { Attribute } from './attribute';
import * as Skill from './skill';
export declare enum Modifier {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
export declare enum StatusEffectModifier {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
export declare enum SkillffectModifier {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
export interface AttributeAddEffectRecord {
    add: Attribute;
    quantity: string;
    chance?: number;
    tags?: Array<EffectTag>;
}
export interface AttributeRemoveEffectRecord {
    remove: Attribute;
    quantity: string;
    chance?: number;
    tags?: Array<EffectTag>;
}
export interface SkillEffectRecord {
    skill: Skill.Basic | Skill.Drive | Skill.Item | Skill.Spell | Skill.Tool | Skill.Weapon | Skill.Movement | Skill.Passive | Skill.Teamwork | Skill.Summon | Skill.Trap;
    modifer: SkillffectModifier;
    tags?: Array<EffectTag>;
}
export interface StatusEffectAddRecord {
    add: StatusEffect;
    chance?: number;
    tags?: Array<EffectTag>;
}
export interface StatusEffectRemoveRecord {
    remove: StatusEffect;
    chance: number;
    tags?: Array<EffectTag>;
}
export declare type EffectRecord = SkillEffectRecord | StatusEffectAddRecord | StatusEffectRemoveRecord | AttributeAddEffectRecord | AttributeRemoveEffectRecord;
/**
 * EffectTable
 * A representation of the effect of an action
 */
export declare type EffectTable = EffectRecord[];
