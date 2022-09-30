import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';
import TimelineItem from '../../components/TimelineItem';
import { parseJSON } from '../../lib/parseJSON';

const Timeline: NextPage = ({ timeline }: any) => {
  return (
    <Container>
      <Head>
        <title>Timeline | Aryan Pathania</title>
        <meta name="description" content="Blogs by Aryan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="mb-4">Timeline</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Timeline of some small things that I did. I keep track of my daily
            new learnings, discoveries, experiments, and other things here.
          </p>

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {timeline.map((item: any, i: any) => (
              <TimelineItem
                date={item.date || '--/--/----'}
                title={item.title || 'No title'}
                description={item.description || 'No description'}
                key={i}
                link={item.link || ''}
                linktext={item.linktext || ''}
                important={item.important || false}
              />
            ))}
          </ol>
        </div>
      </main>
    </Container>
  );
};

// Will probably the data to a database instead of storing it in a json file in repository 🥲
export async function getStaticProps() {
  const props = await parseJSON('timeline.json');
  return { props: props };
}
export default Timeline;
