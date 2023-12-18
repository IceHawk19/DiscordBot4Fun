require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const diceRoll = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

diceRoll.on('ready', (c) => {
    console.log(`😤 ${c.user.tag} is online.`)
});


diceRoll.on('interactionCreate', (interaction) =>{
    if(interaction.isChatInputCommand()){
        if(interaction.commandName =='r'){
            var diceInput = interaction.options.get('dice-d-sides').value.split('d');
            const numDice = Math.round(Number(diceInput[0]));
            const numSides = Math.round(Number(diceInput[1]));
            const diceOutputs = [];
            diceSum = 0;
            diceMax = 0;

            if(numDice <= 324 && numSides <= 324 && numDice > 0 && numSides > 0){
                for(let i = 0; i < numDice; i++){
                    diceOutputs[i] = Math.floor(Math.random() * numSides) + 1;
                    diceSum = diceSum + diceOutputs[i];
                    diceMax = diceMax + numSides;
                }

                if(diceSum == numDice && numDice != 1){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + diceOutputs.join(' + ') + ' for a total of **' + diceSum + ' womp womp**');
                }
                else if(diceSum == numDice){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + '**' + diceSum + ' womp womp**');
                }
                else if(diceSum == diceMax && numDice != 1){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + diceOutputs.join(' + ') + ' for a total of **' + diceSum + ' YIPEEEEEEE**');
                }
                else if(diceSum == diceMax){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + '**' + diceSum + ' YIPEEEEEEE**');
                }
                else if(numDice != 1){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + diceOutputs.join(' + ') + ' for a total of **' + diceSum + "**");
                }
                else{
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + "**" + diceSum + "**");
                }
            }
            else{
                interaction.reply({content:'Please use less than or equal to 324 and more than 0 dice and sides. Also make sure you are formating the entry correctly (NdX) \n Thank you.', ephemeral: true});
            }
        }
        else if(interaction.commandName == 'champinfo'){
            var champName = interaction.options.get('champ-name').value;

            champName = champName.replace(/[^a-zA-Z0-9]/g, '');
            champName = champName.replace(/[0-9]/g, '');

            interaction.reply('Lolalytics: <https://lolalytics.com/lol/' + champName + '/build/> \n' +
            'UGG:  <https://u.gg/lol/champions/' + champName + '/build> \n' +
            'OPGG: <https://www.op.gg/champions/' + champName + '/build>'
            );
        }
    }
})

diceRoll.login(process.env.TOKEN);
