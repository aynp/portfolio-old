import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type NotionPage = PageObjectResponse & {
  properties: {
    slug: {
      rich_text: {
        plain_text: string;
      }[];
    };
    Title: {
      title: {
        plain_text: string;
      }[];
    };
    Description: {
      rich_text: {
        plain_text: string;
      }[];
    };
  };
};
