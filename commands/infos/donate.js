const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'donate',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}donate',

    execute(client, message, args) {
        message.delete()

        const embed = new MessageEmbed()
                                .setTitle("Donate here")
                                .setURL("https://paypal.me/JanselUI")
                                .setDescription("Click the Title to go to the donation page.")
                                

        message.channel.send(embed)
    },
};