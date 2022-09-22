const { EmbedBuilder } = require("discord.js");
module.exports = {
SomewhereElseEventTemplate: (eventObject) => {

  const startDate = new Date(eventObject.scheduledStartTimestamp);
  const endDate = new Date(eventObject.scheduledEndTimestamp);

  return new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle(eventObject.name)
  .setURL("https://discord.gg/w3schools")
  .setDescription(eventObject.description + `\n` + "@here")
  .setThumbnail(`https://cdn.discordapp.com/guild-events/${eventObject.id}/${eventObject.image}.png`)
  .addFields(
    {
      name: "Starting date",
      value: startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear(),
      inline: true,
    },
    {
      name: "Starting time",
      value: startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds(),
      inline: true,
    },
    { name: "\u200B", value: "\u200B", inline: true },
    {
      name: "Ending date",
      value: endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear(),
      inline: true,
    },
    {
      name: "Ending time",
      value: endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds(),
      inline: true,
    },
    { name: "\u200B", value: "\u200B", inline: true },
    {
      name: "Location",
      value:
        eventObject.entityMetadata &&
        (eventObject.entityMetadata !== null || eventObject.entityMetadata.location !== null)
          ? eventObject.entityMetadata.location
          : "",
    }
  )
  .setImage(`https://cdn.discordapp.com/guild-events/${eventObject.id}/${eventObject.image}.png`)
  .setTimestamp()
  .setFooter({
    text: "Participate on the event with us!",
    iconURL: `https://cdn.discordapp.com/guild-events/${eventObject.id}/${eventObject.image}.png`,
  });
},

VoiceChannelEventTemplate: (eventObject) => {
  const startDate = new Date(eventObject.scheduledStartTimestamp);

  return new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle(eventObject.name)
  .setURL("https://discord.gg/w3schools")
  .setDescription(eventObject.description + `\n` + "@here")
  .setThumbnail(`https://cdn.discordapp.com/guild-events/${eventObject.id}/${eventObject.image}.png`)
  .addFields(
    {
      name: "Starting date",
      value: startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear(),
      inline: true,
    },
    {
      name: "Starting time",
      value: startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds(),
      inline: true,
    },
    { name: "\u200B", value: "\u200B", inline: true },
    {
      name: "Location",
      value:`Our discord server on the channel <#${eventObject.channelId}>`,
    }
  )
  .setImage(`https://cdn.discordapp.com/guild-events/${eventObject.id}/${eventObject.image}.png`)
  .setTimestamp()
  .setFooter({
    text: "Participate on the event with us!",
    iconURL: `https://cdn.discordapp.com/guild-events/${eventObject.id}/${eventObject.image}.png`,
  });
}
}