
import React from 'react';
import ImageFormats from '@/components/ImageFormats'; // Assuming your component is in a components folder
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Making Chip | Image Format",
  description: "Create social media images with different formats",

};

const ImageFormatsPage = () => {
  return (
    <div>
      <ImageFormats />
    </div>
  );
};

export default ImageFormatsPage;
