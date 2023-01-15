import type { NextPage } from 'next';
import Container from '../../components/Container';

const About: NextPage = () => {
  return (
    <Container title="About | Aryan Pathania" description="About Aryan">
      <main>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="mb-8">About Me</h1>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            Hey, I'm Aryan Pathania, a Computer Science and Engineering student
            at National Institute of Technology, Hamirpur.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            I like using emojies in commit messages.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            I like to keep things simple and minimal. Do one thing and do it
            well.
          </p>
          <h3>FOSS ❤️</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            I believe in the power of collaboration and the sharing of
            knowledge, which is why I am a strong advocate for open source
            software. (This website is open source, you can find the source code
            at <a href="https://github.com/aynp/portfolio">aynp/portfolio</a>)
          </p>
          <h3>Linux 🐧</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            I also have keen intrest in Linux Desktop. I would 100% for sure not
            spend hours customizing my desktop exactly to my liking.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            Here are a few technologies I have experience with
            <ul className="list-disc">
              <li>JavaScript / TypeScript</li>
              <li>Go</li>
            </ul>
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            Here I some technologies I want to explore but haven't yet
            <ul className="list-disc">
              <li>Rust</li>
            </ul>
          </p>
          <p></p>
        </div>
      </main>
    </Container>
  );
};

export default About;
