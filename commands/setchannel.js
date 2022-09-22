const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const json = require('../config.json');

const data = new SlashCommandBuilder()
	.setName('event-channel')
	.setDescription('Set an event channel')
	.addChannelOption(option =>
		option
			.setName('channel')
			.setDescription('Channel ID/Name')
      .setRequired(true),
	);

module.exports = {
  data,
	async execute(interaction) {
		try {
      const eventConfigData = JSON.stringify({
        channelId: interaction.options.get('channel').value
      })
      fs.writeFile(`event-config-${json.guildId}.json`, eventConfigData, function (err) {
        if (err) return console.log(err);
      });
      await interaction.reply(`Events listener set for a channel <#${interaction.options.get('channel').value}>`);
    } catch (error) {
      console.log(error)
    }
	},
};