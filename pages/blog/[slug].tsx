import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import BlogLayout from '../../components/BlogLayout';
import Container from '../../components/Container';
import NotionPost from '../../components/notionRenderer';
import { getDatabase, getPostProps } from '../../lib/notion';
import saveSlug from '../../lib/saveSlug';

export const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID || '';

export default function PostPage(props: any) {
  return (
    <div className="">
      <Container>{NotionPost(props)}</Container>
    </div>
  );
}

export async function getStaticPaths() {
  const database = await getDatabase(blogDatabaseId);
  return {
    paths: database.map((page: any) => ({
      params: { slug: page.properties.slug.rich_text[0].plain_text },
    })),
    fallback: true,
  };
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do direct database queries.
export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const database = await getDatabase(blogDatabaseId);
  const post = database.find((page: any) => {
    return page.properties.slug.rich_text[0].plain_text === slug;
  });
  // const pageID = await saveSlug.get('blog', slug);
  return await getPostProps((post as PageObjectResponse).id);
}
