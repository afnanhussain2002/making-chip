// pages/image-formats.tsx

import React from 'react';
 // Assuming your component is in a components folder
import { Metadata } from 'next';
import ImageBgFill from '@/components/ImageBgFill';

export const metadata: Metadata = {
  title: "Making Chip | Image Bg Fill",
  description: "Fill up the image background",

};

const ImageBgFillPage = () => {
  return (
    <div>
      <ImageBgFill />
    </div>
  );
};

export default ImageBgFillPage;
