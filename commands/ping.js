const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		try {
      await interaction.deferReply('Pong!');
    } catch (error) {
      console.log(error)
    }
	},
};