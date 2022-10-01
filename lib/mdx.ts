import path from 'path';
import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';

import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

const root = process.cwd();

/**
 *
 * @param type folder name in which file is to be read
 * @returns array of objects containing file name
 */
export async function getFiles(type: string) {
  return readdirSync(path.join(root, 'data', type));
}

/**
 *
 * @param type folder name in which the file is present
 * @param slug name of the file without .mdx extension
 * @returns a result which can be passed into to be rendered.
 */
export async function mdxFileToHtml(type: string, slug: string) {
  const source = path.join(root, 'data', type, `${slug}.mdx`);

  const fileContent = readFileSync(source, 'utf8');
  const { content, data } = matter(fileContent);

  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
      format: 'mdx',
    },
  });
}

export async function getFilesList(type: string) {
  const files = readdirSync(path.join(root, 'data', type));

  // const ans: any[] = [];

  // files.map((file) => {
  //   const source = path.join(root, 'data', type, file);
  //   const fileContent = readFileSync(source, 'utf8');
  //   const data = matter(fileContent);
  //   const fileSlug = file.replace('.mdx', '');

  //   ans.push({ content: data.content, data: data.data, slug: fileSlug });
  // });

  // return ans;

  return files.reduce((allPosts: any, postSlug: string) => {
    const fileContent = readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf-8'
    );
    const { content, data } = matter(fileContent);
    return [
      {
        content: content,
        title: data.title || 'Untitled Post',
        description: data.description || 'This post has no description',
        date: data.date || '--/--/----',
        slug: postSlug.replace('.mdx', ''),
        image: data.image || '',
        link: data.link || '',
      },
      ...allPosts,
    ];
  }, []);
}
