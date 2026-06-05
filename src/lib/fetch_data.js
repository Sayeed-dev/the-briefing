export const CatagoryData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "no-store",
    },
  );
  return res.json();
};
 export const newsData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
    {
      cache: "no-store",
    },
  );
  return res.json();
};
