"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv = require("dotenv");
const schedule = require("node-schedule");
dotenv.config();
const clientOptions = {
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages],
};
const client = new discord_js_1.Client(clientOptions);
const token = process.env.DISCORD_KEY;
client.on('ready', (c) => {
    schedule.scheduleJob('0 */12 * * *', () => sendMonkeyPicture(c));
});
client.login(token);
async function sendMonkeyPicture(client) {
    try {
        const channel = client.channels.cache.get(process.env.CHANNEL_ID);
        if (channel instanceof discord_js_1.TextChannel) {
            const imageResponse = await fetch('https://www.placemonkeys.com/500/350?random');
            const imageBuffer = await imageResponse.arrayBuffer();
            const backToBuffer = Buffer.from(imageBuffer);
            await channel.send({ files: [backToBuffer] });
        }
    }
    catch (error) {
        console.error('Error occurred while sending a monkey picture:', error);
    }
}
