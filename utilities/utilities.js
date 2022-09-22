const {SomewhereElseEventTemplate, VoiceChannelEventTemplate} = require('../templates/eventMessageTemplates'); 
module.exports = {
  createEventEmbedMEssage: (eventObject, client, channelId) => {
    const exampleEmbed = (eventObject.entityType === 1 || eventObject.entityType === 2) ? VoiceChannelEventTemplate(eventObject) : SomewhereElseEventTemplate(eventObject);
   
    const channel = client.channels.cache.get(channelId);
    channel.send({ embeds: [exampleEmbed] });
  },
};
