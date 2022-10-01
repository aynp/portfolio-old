import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../../components/Container';
import ProjectCard from '../../components/ProjectCard';
import { getFilesList } from '../../lib/mdx';

const Projects: NextPage = ({ projects }: any) => {
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
            {projects.map((project: any) => (
              <ProjectCard
                title={project.title}
                slug={project.slug}
                key={project.slug}
                link={project.link}
                image={project.image}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export async function getStaticProps() {
  const projects = await getFilesList('project');
  return { props: { projects } };
}

export default Projects;
