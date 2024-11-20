import { News } from '../interfaces/news';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';

interface Props {
  title: string;
  titleUrl?: string;
  news: News[];
}

function NewsSidebar({ title, titleUrl, news }: Props) {
  return (
    <section className="p-4 bg-white rounded-[18px]">
      {title && <NewsHeader title={title} url={titleUrl} />}
      {news.map((item, index) => (
        <div key={item.title}>
          <NewsItem {...item} />
          {index < news.length - 1 && <hr className="my-3 bg-[#e3e3e3]" />}
        </div>
      ))}
    </section>
  );
}

export default NewsSidebar;
