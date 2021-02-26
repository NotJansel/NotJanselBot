const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'featurerequest',
    aliases: ['fr'],
    category: 'Infos',
    utilisation: '{prefix}featureupdate // {prefix}fr',

    execute(client, message, args) {
        message.delete()

        const embed = new MessageEmbed()
                                .setTitle("Feature Request")
                                .setURL("https://discord.gg/SwnMsRr36y")
                                .setDescription("You want to request Features? Then click the title as it includes a Discord Link to the Server of my Owner. There you need to verify yourself and after that go to the specific channel for feature requests.")
                                .setTimestamp()
                                .setColor('RANDOM')

        message.channel.send(embed)
    },
};