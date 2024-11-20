import { MenuGroup } from '../interfaces/header';

interface Props {
  menuGroups: MenuGroup[];
}

function Header({ menuGroups = [] }: Props) {
  return (
    <header className="bg-white border-b border-[#dadce0]">
      <div className="flex justify-center items-center container mx-auto">
        {menuGroups.map((group, index) => (
          <>
            <ul
              key={index}
              className="flex justify-center items-end flex-wrap content-center px-4"
            >
              {group.items.map((item, index) => (
                <li className="relative mx-4 py-2 text-sm" key={index}>
                  <a
                    href={item.url}
                    className={`block text-gray-600 font-medium hover:text-black text-nowrap ${
                      item.active
                        ? 'text-[#1a73e8] after:absolute after:content-[""] after:bottom-0 after:block after:h-1 after:w-full after:bg-[#1a73e8] after:border-t-[4px] after:border-[#1a73e8] after:rounded-t-[4px]'
                        : ''
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            {index === 0 && (
              <div className="h-full border-r border-[#dadce0] min-h-5"></div>
            )}
          </>
        ))}
      </div>
    </header>
  );
}

export default Header;
