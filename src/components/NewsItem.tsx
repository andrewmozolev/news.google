import { News } from '../interfaces/news';

interface Props extends News {
  style?: 'default' | 'compact' | 'image';
}

function NewsItem({
  icon,
  agency,
  title,
  date,
  href,
  image,
  style = 'default',
}: Props) {
  return (
    <article>
      <a href={href} className="group block pointer">
        {style === 'image' && image && (
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-xl mb-2"
          />
        )}
        <h1 className="flex items-center gap-1 text-xs font-medium">
          <img src={icon} alt={agency} className="h-[14px]" />
          <span className="text-[#202124]">{agency}</span>
        </h1>
        <p className="group-hover:underline text-[#444746] text-sm">{title}</p>
        <time className="text-xs text-[#444746]">{date}</time>
      </a>
    </article>
  );
}

export default NewsItem;
