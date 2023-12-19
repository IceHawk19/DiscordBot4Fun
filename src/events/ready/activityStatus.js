const { ActivityType } = require("discord.js");

module.exports = (diceRoll) => {
    diceRoll.user.setActivity({
        name: "Rolling the Dice",
        type: ActivityType.Custom,
    });
};