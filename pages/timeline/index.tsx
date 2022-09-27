import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';
import TimelineItem from '../../components/TimelineItem';

const DTDT: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>DTDT | Aryan Pathania</title>
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

          <div className="">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <TimelineItem
                date="2nd February 2022"
                title="Portfolio Website"
                description="Started creating my own portfolio website for showcasing my projects and blogs."
                link="/"
                linktext="View more"
              />
              <TimelineItem
                date="2nd February 2022"
                title="E-Commerce UI code in Tailwind CSS"
              />
              <TimelineItem
                date="April 2022"
                title="Docker"
                description="Getting started with docker"
              />
              <TimelineItem
                date="April 2022"
                title="Docker"
                description="Getting started with docker"
              />
            </ol>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default DTDT;
