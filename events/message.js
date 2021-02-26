module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.discord.prefix;
    
    if (message.content.toLowerCase().includes('discord.gg' || 'discordapp.com/invite/')) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            
            if (message.member.id === '596106961691607040') return;

            let person = message.author.id;
            message.delete()
                .then(message.channel.send(`<@${person}> Link Deleted:\n**Invite links are not permitted on this server**`))
        }
    }

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};