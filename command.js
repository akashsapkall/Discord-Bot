import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
const commands = [
//   {
//     name: 'ping',
//     description: 'Replies with Pong!',
//   },
  {
    name: 'create',
    description: 'Create Short url!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env._TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env._ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}