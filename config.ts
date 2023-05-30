import * as dotenv from 'dotenv';

dotenv.config();

type Config = {
  keys: Record<string, string | undefined>;
};

const config: Config = {
  keys: {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    OPENAI_ORG: process.env.OPENAI_ORG,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default config;
