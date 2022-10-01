import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';
import SnippetCard from '../../components/SnippetCard';
import { getFilesList } from '../../lib/mdx';

const Snippets: NextPage = ({ snippets }: any) => {
  return (
    <Container>
      <Head>
        <title>Snippets | Aryan Pathania</title>
        <meta name="description" content="Snippets by Aryan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="mb-4">Snippets</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Code Snippets that I frequently use.
          </p>
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
            {snippets.map((snippet: any) => (
              <SnippetCard
                title={snippet.title}
                slug={snippet.slug}
                key={snippet.slug}
                description={snippet.description}
                image={snippet.image}
              />
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export async function getStaticProps() {
  const snippets = await getFilesList('snippet');
  return { props: { snippets } };
}

export default Snippets;
