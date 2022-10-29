import type { NextPage } from 'next';
import BlogPost from '../../components/BlogPost';
import { getFilesList } from '../../lib/mdx';

const getBlogPosts = async () => {
  const blogs = await getFilesList('blog');
  return blogs;
};

const Blog = async () => {
  const blogs = await getBlogPosts();
  return (
    <main>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Blogs that I sometimes write.
        </p>

        <div className="relative w-full mb-4">
          {blogs.map((v: any) => (
            <BlogPost
              title={v.title}
              slug={v.slug}
              description={v.description}
              key={v.slug}
              date={v.date}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
