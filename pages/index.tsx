import { Suspense } from 'react';
import type { NextPage } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1">Aryan Pathania</h1>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Computer Science Student at{' '}
                <span className="font-semibold">NIT Hamirpur</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Welcome to my corner of the internet. Here I post my blogs,
                projects, snippets that I frequently use.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Aryan Pathania"
                height={176}
                width={176}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

          <h2>Featured Posts</h2>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Using Blockchain to Create NFT Based Warranties"
              link="/projects/nft-warranty"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Dracula Wallpapers"
              link="/projects/dracula-wallpapers"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
            <BlogPostCard
              title="Pathfinding and Maze Solving Algorithms"
              link="/projects/pathfinding-algorithms"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
          </div>
          <Link href="/blog">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all posts
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
          </Link>

          <h2 className="mb-4 mt-16">🚧 Under Construction</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This portfolio is currently being worked upon.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aynp/portfolio"
            className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            View Progress Here
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
      </Container>
    </Suspense>
  );
};

export default Home;
