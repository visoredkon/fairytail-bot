import { ActivityType, Client, GatewayIntentBits } from "discord.js";
import { commandsLoader } from "./handlers/commandsLoader";
import { eventLoader } from "./handlers/eventLoader";
import { log } from "./utils/log";

const { Guilds } = GatewayIntentBits;
const client = new Client({ intents: [Guilds] });

client.user?.setPresence({
    activities: [{ name: "Youtube", type: ActivityType.Streaming }],
});

client
    .login(Bun.env.TOKEN)
    .then(() => {
        eventLoader(client).catch((err) => {
            log(err, "error");
        });
        commandsLoader(client).catch((err) => {
            log(err, "error");
        });
    })
    .catch((err) => {
        log(err, "error");
    });
