import { AlignmentEnum, AsciiTable3 } from "ascii-table3";
import { type Client, Events } from "discord.js";
import { log } from "../utils/log";

export default {
    name: Events.ClientReady,
    once: false,
    execute(client: Client): void {
        log(client.user?.username, "info");

        log("=====================================[Memuat Guilds]====\n");
        const guildsTable = new AsciiTable3("Guilds")
            .setHeading("Guild ID", "Guild Name")
            .setAlign(2, AlignmentEnum.CENTER)
            .setStyle("unicode-round");

        client.guilds.cache.forEach((guild) => {
            guildsTable.addRow(guild.id, guild.name);
        });
        log(guildsTable.toString());
        log("=======================================================");
    },
};
