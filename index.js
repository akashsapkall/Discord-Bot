
import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config(); 
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url=message.content.split('create')[1];
        return message.reply({
            content:"Generating short Id for"+url,
        });
    }
    message.reply({
        content:"Hii, I am Here To Help You !!"
    });
  });

// client.on(Events.ClientReady, readyClient => {
//   console.log(`Logged in as ${readyClient.user.tag}!`);
// });

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  interaction.reply("pong!!");
});

client.login(process.env._TOKEN);