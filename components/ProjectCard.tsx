import Link from 'next/link';
import Image from 'next/future/image';

export default function ProjectCard({
  title,
  description,
  sourceCodeLink,
  image,
}: any) {
  return (
    <div className="flex flex-col max-w-sm h-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg"
        src={image}
        width={1000}
        height={100}
        alt=""
      />
      <div className="grow p-5 flex flex-col justify-between">
        <div>
          <h3>{title}</h3>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={sourceCodeLink}
            className="flex mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Source Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
