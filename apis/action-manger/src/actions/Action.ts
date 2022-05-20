import { Gauge } from '../Gauge';
import { Thing } from '../Thing';
import { Attribute } from '../Attribute';
import { Effects } from '../Effects';

type Factor = [Attribute, number, string, string];
type Trait = Factor;

export abstract class Action {
    
    protected abstract _id: number;
    protected abstract _name: string;
    protected abstract _description: string;
    
    protected _actors: Array<Thing>;    
    protected _targets: Array<Thing>;

    abstract execute(actors: Array<Thing>, targets: Array<Thing>): Effects;

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    // interupts?
    // should these be actual Date times?

    /** 
     * the amount of time before an action can be executed
     */
    abstract get waitTime() : number;

    /**
     * the amount of time an action takes to execute
     */
    abstract get executionTime() : number;

    /**
     * the amount of time before an action can be executed again
     */
     abstract get recoveryTime() : number;

     /**
     * the amount of time before the action can be executed again
     */
    abstract get cooldownTime() : number;
}
