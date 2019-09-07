const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'nayjii') msg.channel.send('le plus beau');
  if (msg.content === 'everyone') msg.channel.send('@everyone, salut à tous !', { disableEveryone: false });
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), salut à tous !');
  
});

client.login('NjE5OTkyNTY4OTA1NTk2OTUz.XXQTNQ.-xqFpToQa9E8v9_Sf4Y_zgtVQnU');