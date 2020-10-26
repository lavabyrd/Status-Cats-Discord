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

  if (command === 'help' || args[0] === '-h' || '--help' || !args.length)  {
    console.log(message.author.email)
    return message.channel.send(`Please include a status code that you want to query like \`!status 200\`.`)
  } else if (command === 'status') {

      return message.channel.send(`Sorry ${message.author}, Please include a status code that you want to query like \`!status 200\`.`);
    }
    message.channel.send(`https://http.cat/${args[0]}.jpg`);
});



client.login(process.env.BOT_TOKEN);
