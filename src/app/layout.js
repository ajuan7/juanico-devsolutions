import { Geist, Geist_Mono } from "next/font/google";
import { Head } from "next/head"; // Import Head from next/head
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Juanico DevSolutions",
  description: "Your Vision, Our Code.",
  icons: {
    icon: "JUANICO-3.ico", 
  },
  keywords: "software development, API integration, SaaS products, Juanico DevSolutions, Angelo Juanico, Angelo, Juanico",
  author: "Angelo Juanico",
  ogImage: "/JUANICO-3.ico",
  ogTitle: "Juanico DevSolutions",
  ogDescription: "Juanico DevSolutions - Your Vision, Our Code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Your Vision, Our Code." />
        <meta name="author" content="Angelo Juanico" />
        <link rel="icon" href="/JUANICO-2.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Angelo Juanico",
              "jobTitle": "Software Developer",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://linkedin.com/in/angelojuanico",
                "https://github.com/ajuan7"
              ]
            }
          `}
        </script>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
