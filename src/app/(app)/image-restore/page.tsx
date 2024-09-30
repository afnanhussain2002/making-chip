"use client"
import React,{useState,useRef} from 'react'
import axios from 'axios'
import {CldImage} from 'next-cloudinary';

function ImageRestore() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [imageWidth, setImageWidth] = useState<number>(0);
    const [imageHeight, setImageHeight] = useState<number>(0);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleFileUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await axios.post("/api/restore-image", formData);
          console.log(response);
          if (!response.data) {
            throw new Error("Failed to upload image");
          }
          const data = response.data
          console.log("width", data.width, "height",data.height);
          setUploadedImage(data.public_id);
         setImageWidth(data.width)
         setImageHeight(data.height)
          return;
        } catch (error) {
          console.log(error);
         return alert("Failed to upload image");
        }finally{
          setIsUploading(false);
        }
    }
  return (
    <div>ImageRestore</div>
  )
}

export default ImageRestore