import React from 'react';
 // Assuming your component is in a components folder
import { Metadata } from 'next';
import FunnyTemplates from '@/components/FunnyTemplates';

export const metadata: Metadata = {
  title: "Funny Templates | Making Chip ",
  description: "Fun with templates",
  keywords: ["templates", "funny", "fun", "Making Chip"],

};

const ImageBgFillPage = () => {
  return (
    <div>
      <FunnyTemplates />
    </div>
  );
};

export default ImageBgFillPage;
