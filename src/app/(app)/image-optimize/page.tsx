
import React from 'react'; // Assuming your component is in a components folder
import { Metadata } from 'next';
import ImageOptimize from '@/components/ImageOptimize';

export const metadata: Metadata = {
  title: "Image Optimize | Making Chip - Ai Image Optimize",
  description: "Optimize your images",
  keywords: ["imageOptimize", "Image Optimize", "Ai Image Optimize", "Making Chip"],
  robots:{
    index:true,
    follow:true
  }

};

const ImageOptimizePage = () => {
  return (
    <div>
      <ImageOptimize />
    </div>
  );
};

export default ImageOptimizePage;
