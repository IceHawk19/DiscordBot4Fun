require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const diceRoll = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

eventHandler(diceRoll);

diceRoll.login(process.env.TOKEN);
