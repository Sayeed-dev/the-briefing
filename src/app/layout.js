import Nav from "@/components/Nav";
import { Texturina, Merriweather } from "next/font/google";
import "./globals.css";

const texturina = Texturina({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-texturina",
});
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
      className={`${texturina.variable} ${merriweather.variable}`}
    >
      <body className="min-h-full flex flex-col font-masthead">
        <Nav />
        {children}
      </body>
    </html>
  );
}
