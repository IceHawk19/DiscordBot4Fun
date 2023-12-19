const {testServer} = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (diceRoll, interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try{
        const commandObject = localCommands.find(
            (cmd) => cmd.name === interaction.commandName
        );

        if(!commandObject) return;

        await commandObject.callback(diceRoll, interaction)
    } catch (error) {
        console.log(`There was an error running command ${interaction.commandName}: ${error}`)
    }
};