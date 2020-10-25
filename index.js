const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

prefix = '!'

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'status') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    message.channel.send(`https://http.cat/${args[0]}.jpg`);
  }
});



client.login(process.env.BOT_TOKEN);
