import { type Client } from 'discord.js'

export class Event {
    private readonly _name: string
    private readonly _once: boolean
    readonly execute: (client: Client) => void

    constructor(object: { name: string; once: boolean; execute: (client: Client) => void }) {
        this._name = object.name
        this._once = object.once
        this.execute = object.execute
    }

    public get name(): string {
        return this._name
    }

    public get once(): boolean {
        return this._once
    }
}
