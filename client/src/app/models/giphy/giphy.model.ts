export interface IGiphyPayload {
  data: IGiphy | IGiphy[];
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
  searchTerm?: string;
  offset?: string;
  isMax(): boolean;
}

export interface IGiphy {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username?: string;
  source: string;
  rating: string;
  content_url?: string;
  source_tld: string;
  source_post_url: string;
  trending_datetime: Date;
  title: string;
}
