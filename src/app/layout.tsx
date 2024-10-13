import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
              style={{display:"none",visibility:"hidden"}}
            ></iframe>
          </noscript>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
