import path from 'path';
import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';

const root = process.cwd();

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
        summary: data.summary || 'This post has no summary',
        date: data.date || '--/--/----',
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}
