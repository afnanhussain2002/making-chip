import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
  description: "You can optimize your image, fill image background using AI, and restore little bit blur image to original and much more.",
  openGraph:{
    title: "Making Chip",
    description: "You can optimize your image, fill image background using AI, and restore little bit blur image to original and much more.",
    url: "https://www.makingchip.com",
    type:"website",
    locale:"en-US",
    siteName:"Making Chip",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en" >
     <head>
    <meta name="google-site-verification" content="O5p1N30N-if12YTterX8Ozmw3693-QCw8gCjefcTVIY" />
    </head>
      <body
      data-theme={"synthwave"}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
   </ClerkProvider>
  );
}
