export default function TimelineItem({
  date,
  title,
  description,
  link,
  linktext,
}: any) {
  return (
    <li className="mb-6 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h4>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      {link ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="mt-2 flex text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
          {linktext}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1 mt-0.5">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
      ) : (
        ''
      )}
      {/* <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
        {linktext}
        <svg
          aria-hidden="true"
          className="ml-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </a> */}
    </li>
  );
}
