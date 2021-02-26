const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'masterupdate',
    aliases: ['mu'],
    category: 'Administration',
    utilisation: '{prefix}masterupdate [channel] [message]',

    execute(client, message, args) {
        if (message.author.id != "596106961691607040") return message.reply('You are not NotJansel. U cannot use this command.');

        let mention;

        if (!args.length) return message.channel.send('> Usage 1: +masterupdate <#channel> <message> \n> Usage 2: +mu <#channel> <message>');

        const channel = message.mentions.channels.first();
        if (!channel) return message.reply('Please specify a channel!');

        if (!args[1]) return message.reply('Please specify a message to announce');

        message.delete()

        const embed = new MessageEmbed()
                                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                                .setDescription(args.slice(1).join(" "))
                                .setTimestamp()
                                .setColor('RANDOM')

        channel.send(embed)
    },
};