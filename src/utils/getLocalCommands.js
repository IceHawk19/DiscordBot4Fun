const path = require('path');
const getAllfiles = require('./getAllFiles');


module.exports = (exceptions) => {
    let localCommands = [];

    const commandCategories = getAllfiles(
        path.join(__dirname, '..', 'Commands'),
        true
    )
    
    for (const commandCategory of commandCategories){
        const commandFiles = getAllfiles(commandCategory);

        for (const commandFile of commandFiles){
            const commandObject = require(commandFile);
            localCommands.push(commandObject);
        }
    }

    return localCommands;
}