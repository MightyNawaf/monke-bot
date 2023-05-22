import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import * as schedule from 'node-schedule';

dotenv.config();

const clientOptions = {
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
};
const client = new Client(clientOptions);
const token = process.env.DISCORD_KEY;

client.on('ready', (c) => {
	schedule.scheduleJob('0/5 * * * *', () => sendMonkeyPicture(c));
});

client.login(token);
async function sendMonkeyPicture(client: Client) {
	try {
		const channel = client.channels.cache.get(process.env.CHANNEL_ID);
		if (channel instanceof TextChannel) {
			const imageResponse = await fetch('https://www.placemonkeys.com/500/350?random');
			const imageBuffer = await imageResponse.arrayBuffer();
			const backToBuffer = Buffer.from(imageBuffer);
			await channel.send({ files: [backToBuffer] });
		}
	} catch (error) {
		console.error('Error occurred while sending a monkey picture:', error);
	}
}
