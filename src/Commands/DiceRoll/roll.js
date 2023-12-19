const {ApplicationCommandOptionType} = require('discord.js');

module.exports = {

    //Defining the r (Roll) command

    //deleted: bool,
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

    callback: (diceRoll, interaction) => {
        var diceInput = interaction.options.get('dice-d-sides').value.split('d');
        const numDice = Math.round(Number(diceInput[0]));
        const numSides = Math.round(Number(diceInput[1]));
        const diceOutputs = [];
        diceSum = 0;
        diceMax = 0;

        //Requires user input in NdN format with values within the range of 0-324
        //Replies with an error message otherwise
        if(numDice <= 324 && numSides <= 324 && numDice > 0 && numSides > 0){

            //Rolls all the dice
            for(let i = 0; i < numDice; i++){
                diceOutputs[i] = Math.floor(Math.random() * numSides) + 1;
                diceSum = diceSum + diceOutputs[i];
                diceMax = diceMax + numSides;
            }


            //Maybe use string to hold message for cleaner code
            //Dice Roll Output
            if(diceSum == numDice){
                if(numDice != 1){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + diceOutputs.join(' + ') + ' for a total of **' + diceSum + ' womp womp**');
                }
                else{
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + '**' + diceSum + ' womp womp**');
                }
            }
            else if(diceSum == diceMax){
                if(numDice != 1){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + diceOutputs.join(' + ') + ' for a total of **' + diceSum + ' YIPEEEEEEE**');
                }
                else{
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + '**' + diceSum + ' YIPEEEEEEE**');
                }
            }
            else{
                if(numDice != 1){
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + diceOutputs.join(' + ') + ' for a total of **' + diceSum + "**");
                }
                else{
                    interaction.reply('You rolled ' + numDice + 'd' + numSides + '\n' + "**" + diceSum + "**");
                }  
            }
        }
        else{
            interaction.reply({
                content:'Please use less than or equal to 324 and more than 0 dice and sides. Also make sure you are formating the entry correctly (NdX) \n Thank you.', 
                ephemeral: true
            });
        }
    }
}