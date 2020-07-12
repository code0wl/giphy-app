import { IGiphyPayload } from 'app/models/giphy/giphy.model';

export const mockGyphy: IGiphyPayload = {
  searchTerm: 'Trending',
  isMax: () => true,
  pagination: {
    total_count: 1,
    offset: 1,
    count: 1
  },
  data: [
    {
      title: 'Best Giphy ever',
      type: 'some type',
      id: '1234',
      slug: 'some slug',
      url: 'some url',
      bitly_gif_url: 'some other url',
      bitly_url: 'some other other url',
      embed_url: 'awesome giphy!',
      username: 'some username',
      source: 'some source',
      rating: 'some rating',
      content_url: 'some content rating',
      source_tld: 'some source url',
      source_post_url: 'some post url',
      trending_datetime: new Date()
    }
  ]
};
