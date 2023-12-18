require('dotenv').config();
const{REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [{
    name:'r',
    description: 'Roles an N sided die',
    options: [
        {
        name: 'dice-d-sides',
        description: 'Number of N dice with X sides to be rolled',
        type: ApplicationCommandOptionType.String,
        required: true,
        },
    ],
},
{
    name:'champinfo',
    description: 'Links to runes and builds for X champ',
    options: [
        {
            name: 'champ-name',
            description: 'champion name',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
},
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('before');
        await rest.put(
            Routes.applicationGuildCommands(process.env.BOT_ID, process.env.SERVER_ID),
            {body: commands}
            
        )
        console.log('after');
    } catch (error){
        console.log(`There was an error:  ${error}`);
    }
})();
