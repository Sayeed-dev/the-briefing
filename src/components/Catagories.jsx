import Link from "next/link";
import React from "react";

const Catagories = ({ data , id }) => {
  return (
    <div>
      <ul className="space-y-4 mt-4">
        {data.data.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`text-gray-500 hover:underline ${category.category_id == id && "font-bold text-gray-900"}`}
          >
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
