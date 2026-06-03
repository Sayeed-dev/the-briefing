"use client";
import React from "react";

export default function ConnectWithUs() {

  const socialLinks = [
    {
      name: "Facebook",
      followers: "120K Followers",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      followers: "85K Followers",
      href: "#",
      color: "hover:text-sky-500",
    },
    {
      name: "YouTube",
      followers: "250K Subscribers",
      href: "#",
      color: "hover:text-red-600",
    },
    {
      name: "Instagram",
      followers: "90K Followers",
      href: "#",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <aside className="w-full space-y-8">
      {/* SECTION 1: Connect With Us Header & Social Grid */}
      <div>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`flex flex-col p-3 border border-gray-200 rounded-sm bg-stone-50/50 hover:bg-white transition-all duration-200 group`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`font-sans font-medium text-sm text-gray-800 ${social.color} transition-colors`}
                >
                  {social.name}
                </span>
                {/* Heroicons: ArrowUpRight Icon */}
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-500 font-sans">
                {social.followers}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="p-5 border border-gray-200 bg-stone-50 rounded-sm text-center">
        {/* Heroicons: Envelope Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-3">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.250 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-1.5.562m19.5 0L12 11.25 2.25 4.5"
            />
          </svg>
        </div>

        <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">
          The Briefing Newsletter
        </h3>
        <p className="text-xs text-gray-600 mb-4 font-sans leading-relaxed">
          Get the latest international news and insights delivered straight to
          your inbox daily.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 font-sans"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-200 tracking-wide"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </aside>
  );
}
