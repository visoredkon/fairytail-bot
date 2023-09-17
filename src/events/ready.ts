import { type Client, Events } from 'discord.js'
import { Event } from '../class/Event'

export default new Event({
    name: Events.ClientReady,
    once: false,
    execute(client: Client): void {
        console.log(client.user?.username)

        client.guilds.cache.forEach(guild => {
            console.log(`${guild.id}: ${guild.name}`)
        })
    }
})
