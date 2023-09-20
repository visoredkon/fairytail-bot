import { type Client } from 'discord.js'
import { getFiles } from '../utils/getFiles'
import { log } from '../utils/log'

/**
 * Loads all command from the 'commands' directory and registers them with the client.
 * @param client - The Discord client instance.
 * @returns A Promise that resolves when all commands have been registered.
 */
export const commandsLoader = async (_client: Client): Promise<void> => {
    await getFiles('commands')
        .then(files => {
            log(files, 'info')
        })
        .catch(err => {
            log(err, 'warn')
        })
}
