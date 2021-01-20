declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        MONGO_URL: string;
        JWT_SECRET: string;
        JWT_EXPIRES_IN_SECOUNDS: number;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}