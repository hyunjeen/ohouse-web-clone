declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_OAUTH_KEY?: string;
      NEXT_PUBLIC_GOOGLE_BUCKET?: string;
      NEXT_PUBLIC_AXIOS_BASE_PATH?: string;
    }
  }
}

export {};
