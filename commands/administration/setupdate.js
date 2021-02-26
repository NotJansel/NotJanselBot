module.exports = {
  name: 'setupdate',
  aliases: ['setup'],
  category: 'Administration',
  utilisation: '{prefix}setupdate [channel]',

  execute(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const errorEmbed2 = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setDescription(
          ":sunglasses: You can't do that! (*Needs `ADMINISTRATOR` Perm*)"
        );
      message.channel.send(errorEmbed2);
      return;
    }
    var qArgs = message.quoteArgs;
    if (!qArgs[1]) {
      message.channel.send("There is the channel missing...")
    } else {
      
      client.config.updates.servers[
        message.guild.id
      ] = message.mentions.channels.first().id;
      client.updateConfig();
      const confirmEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Works?")
        .setDescription(
          "This guild's update channel was sucessfully set to <#" +
            message.mentions.channels.first().id +
            ">\n\nA testing update embed was sent to your update channel, make sure it's the correct channel, and delete it if you want."
        )
        .setFooter(
          "no."
        );
      message.channel.send(confirmEmbed);
  
      const testEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Works!")
        .setDescription(
          "If you see this and it is the correct channel, then everything is set correctly."
        )
        .setFooter(
          "no."
        );
      message.guild.channels.cache
        .get(client.config.updates.servers[message.guild.id])
        .send(testEmbed);
    }
  },
};


