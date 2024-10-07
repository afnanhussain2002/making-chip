
import React from 'react'; // Assuming your component is in a components folder
import { Metadata } from 'next';
import ImageOptimize from '@/components/ImageOptimize';

export const metadata: Metadata = {
  title: "Making Chip | Image Format",
  description: "Create social media images with different formats",

};

const ImageOptimizePage = () => {
  return (
    <div>
      <ImageOptimize />
    </div>
  );
};

export default ImageOptimizePage;
