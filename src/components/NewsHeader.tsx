import RightIcon from './Icons/RightIcon';

interface Props {
  title: string;
  url?: string;
}

function NewsHeader({ title, url }: Props) {
  return (
    <>
      {url ? (
        <a href={url}>
          <h3 className="flex items-center text-xl font-normal text-[#1867DC]">
            <span>{title}</span>
            <RightIcon />
          </h3>
        </a>
      ) : (
        <h3 className="text-xl font-normal">{title}</h3>
      )}
      <div className="bg-[#dbdce0] h-[1px] my-4"></div>
    </>
  );
}

export default NewsHeader;
