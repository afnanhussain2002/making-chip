"use client";
import React, { useRef, useState } from "react";
import axios from "axios";

function ImageOptimize() {

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleFileUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("api/upload-image", formData);
      console.log(response);
      if (!response.data) {
        throw new Error("Failed to upload image");
      }
      setUploadedImage(file);
    } catch (error) {
      console.log(error);
      alert("Failed to upload image");
    }finally{
      setIsUploading(false);
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Image Optimization!</h1>
          <p className="py-6">
            Welcome to our Image Optimization page! Here, you can easily
            compress and resize images without compromising quality, making them
            faster to load and more efficient for your website. Optimize your
            images with just a few clicks to enhance performance and improve
            user experience.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
          {
            uploadedImage ? <>
            
            </>
            :
            <form className="card-body">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Optimize</button>
            </div>
          </form>
          }
        </div>
      </div>
    </div>
  );
}

export default ImageOptimize;
