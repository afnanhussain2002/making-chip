"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  ImageIcon,
  ImagePlus,
  Scan,
  RectangleEllipsis,
  Facebook,
  Linkedin,
  SmilePlus,
  Milestone
} from "lucide-react";
import Image from "next/image";
import XLogo from "@/images/x-logo.png"
import Footer from "@/components/Footer";

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/image-formats", icon: Share2Icon, label: "Image Formats" },
  { href: "/image-optimize", icon: ImagePlus, label: "Image Optimize" },
  { href: "/image-restore", icon: Scan, label: "Image Improve" },
  { href: "/image-fill", icon: RectangleEllipsis, label: "Image Bg Fill" },
  { href: "/funny-templates", icon: SmilePlus, label: "Funny Templates" },
  { href: "/post-template", icon: Milestone, label: "Post Template" }
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
    <div className="drawer lg:drawer-open">
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className="w-full bg-base-200">
          <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="sidebar-drawer"
                className="btn btn-square btn-ghost drawer-button"
              >
                <MenuIcon />
              </label>
            </div>
            <div className="flex-1">
              <Link href="/" onClick={handleLogoClick}>
                <div className="btn btn-ghost normal-case text-2xl font-bold tracking-tight cursor-pointer">
                  Making Chip
                </div>
              </Link>
            </div>
            <div className="flex-none flex items-center space-x-4">
              {user ? (
                <>
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full">
                      <img
                        src={user.imageUrl}
                        alt={
                          user.username || user.emailAddresses[0].emailAddress
                        }
                      />
                    </div>
                  </div>
                  <span className="text-sm truncate max-w-xs lg:max-w-md">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-ghost btn-circle"
                  >
                    <LogOutIcon className="h-6 w-6" />
                  </button>
                </>
              ) : (
                <>
                  <Link href="/sign-in">
                    <button className=" text-primary font-bold px-6 py-3 rounded-lg shadow-lg border-2 border-primary">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
            <div className="hidden lg:flex justify-center items-center gap-4 ml-4">
            <a href="https://www.facebook.com/iamafnanhussain" target="_blank">
            <Facebook/>
            </a>
            <a href="https://x.com/MdAfnanHussain" target="_blank">
           <Image
           src={XLogo}
           width={20}
           height={30}
           alt="x.com"
           />
            </a>
            <a href="https://www.linkedin.com/in/md-afnan-hussain/" target="_blank">
            <Linkedin/>
            </a>

          </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-8">
            {children}
          </div>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <aside className="bg-base-200 w-64 h-full flex flex-col">
          <div className="flex items-center justify-center py-4">
            <ImageIcon className="w-10 h-10 text-primary" />
          </div>
          <ul className="menu p-4 w-full text-base-content flex-grow">
            {sidebarItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-4 px-4 py-2 rounded-lg ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "hover:bg-base-300"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <div className="p-4">
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-error w-full"
              >
                <LogOutIcon className="mr-2 h-5 w-5" />
                Sign Out
              </button>
            </div>
          )}
          <div className="flex justify-center items-center gap-4">
            <p className="font-bold">Follow us:</p>
            <a href="https://www.facebook.com/iamafnanhussain" target="_blank">
            <Facebook/>
            </a>
            <a href="https://x.com/MdAfnanHussain" target="_blank">
           <Image
           src={XLogo}
           width={20}
           height={30}
           alt="x.com"
           />
            </a>
            <a href="https://www.linkedin.com/in/md-afnan-hussain/" target="_blank">
            <Linkedin/>
            </a>

          </div>
        </aside>
      </div>
    </div>
    <Footer/>
    
    </>
  );
}
