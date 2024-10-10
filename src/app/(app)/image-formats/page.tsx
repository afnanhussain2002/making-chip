
import React from 'react';
import ImageFormats from '@/components/ImageFormats'; // Assuming your component is in a components folder
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image Format | Making Chip  ",
  description: "Create social media images with different formats",
  keywords:["Social Size", "Social Media", "Image Format", "Make Chip"],

};

const ImageFormatsPage = () => {
  return (
    <div>
      <ImageFormats />
    </div>
  );
};

export default ImageFormatsPage;
