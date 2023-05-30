import {
  Client, ClientUser, Events, GatewayIntentBits,
} from 'discord.js';
import { OpenAI } from 'langchain/llms/openai';
import config from '../config';

const model = new OpenAI({ openAIApiKey: config.keys.OPENAI_API_KEY, temperature: 0.2 });

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

let clientUser: ClientUser;

client.once(Events.ClientReady, () => {
  clientUser = client.user!;
  clientUser.setActivity({
    name: 'with haikus...',
  });
  console.log(`Logged in as ${clientUser.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
  try {
    const doNotRespond = message.author.bot || message.content.startsWith('!') || !message.guild || !message.mentions.users.has(clientUser.id);

    if (doNotRespond) return;

    await message.channel.sendTyping();

    const res = await model.call(message.content);

    if (res) {
      message.reply(res);
    }
  } catch (err) {
    console.error('Error: ', err);
  }
});

client.login(config.keys.DISCORD_TOKEN);
