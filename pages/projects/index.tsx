import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';
import ProjectCard from '../../components/ProjectCard';

const Projects: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Projects | Aryan Pathania</title>
        <meta name="description" content="Projects by Aryan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Some of the projects that I have worked on.
          </p>
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
            <ProjectCard
              title="NFT Warranty"
              slug="nft-warranty"
              sourceCodeLink="https://github.com/aynp/nft-warranty"
              image="/nft-warranty.png"
              description="eCommerce warranties using NFTs."
            />
            <ProjectCard
              title="Pathfinding Algorithm Visualizer"
              slug="pathfinding-algorithms"
              sourceCodeLink="https://github.com/aynp/pathfinding-algorithm-visualizer"
              image="/test-banner.png"
              description="Visualize various path finding and maze solving algorithms."
            />
            <ProjectCard
              title="Dracula Wallpapers"
              slug="dracula-wallpapers"
              image="/test-banner.png"
              description="Wallpapers based on the Dracula Theme"
            />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Projects;
