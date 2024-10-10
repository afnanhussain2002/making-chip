
import React from 'react';
import ImageRestore from '@/components/ImageRestore'; // Assuming your component is in a components folder
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image Restore | Making Chip",
  description: "Restore little bit blur image to original",
  keywords: ["imageRestore", "Image Restore", "Ai Image Restore", "Making Chip"],

};

const ImageRestorePage = () => {
  return (
    <div>
      <ImageRestore />
    </div>
  );
};

export default ImageRestorePage;
