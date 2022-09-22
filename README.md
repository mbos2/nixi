# Nixi Discord Bot

This is a repository of a discord bot called Nixi.  
Nixi is a micro discord bot with only one function:

- Create an announcement message in a specific channel when a server event is created.

## How to use Nixi

Currently, the only way to use this bot is to self-host it.

Clone the repository by using this command

```
git clone https://github.com/mbos2/nixi-bot.git
```

In the `ROOT` folder, create a file called `config.json`.  
The content of `config.json` file must be a bot token, client ID and your server ID.

```
{
	"token": "YOUR_BOT_TOKEN",
  "clientId": "YOUR_CLIENT_ID",
	"guildId": "YOUR_SERVER_ID"
}
```

Client Id and Bot token you can get on this link https://discord.com/developers/applications.
You need to create a bot application to get everything you need and to be able to use this bot.

Read about how to set up your bot application in discord developers portal: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot

**As you will be the owner of the bot while self-hosting it, it is safe to give administration rights to your bot in the discord developers portal.**
