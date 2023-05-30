# Rad Discord GPT Starter 🤠

Basic starter repo for quickly spinning up a Discord bot that responds using an LLM via DiscordJS + LangChain. Uses OpenAI's `gpt-3.5-turbo` model to start but can easily be swapped to other supported LangChain models.

## Usage 🐴

### 1. Installation
- Clone down the repo
- Run `npm install`
- Create a `.env` file. You'll need the following keys:
```
  DISCORD_TOKEN - Discord bot token
  OPENAI_ORG - OpenAI organization ID
  OPENAI_API_KEY - OpenAI API Key
```

If you have an OpenAI account setup, you can get your organization ID [here](https://platform.openai.com/account/org-settings) and API key [here](https://platform.openai.com/account/api-keys).

In the next steps, we'll create a bot via the Discord Developer Portal to get our `DISCORD_TOKEN`.

### 2. [Create](https://discord.com/register) a Discord account

If you already have an account, skip to the next step.

### 3. [Login](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications) to the Developer Portal

This is where you will configure bot properties like the following:
- Bot name
- Bot avatar
- Bot base-level permissions
- Bot privacy settings + URL generator (adding to a server)

Follow the [instructions from the Discord.js guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#setting-up-a-bot-application) for setting up your bot and creating a bot token.

Add the bot token to your `.env` file as `DISCORD_TOKEN`.

### 4. Update the bot's Privileged Gateway Intents
To get access to presence and message content, we need to enable a few settings. Under the "Bot" section, make sure that the following is toggled:

<img src="https://cdn.discordapp.com/attachments/909697628122513468/1113014721331875881/Screenshot_2023-05-30_at_01.03.02.png" style="width: 75%"><br>

### 5. Add the bot to your Discord server

An easy way of adding your bot to your server is by URL. In the developer portal under "OAuth2" -> "URL Generator", mark the following checkboxes:

<img src="https://cdn.discordapp.com/attachments/909697628122513468/1113015879093977128/Screenshot_2023-05-30_at_01.07.39.png" style="width: 75%"><br>

Copy + paste the URL generated at the bottom into a channel in your server. Click the URL, accept permissions, and add the bot.

### 6. Chat with the bot

At this point, you should have a working Discord bot running locally! To chat, mention the bot with a message. The bot will return a generated response via a message reply.

Example: `@DiscordBot Hello! How are you?`

Response: `Hey there. I'm doing great, thanks for asking!`
