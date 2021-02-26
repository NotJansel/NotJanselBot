module.exports = {
    name: 'name',
    aliases: ['p'],
    category: 'folder',
    utilisation: 'usage',

    execute(client, message, args) {
        if (message.author.id != "596106961691607040") {
            const errorEmbed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setDescription(
                "Fuck it you cant do that."
              );
            message.channel.send(errorEmbed);
            return;
          }
        
          var qArgs = message.quoteArgs;
          if (!qArgs[1] || (qArgs[4] && !message.mentions.channels.first())) {
            CommandHelp.showCommDetails(client,  message,  args, "sendupdate");
          } else {
            const updateEmbed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setFooter(
                "no."
              )
              .setDescription(qArgs[1]);
        
            if (qArgs[2]) {
              updateEmbed.setTitle(qArgs[1]);
            }
        
            var channel = client.channels.cache.get(client.config.updates.channels.updates);
            if (qArgs[4]) {
              channel = client.channels.cache.get(message.mentions.channels.first().id);
            }
            channel.send(updateEmbed);
            if (qArgs[3]) {
              channel.send(qArgs[3]);
            }
          }
    },
};