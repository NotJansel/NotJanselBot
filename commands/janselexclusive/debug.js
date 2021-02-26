module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        if (message.author.id != "596106961691607040") return message.reply('You are not NotJansel. U cannot use this command.');
        message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);
    },
};