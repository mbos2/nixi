const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
  console.log(interaction)
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

client.on('error', (error) => {
  console.log(error)
})

client.login(token);