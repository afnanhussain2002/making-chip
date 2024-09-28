"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import {CldImage} from "next-cloudinary";

function ImageOptimize() {

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
      const response = await axios.post("api/upload-image", formData);
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

  /* const handleImageLoad = () => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.naturalWidth);
      setImageHeight(imageRef.current.naturalHeight)
      return
    }
  } */

    const handleDownload = () =>{
      if (!imageRef.current) return;
      fetch(imageRef.current.src)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `${uploadedImage?.replace(/\s+/g, "_").toLowerCase()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
         window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading image:", error);
        });
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
          {isUploading ? <div className="loading loading-lg"></div>
        :
        <>
        {
          uploadedImage ? <>
          <CldImage
            ref={imageRef}
            width={imageWidth}
            height={imageHeight}
            src={uploadedImage}
            className="w-full"
            alt="Uploaded Image"
          />
          <button onClick={handleDownload} className="btn btn-primary">Download</button>
          </>
          :
          <form className="card-body">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={handleFileUpload}
          />
          {/* <div className="form-control mt-6">
            <button className="btn btn-primary">Optimize</button>
          </div> */}
        </form>
        }
        
        </>

        }
        </div>
      </div>
    </div>
  );
}

export default ImageOptimize;
