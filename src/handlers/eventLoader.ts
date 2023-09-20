import { type Client } from 'discord.js'
import { getFiles } from '../utils/getFiles'
import { log } from '../utils/log'

/**
 * Loads all event files from the 'events' directory and registers them with the client.
 * @param client - The Discord client instance.
 * @returns A Promise that resolves when all events have been registered.
 */
export const eventLoader = async (client: Client): Promise<void> => {
    await getFiles('events')
        .then(async files => {
            for (const file of files) {
                const eventModule = (await import(file)) as {
                    default: { once: boolean; name: string; execute: (client: Client) => void }
                }

                const event = eventModule.default

                if (event.once) {
                    client.once(event.name, (clientCB: Client) => {
                        event.execute(clientCB)
                    })
                } else {
                    client.on(event.name, (clientCB: Client) => {
                        event.execute(clientCB)
                    })
                }
            }
        })
        .catch(err => {
            log(err, 'err')
        })
}
