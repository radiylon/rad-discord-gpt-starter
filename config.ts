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
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
};

export default config;
