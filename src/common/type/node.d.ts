declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly DATABASE_HOST: string;
    readonly DATABASE_PORT: string;
  }
}
