
import Link from "next/link";
import MainFeatures from "@/components/MainFeatures";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbBackground } from "react-icons/tb";
import Card from "@/components/cardsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Making Chip - Play with your images",
  description: "You can optimize your image, fill image background using AI, and much more. ",
  keywords: ["imagePost", "Image Post", "Post Template", "Making Chip", "imageOptimize", "Image Optimize", "Ai Image Optimize", "imageFill", "Image Background Fill", "Ai Image Fill,", "imageRestore", "Ai Image Restore"],
  robots:{
    index:true,
    follow:true
  },


};
export default function Home() {
  return (
    <>
  <div className="hero bg-base-200 min-h-[500px] border-b border-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center space-y-7">
            <h5 className="font-bold text-2xl">Free Online</h5>
            <h1 className="text-7xl font-bold uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Image Tools
            </h1>
            <h5 className="font-bold text-2xl">Play With Your Images</h5>
            <p className="max-w-2xl">
              Boost Your Website&apos;s Performance with using our tools. You
              can optimize, format, and restore your images with just a few
              clicks.
            </p>
            <div className="flex justify-center gap-1">
              <Link href={"/social-formats"}>
                <button className="btn bg-base-200 border-2 border-primary hover:bg-primary hover:text-white">
                  {" "}
                  <span>
                    <IoShareSocialOutline className="w-4 h-4" />
                  </span>{" "}
                  Ai Social Formats
                </button>
              </Link>
              <Link href={"/image-fill"}>
                <button className="btn bg-base-200 border-2 border-primary hover:bg-primary hover:text-white">
                  <span>
                    <TbBackground className="w-4 h-4" />
                  </span>{" "}
                  Ai Background Fill
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

          {/* 2nd section */}
    <div className="grid gap-2 grid-cols-2 max-w-7xl mx-auto mt-8 lg:grid-cols-5 ">

<Card/>
</div>


  <MainFeatures/>


    
    </>
  
  );
}
