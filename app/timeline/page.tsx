import TimelineItem from '../../components/TimelineItem';
import { parseJSON } from '../../lib/parseJSON';

const fetchData = async () => {
  const timeline = await parseJSON('timeline.json');
  return timeline;
};

const Timeline = async () => {
  const { timeline }: any = await fetchData();

  return (
    <main>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="mb-4">Timeline</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Timeline of some small things that I did. I keep track of my daily new
          learnings, discoveries, experiments, and other things here.
        </p>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timeline.map((item: any, i: any) => (
            <TimelineItem
              date={item.date || '--/--/----'}
              title={item.title || 'No title'}
              description={item.description || 'No description'}
              key={i}
              link={item.link || ''}
              linktext={item.linktext || ''}
              important={item.important || false}
            />
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Timeline;
