import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';

const Blog: NextPage = () => {
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
        </div>
      </main>
    </Container>
  );
};

export default Blog;
