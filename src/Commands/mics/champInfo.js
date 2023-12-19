const {ApplicationCommandOptionType} = require('discord.js');

module.exports = {

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

    callback: (diceRoll, interaction) => {
        var champName = interaction.options.get('champ-name').value;

        champName = champName.replace(/[^a-zA-Z0-9]/g, '');
        champName = champName.replace(/[0-9]/g, '');

        interaction.reply('Lolalytics: <https://lolalytics.com/lol/' + champName + '/build/> \n' +
        'UGG:  <https://u.gg/lol/champions/' + champName + '/build> \n' +
        'OPGG: <https://www.op.gg/champions/' + champName + '/build>'
        );
    }
}