import { ActivityType, Client, GatewayIntentBits } from 'discord.js'
import { eventLoader } from './handlers/event'

const { Guilds } = GatewayIntentBits
const client = new Client({ intents: [Guilds] })

const main = (): void => {
    client.user?.setPresence({
        activities: [{ name: `Youtube`, type: ActivityType.Streaming }]
    })

    eventLoader(client).catch(err => {
        console.log(err)
    })
}

client
    .login(Bun.env.TOKEN)
    .then(() => {
        main()
    })
    .catch(err => {
        console.log(err)
    })
