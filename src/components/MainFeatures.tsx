
import Image from 'next/image'
import React from 'react'
import optimizedImage from '@/public/optimized-ss.jpg'
import Link from 'next/link'
import BgFill from '@/public/bg-fill.jpg'
import SocialFormats from '@/public/socialFormats.jpg'

function MainFeatures() {
  return (
   <>
   <h1 className="text-5xl font-bold uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-primary text-center mt-12">Main Features</h1>
   {/* optimized image  */}
   <div className="hero min-h-[400px]">
    
    <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="flex-1">
        <h1 className="text-5xl font-bold text-primary">Optimize Image</h1>
        <p className="py-6">
         optimize your image up to 40% without losing the quality of the image.
        </p>
       <Link href={"/image-optimize"}>
       <button className="btn btn-primary">Get Started</button>
       </Link> 
      </div>
      <Image
        src={optimizedImage}
        className=" rounded-lg shadow-2xl flex-1" 
        width={500}
        height={500}
        alt="hero image"
        />
        
    
    </div>
  </div>
   {/* Image Background fill  */}
   <div className="hero min-h-[400px]">
    
    <div className="hero-content flex-col lg:flex-row-reverse ">
    <Image
        src={BgFill}
        className=" rounded-lg shadow-2xl flex-1" 
        width={500}
        height={500}
        alt="hero image"
        />
    <div className="flex-1">
        <h1 className="text-5xl font-bold text-primary"> Image Background Fill</h1>
        <p className="py-6">
         Fill up your image background landscape or portrait with just a few clicks.
        </p>
       <Link href={"/image-fill"}>
       <button className="btn btn-primary">Get Started</button>
       </Link> 
      </div>
   
        
    
    </div>
  </div>
   {/* Image Social Format  */}
   <div className="hero min-h-[400px]">
    
    <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="flex-1">
        <h1 className="text-5xl font-bold text-primary"> Image Social Formats</h1>
        <p className="py-6">
         Convert and manage a wide range of image social formats.
        </p>
       <Link href={"/image-formats"}>
       <button className="btn btn-primary">Get Started</button>
       </Link> 
      </div>
   
      <Image
        src={SocialFormats}
        className=" rounded-lg shadow-2xl flex-1" 
        width={500}
        height={500}
        alt="hero image"
        />
    
    </div>
  </div>
   </>
  )
}

export default MainFeatures