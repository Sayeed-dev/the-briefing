"use strict";
"use server";
import Link from "next/link";
import { Button } from "@heroui/react";

export default async function NotFound() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#111111] flex flex-col justify-between font-serif selection:bg-amber-200">
      {/* Top Border / Decorative Header Accent */}
      <div className="border-b-4 border-double border-[#111111] pt-6 pb-4 px-4 text-center">
        <p className="text-xs uppercase tracking-widest font-sans font-bold">
          The Daily Chronicle — Edition Not Found
        </p>
      </div>

      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-6 py-16 grow flex flex-col justify-center items-center text-center">
        {/* Editorial Style Error Badge */}
        <span className="font-sans text-xs uppercase bg-[#111111] text-[#fcfbf7] px-3 py-1 font-semibold tracking-wider mb-8">
          Error 404 • Page Misplaced
        </span>

        {/* Big Editorial Headline */}
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight border-b border-[#111111]/10 pb-6">
          Headline Missing: This Story Does Not Exist
        </h1>

        {/* Newspaper Column Copy */}
        <div className="font-serif text-md md:text-lg text-[#333333] max-w-xl mx-auto leading-relaxed mb-8 space-y-4">
          <p>
            <span className="float-left text-5xl font-black font-serif mr-2 mt-1 leading-none">
              W
            </span>
            e regret to inform you that the article, column, or investigative
            report you are looking for cannot be located in our digital
            archives. It may have been moved, renamed, or perhaps it was never
            written at all.
          </p>
          <p className="text-sm italic text-stone-500 font-sans">
            Correction: An earlier version of your URL contained a typo. Please
            check the spelling and try again.
          </p>
        </div>

        {/* Search Bar Feature — Using native input to avoid React prop warnings */}
        <div className="w-full max-w-md p-6 border border-stone-300 rounded-none bg-white shadow-sm mb-10">
          <p className="font-sans text-xs font-bold uppercase tracking-wider mb-3 text-left text-stone-600">
            Search our archives
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search politics, tech, culture..."
              className="w-full px-3 py-2 border border-stone-300 rounded-none font-sans text-sm outline-none transition-colors focus:border-black hover:border-stone-400 bg-transparent"
            />
            <Button className="bg-[#111111] text-white font-sans font-medium rounded-none hover:bg-stone-800 shrink-0">
              Search
            </Button>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-sans w-full max-w-sm">
          <Link href="/" className="w-full">
            <Button
              className="w-full bg-[#111111] text-white font-bold tracking-wide rounded-none hover:bg-stone-800"
              size="lg"
            >
              Return to Homepage
            </Button>
          </Link>

          <Link href="/latest" className="w-full">
            <Button
              variant="bordered"
              className="w-full border-stone-300 text-[#111111] font-medium rounded-none hover:bg-stone-100"
              size="lg"
            >
              Read Latest News
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer Finisher */}
      <footer className="w-full max-w-4xl mx-auto px-6 pb-8">
        <hr className="border-stone-300 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-stone-500">
          <p>
            © {new Date().getFullYear()} The Daily Chronicle. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/help" className="hover:underline">
              Help & Support
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
