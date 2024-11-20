import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import NewsSidebar from './components/NewsSidebar';
import { menuGroups } from './helpers/menuGroups';
import { topNews } from './helpers/news';

function App() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen">
      <Header menuGroups={menuGroups} />
      <div className="container mx-auto p-4 grid grid-cols-12 gap-4">
        <div className="col-span-8 max-md:col-span-12">
          <NewsContainer title="Top Stories" titleUrl="#" news={topNews} />
        </div>
        <div className="col-span-4 max-md:col-span-12">
          <NewsSidebar title="Local News" titleUrl="#" news={topNews} />
        </div>
      </div>
    </div>
  );
}

export default App;
