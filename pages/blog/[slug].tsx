import BlogLayout from '../../components/BlogLayout';
import Container from '../../components/Container';
import NotionPost from '../../components/notionRenderer';
import { getDatabase, getPostProps } from '../../lib/notion';

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
    paths: database.map((page) => ({ params: { slug: page.id } })),
    fallback: true,
  };
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do direct database queries.
export async function getStaticProps({ params }: any) {
  const { slug } = params;
  return await getPostProps(slug);
}
