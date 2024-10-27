
import React from 'react'; 
import { Metadata } from 'next';
import PostTemplate from '@/components/PostTemplate';


export const metadata: Metadata = {
  title: "Post Template | Making Chip - Ai Image Optimize",
  description: "A template is a pre-made design that can be used to create an image. ",
  keywords: ["imagePost", "Image Post", "Post Template", "Making Chip"],
  robots:{
    index:true,
    follow:true
  }

};

const PostTemplatePage = () => {
  return (
    <div>
   <PostTemplate />
    </div>
  );
};

export default PostTemplatePage;
