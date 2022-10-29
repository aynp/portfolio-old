import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '../../components/BlogLayout';
import { getFiles, mdxFileToHtml } from '../../lib/mdx';

export default function PostPage(post: any) {
  return (
    <BlogLayout post={post}>
      <MDXRemote {...post} />
    </BlogLayout>
  );
}

/* https://nextjs.org/docs/basic-features/data-fetching/overview */

export async function getStaticPaths() {
  const blogs = await getFiles('blog');
  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do direct database queries.
export async function getStaticProps({ params }: any) {
  const post = await mdxFileToHtml('blog', params.slug);

  return { props: post };
}
