import { News } from '../interfaces/news';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';

interface Props {
  title?: string;
  titleUrl?: string;
  news: News[];
}

function NewsContainer({ title, titleUrl, news }: Props) {
  return (
    <div className="p-4 bg-white rounded-[18px]">
      {title && <NewsHeader title={title} url={titleUrl} />}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
          <div key={news[0].title} className="mb-2 last-of-type:mb-0">
            <NewsItem {...news[0]} style="image" />
          </div>
        </div>
        <div className="col-span-8 max-lg:col-span-6 max-md:col-span-12">
          {news.map((item) => (
            <div key={item.title} className="mb-2 last-of-type:mb-0">
              <NewsItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsContainer;
