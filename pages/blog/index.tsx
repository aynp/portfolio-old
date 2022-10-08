import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';
import BlogPost from '../../components/BlogPost';
import { getDatabase } from '../../lib/notion';
import saveSlug from '../../lib/saveSlug';

export const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID || '';

const Blog: NextPage = ({ blogs }: any) => {
  return (
    <Container>
      <Head>
        <title>Blog | Aryan Pathania</title>
        <meta name="description" content="Blogs by Aryan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="mb-4">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Blogs that I sometimes write.
          </p>

          <div className="relative w-full mb-4">
            {blogs.map((blog: any) => (
              <BlogPost
                title={blog.properties.Name.title[0].plain_text}
                slug={blog.slug}
                description={
                  blog.properties.Description.rich_text[0].plain_text
                }
                key={blog.id}
                date={new Date(blog.created_time).toLocaleDateString('en-UK')}
              />
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export async function getStaticProps() {
  const blogs = await getDatabase(blogDatabaseId);
  // blogs.map((blog: any) => {
  //   blog.slug = blog.properties.slug.rich_text[0].plain_text;
  //   saveSlug.set('blog', blog.slug, blog.id);
  // });

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
