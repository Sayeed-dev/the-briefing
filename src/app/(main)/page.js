import Image from "next/image";
import Catagpories from "@/components/Catagories";

export default function Home() {

  return (
    <div className="grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-4 mt-6">
      <div className="col-span-3">
        <h2 className="text-xl font-bold">Catagories</h2>
        <Catagpories />
      </div>
      <div className="col-span-6 bg-blue-200">
        <h2 className="text-xl font-bold">Feed</h2>
      </div>
      <div className="col-span-3 bg-amber-200">
        <h2 className="text-xl font-bold">Conncet with US</h2>
      </div>
    </div>
  );
}
