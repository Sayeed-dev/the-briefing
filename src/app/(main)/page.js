
import Catagpories from "@/components/Catagories";
import ConnectWithUs from "@/components/ConnectWithUs";


export default async function Home() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();

  return (
    <div className="grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-4 mt-6">
      <div className="col-span-3">
        <h2 className="text-xl font-bold mb-2.5">Catagories</h2>
        <Catagpories data={data} />
      </div>
      <div className="col-span-6 ">
        <h2 className="text-xl font-bold mb-2.5">Feed</h2>
      </div>
      <div className="col-span-3">
        <h2 className="text-xl font-bold mb-2.5">Conncet with US</h2>
        <ConnectWithUs/>
      </div>
    </div>
  );
}
