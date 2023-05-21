"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var clientOptions = {
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildMessageReactions,
        discord_js_1.GatewayIntentBits.GuildVoiceStates,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildPresences,
        discord_js_1.GatewayIntentBits.GuildEmojisAndStickers,
        discord_js_1.GatewayIntentBits.GuildIntegrations,
        discord_js_1.GatewayIntentBits.GuildWebhooks,
        discord_js_1.GatewayIntentBits.GuildInvites,
        discord_js_1.GatewayIntentBits.DirectMessages,
        discord_js_1.GatewayIntentBits.DirectMessageReactions,
        discord_js_1.GatewayIntentBits.DirectMessageTyping,
    ]
};
var client = new discord_js_1.Client(clientOptions);
var token = '2c1d3550df8acccdc74c7cc0d2825f88f22dd2da1c8da9d0e62ff6e6e1041532';
client.on('ready', function () {
    console.log("Bot is ready. Logged in as ".concat(client.user.tag));
});
client.login(token);
