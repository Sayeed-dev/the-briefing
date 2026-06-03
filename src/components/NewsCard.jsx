import React from "react";
import Image from "next/image";

export default function NewsCard({ news }) {

  // JSON স্ট্রাকচার অনুযায়ী ডেটা ডিস্ট্রাকচারিং
  const {
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
    others_info,
  } = news;

  // তারিখটিকে একটু সুন্দর ফরম্যাটে দেখানোর জন্য (যেমন: Aug 24, 2022)
  const formattedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
  
  return (
    <article className="group bg-white border-b border-gray-200 pb-6 mb-6 last:border-0 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-5 items-start">
        {/* বাম বা ডান পাশে ইমেজ সেকশন (এলিগ্যান্ট রেশিও) */}
        <div className="w-full md:w-1/3 relative aspect-4/3 bg-gray-100 overflow-hidden rounded-sm border border-gray-100">
          <Image
            src={thumbnail_url || "/placeholder.jpg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
            priority={others_info?.is_todays_pick} // গুরুত্বপূর্ণ নিউজ হলে প্রায়োরিটি পাবে
          />

          {/* যদি Trending বা Today's Pick হয়, তবে ছোট একটি মিনিমাল ব্যাজ */}
          {others_info?.is_trending && (
            <span className="absolute top-2 left-2 bg-gray-900 text-white font-sans text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-xs shadow-sm">
              Trending
            </span>
          )}
        </div>

        {/* টেক্সট ও কন্টেন্ট সেকশন */}
        <div className="w-full md:w-2/3 flex flex-col justify-between self-stretch">
          <div>
            {/* লেখক এবং পাবলিশ ডেট (মিনিমালিস্ট ও ক্লিন) */}
            <div className="flex items-center gap-2 mb-2">
              {author?.img && (
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={author.img}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span className="font-sans font-semibold text-xs text-gray-800">
                {author?.name || "Unknown Author"}
              </span>
              <span className="text-gray-300 text-xs">•</span>
              <time className="font-sans text-xs text-gray-500">
                {formattedDate}
              </time>
            </div>

            {/* নিউজ টাইটেল - হোভার করলে নীল হবে (হেডারের সাবস্ক্রাইব বাটনের সাথে মিলিয়ে) */}
            <h3 className="font-serif font-bold text-lg md:text-xl text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors duration-200 cursor-pointer">
              {title}
            </h3>

            {/* নিউজের বিস্তারিত অংশ (লাইন-ক্ল্যাম্প করে ৩ লাইনে সীমাবদ্ধ রাখা হয়েছে) */}
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
              {details}
            </p>
          </div>

          {/* কার্ডের নিচের মেটা ইনফরমেশন (ভিউ, রেটিং ইত্যাদি) */}
          <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto">
            <div className="flex items-center gap-4 text-xs text-gray-500 font-sans">
              {/* ভিউ কাউন্ট আইকন সহ */}
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span>{total_view || 0} Views</span>
              </div>

              {/* রেটিং ব্যাজ */}
              {rating?.number && (
                <div className="flex items-center gap-1">
                  <span className="inline-flex items-center rounded-sm bg-stone-100 px-1.5 py-0.5 text-[11px] font-medium text-amber-800 font-sans border border-amber-200/50">
                    ★ {rating.number} ({rating.badge})
                  </span>
                </div>
              )}
            </div>

            {/* Read More বাটন (মিনিমালিস্ট ডিজাইন) */}
            <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">
              Read Article
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
