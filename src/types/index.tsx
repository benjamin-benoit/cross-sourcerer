export interface Language {
    id: string;
    name: string;
    avatarUrl: string;
    login: string;
    bio: string;
    location: string;
    websiteUrl: string;
    status?: {
      message: string;
    };
  }