const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg: any) => {
  if (msg.content === 'ping') {
    msg.reply('Vai po caralho amor');
  }
});

client.login(token);