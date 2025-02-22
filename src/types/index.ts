export type SocialIconType = 'github' | 'twitter' | 'facebook';

export interface Section {
  title: string;
  link: string;
  blank?: boolean;
  icon?: SocialIconType;
}

export interface Work {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  mainvisual: {
    url: string;
  };
  body?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  keyVisual: {
    url: string;
  };
  tags?: string[];
  content?: string;
}
