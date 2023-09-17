import { type Client } from 'discord.js'
import { type Event } from '../class/Event'
import { getFiles } from '../utils/getFiles'

export const eventLoader = async (client: Client): Promise<void> => {
    for (const file of getFiles('events')) {
        const event: Event = (await import(file)).default

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
