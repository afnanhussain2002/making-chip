import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import XLogo from "@/images/x-logo.png"
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.makingchip.com"),
  title: "Making Chip - Ai Image Optimize",
  description:
    "You can optimize your image, fill image background using AI, and much more.",
  openGraph: {
    title: "Making Chip",
    description:
      "You can optimize your image, fill image background using AI, and much more.",
    url: "https://www.makingchip.com",
    type: "website",
    locale: "en-US",
    siteName: "Making Chip",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta
            name="google-site-verification"
            content="O5p1N30N-if12YTterX8Ozmw3693-QCw8gCjefcTVIY"
          />
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8402742608812827"
            crossOrigin="anonymous"
          ></Script>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-FFJ0T2MWJS"
          ></Script>
          <GoogleAnalytics gaId="G-FFJ0T2MWJS" />
          <GoogleTagManager gtmId="GTM-M5QG48T6" />
        </head>
        <body
        
          data-theme={"synthwave"}
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M5QG48T6"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <div className="bg-base-200">

          <div className="navbar bg-base-200 max-w-7xl mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link href={"/home"}>Home</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
          <li><Link href={"/blog"}>Blog</Link></li>
          <li><Link href={"/image-optimize"}>Image Optimize</Link></li>

         
        </ul>
      </div>
      <a href="/" className="btn btn-ghost text-xl">Makingchip.com</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <div className="flex justify-center items-center gap-4">
          
            <a href="https://www.facebook.com/iamafnanhussain" target="_blank">
            <Facebook/>
            </a>
            <a href="https://www.tiktok.com/@makingchip.com" target="_blank">
           <FaTiktok className="w-6 h-6"/>
            </a>
            <a href="https://www.instagram.com/makingchip" target="_blank">
            <Instagram/>
            </a>

          </div>
    </div>
  </div>
          </div>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
