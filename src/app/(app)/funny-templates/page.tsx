// pages/image-formats.tsx

import React from 'react';
 // Assuming your component is in a components folder
import { Metadata } from 'next';
import FunnyTemplates from '@/components/FunnyTemplates';

export const metadata: Metadata = {
  title: "Making Chip | Funny Templates",
  description: "Fun with templates",

};

const ImageBgFillPage = () => {
  return (
    <div>
      <FunnyTemplates />
    </div>
  );
};

export default ImageBgFillPage;
