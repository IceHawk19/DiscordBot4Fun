module.exports = async (diceRoll, serverID) => {
    let applicationCommands;

    if(serverID) {
        const server = await diceRoll.guilds.fetch(serverID);
        applicationCommands = server.commands;
    } else {
        applicationCommands = await diceRoll.application.commands;
    }

    await applicationCommands.fetch();
    return applicationCommands;
}