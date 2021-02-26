module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Administration',
    utilisation: '{prefix}kick [user] <reason>',

    execute(client, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You don\'t have the permission to use this command.")
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            user.send(`You we're kicked from ${message.guild.name} for ` + args.slice(1).join(" "))
                //incase bot can't dm user
                .catch(() => message.reply("Unable to send message to user"))
                .then(() => member.kick({ reason: args.slice(1).join(" ") }))
                .then(() => message.reply(`Successfully kicked ${user.tag}`))
                .catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                });

        } else {
            message.reply("You didn't mention the user to kick!");
        }
    },
};