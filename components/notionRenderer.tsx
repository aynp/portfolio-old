import { Fragment } from 'react';
import Link from 'next/link';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Head from 'next/head';

export const Text = ({ text }: any) => {
  if (!text) {
    return null;
  }
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? 'font-bold' : '',
          code ? 'rounded bg-gray-200 dark:bg-gray-600 p-0.5 font-mono' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block: any) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol>{value.children.map((block: any) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block: any) => renderBlock(block))}</ul>;
};

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];
  switch (type) {
    case 'paragraph':
      return (
        <p className="mb-4 text-black dark:text-white">
          <Text text={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="text-2xl mb-2">
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="text-xl mb-2">
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="text-lg mb-2">
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block: BlockObjectResponse) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure className="mb-4">
          <img src={src} alt={caption} />
          {caption && (
            <figcaption className="text-black dark:text-white">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case 'code':
      /* value.language has the language specified */
      return (
        <pre className="bg-gray-200 dark:bg-gray-800 w-full p-4 rounded mb-4 overflow-x-scroll">
          <code className="text-black dark:text-white" key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case 'file':
      const src_file =
        value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div className="">
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_brank" className="block mb-4">
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

export default function NotionPost({ page, blocks }: any) {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4">
          <Text text={page.properties.Name.title} />
        </h1>
        <section className="w-full">
          {blocks.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
      </article>
    </div>
  );
}
