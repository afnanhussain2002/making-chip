
import React from 'react';
import ImageRestore from '@/components/ImageRestore'; // Assuming your component is in a components folder
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Making Chip | Image Restore",
  description: "Restore little bit blur image to original",

};

const ImageRestorePage = () => {
  return (
    <div>
      <ImageRestore />
    </div>
  );
};

export default ImageRestorePage;
