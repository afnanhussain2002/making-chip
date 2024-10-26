import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero.png"
import MainFeatures from "@/components/MainFeatures";

export default function Home() {
  return (
    <>
    <div className="hero bg-base-200 min-h-[600px] border-b border-primary">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image
        src={HeroImage}
        className=" rounded-lg shadow-2xl flex-1" 
        width={500}
        height={500}
        alt="hero image"
        />
        
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-primary">Play With Your Images!</h1>
        <p className="py-6">
        Boost Your Website&apos;s Performance with using our tools. You can optimize, format, and restore your images with just a few clicks.
        </p>
       <Link href={"/image-optimize"}>
       <button className="btn btn-primary">Get Started</button>
       </Link> 
      </div>
    </div>
  </div>


  <MainFeatures/>


    
    </>
  
  );
}
