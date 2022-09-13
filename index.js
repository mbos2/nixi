const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
  console.log(interaction)
	if (!interaction.isChatInputCommand()) {
    console.log('Interaction is nota chat input command.')
    return;
  }

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
    console.log(command);
    console.log('Command does not exist.');
    return;
  }

	try {
    console.log('COMMAND OBJECT: ');
    console.log(command);

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