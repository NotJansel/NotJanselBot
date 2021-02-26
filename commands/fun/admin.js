module.exports = {
  name: 'admin',
  category: 'Fun',
  utilisation: '{prefix}admin',

  execute(client, message, args) {
    message.channel.send('Ha, you thought.')
  },
};