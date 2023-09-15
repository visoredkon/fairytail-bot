import { Client, GatewayIntentBits } from 'discord.js'

const { Guilds } = GatewayIntentBits
const client = new Client({ intents: [Guilds] })

client.once('ready', () => {
    console.log(client.user?.username)
})

client.login(Bun.env.TOKEN).catch(err => {
    console.log(err)
})
