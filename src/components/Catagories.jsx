import Link from "next/link";
import React from "react";

const Catagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <ul className="space-y-4 mt-4">
        {data.data.news_category.map((category) => (
          <li key={category.category_id} className="text-gray-500 hover:underline">
            <Link href={`/category/${category.category_id}`}>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catagories;
