module.exports = {
    name: 'remoterequest',
    aliases: ['rr'],
    category: 'Infos',
    utilisation: '{prefix}remoterequest [Request] // {prefix}rr [Request]',

    execute(client, message, args) {
        if (!args[0]) return message.reply('Please specify a Feature to be requested');
        if (message.guild.id === '810212310508503091') return message.reply('This Command is disabled in this guild. To request features please go in <#814303716286922812>')
        let member = message.author.id
        let guild = message.guild.name
        client.channels.cache.get('814336072314126347').send(`Requested by <@${member}> from ${guild}: \n` + args.slice(0).join(" "))
        message.delete()
        message.channel.send("Request was sent successfully.")
    },
};