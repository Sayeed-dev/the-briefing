import Nav from "@/components/Nav";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "The Briefing",
  description:
    "A news aggregator built with Next.js, Tailwind CSS, and the NewsAPI. Stay informed with the latest headlines and articles from around the world, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable}`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Nav />
        {children}
      </body>
    </html>
  );
}
