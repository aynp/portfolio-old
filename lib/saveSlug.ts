import { promises as fs } from 'fs';
import path from 'path';

const saveSlug = {
  get: async (type: string, slug: string) => {
    const pageID = await fs.readFile(
      path.join(process.cwd(), '.cache', type, slug),
      'utf8'
    );
    return pageID;
  },
  set: async (type: string, slug: string, pageID: string) => {
    await fs.mkdir(path.join(process.cwd(), '.cache', type), {
      recursive: true,
    });
    return await fs.writeFile(
      path.join(process.cwd(), '.cache', type, slug),
      pageID
    );
  },
};

export default saveSlug;
