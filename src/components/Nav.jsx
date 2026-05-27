"use client";

import React, { useState } from "react";
import { Button, Link } from "@heroui/react";

export default function NewspaperNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "World", href: "/world" },
    { name: "Politics", href: "/politics" },
    { name: "Business", href: "/business" },
    { name: "Technology", href: "/tech" },
    { name: "Science", href: "/science" },
    { name: "Health", href: "/health" },
    { name: "Sports", href: "/sports" },
    { name: "Opinion", href: "/opinion" },
  ];

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    // position: sticky + top-0 ensures it locks to the top on scroll
    <nav className="sticky top-0 z-50 w-full border-b border-default-200 bg-background/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* LEFT SIDE: Mobile Burger Button & Logo */}
          <div className="flex items-center gap-4">
            {/* Native semantic button replacing NavbarMenuToggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-default-100 focus:outline-none lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                // Close Icon X
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            {/* Newspaper Branding */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-2xl font-extrabold tracking-tighter text-foreground hover:opacity-90 uppercase font-masthead"
              >
                THE Briefing
              </Link>
              <span className="hidden lg:inline text-xs text-default-400 border-l pl-3 border-default-200 mt-1 text-foreground">
                {formattedDate}
              </span>
            </div>
          </div>

          {/* CENTER NAVIGATION: Desktop Only (Hidden on Mobile) */}
          <ul className="hidden lg:flex items-center gap-6">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="text-sm font-medium text-default-600 hover:text-accent transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE: Action Controls */}
          <div className="flex items-center gap-2">
            <Button
              as={Link}
              href="/signin"
              variant="tertiary" // HeroUI v3 light alternative
              size="sm"
              className="hidden sm:inline-flex text-xs font-semibold text-foreground shadow-sm"
            >
              Sign In
            </Button>
            <Button
              as={Link}
              href="/subscribe"
              variant="primary" // HeroUI v3 updated color-variant handling
              size="sm"
              className="font-semibold text-xs shadow-sm"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-default-100 bg-background px-4 py-3"
        >
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="block w-full py-2.5 text-base font-medium text-foreground border-b border-default-50"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-default-100">
            <Button
              as={Link}
              href="/login"
              variant="outline"
              className="w-full"
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
