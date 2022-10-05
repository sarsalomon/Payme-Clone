declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number;
        MONGODB_URL: string;
        SECRET_KEY: string;
        BOT_TOKEN: string;
      }
    }
  }
  export {};