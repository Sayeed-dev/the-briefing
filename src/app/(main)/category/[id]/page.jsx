import Catagpories from "@/components/Catagories";
import ConnectWithUs from "@/components/ConnectWithUs";
import NewsCard from "@/components/NewsCard";
import { CatagoryData, newsData } from "@/lib/fetch_data";

const catagoryPage = async ({ params }) => {

  const { id } = await params
  const catagory = await CatagoryData();
  const news = await newsData(id);

  return (
    <div className="grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-4 mt-6">
      <div className="col-span-3">
        <h2 className="text-xl font-bold mb-2.5">Catagories</h2>
        <Catagpories data={catagory} id={id} />
      </div>
      <div className="col-span-6 ">
        <h2 className="text-xl font-bold mb-2.5">All News</h2>
        {news.data.map((newsItem) => (
          <NewsCard key={newsItem._id} news={newsItem} />
        ))}
      </div>
      <div className="col-span-3">
        <h2 className="text-xl font-bold mb-2.5">Conncet with US</h2>
        <ConnectWithUs />
      </div>
    </div>
  );
}

export default catagoryPage  