import { ImagePlus, RectangleEllipsis, Scan, Share2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
    <section className="text-white py-20">
  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Effortless Image Management and Optimization</h1>
    <p className="mb-6">Optimize, format, and restore your images with just a few clicks.</p>
    <Link href="/image-formats">
    <button className=" text-primary font-bold px-6 py-3 rounded-lg shadow-lg border-2 border-primary">Get Started</button>
    </Link>
  </div>
</section>

<section className="py-20 bg-transparent">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <Link href={'/image-formats'}>
    <div className="p-6 rounded-lg shadow-lg text-center border border-primary">
      <Share2Icon className='w-16 h-16 mx-auto mb-4'/>
      <h3 className="text-xl font-semibold mb-2">Image Formats</h3>
      <p className="text-primary font-semibold">Convert and manage a wide range of image formats.</p>
    </div>
    
    </Link>
  <Link href={'/image-optimize'}>
  <div className="p-6 rounded-lg shadow-lg text-center border border-primary">
    <ImagePlus className='w-16 h-16 mx-auto mb-4'/>
      <h3 className="text-xl font-semibold mb-2">Optimize</h3>
      <p className="text-primary font-semibold">Reduce image size without losing quality.</p>
    </div>
  </Link>
    <Link href={'/image-restore'}>
    <div className="p-6 rounded-lg shadow-lg text-center border border-primary">
    <Scan className='w-16 h-16 mx-auto mb-4'/>
      <h3 className="text-xl font-semibold mb-2">Image Quality Improve <span className='text-xs bg-primary px-1 rounded'>beta</span></h3>
      <p className="text-primary font-semibold">Recover and restore damaged images easily.</p>
    </div>
    </Link>
   <Link href={'/image-fill'}>
   <div className="p-6 rounded-lg shadow-lg text-center border border-primary">
    <RectangleEllipsis className='w-16 h-16 mx-auto mb-4'/>
      <h3 className="text-xl font-semibold mb-2">Fill <span className='text-xs bg-primary px-1 rounded'>beta</span></h3>
      <p className="text-primary font-semibold">Fill missing parts of images intelligently.</p>
    </div>
   </Link>
  </div>
</section>

    
    </>

  )
}

export default Home