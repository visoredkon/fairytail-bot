import { type Client } from 'discord.js'
import { getFiles } from '../utils/getFiles'

export const eventLoader = async (client: Client): Promise<void> => {
    for (const file of getFiles('events')) {
        const event: { once: boolean; name: string; execute: (client: Client) => void } = (await import(file))
            .default

        if (event.once) {
            client.once(event.name, clientCB => {
                event.execute(clientCB)
            })
        } else {
            client.on(event.name, clientCB => {
                event.execute(clientCB)
            })
        }
    }
}
