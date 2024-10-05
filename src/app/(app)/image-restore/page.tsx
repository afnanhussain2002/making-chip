"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import byteSize from 'byte-size'
// import { CldImage } from "next-cloudinary";


function ImageOptimize() {

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  // const imageRef = useRef<HTMLImageElement>(null);


// bytes size to MB
  const originalSizeInMB = byteSize(originalSize);
  const compressedSizeInMB = byteSize(compressedSize);


  const handleFileUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const fileUrl = URL.createObjectURL(file);
    try {
      const response = await axios.post("/api/image-restore", formData);
      console.log(response);
      if (!response.data) {
        throw new Error("Failed to upload image");
      }
      const data = response.data
      console.log("width", data.width, "height",data.height);
      console.log('data---------',data);
      setUploadedImage(data.restoreImage);
     setImageWidth(data.width)
     setImageHeight(data.height)
     setOriginalSize(data.originalSize);
      setCompressedSize(data.bytes);
      return;
    } catch (error) {
      console.log(error);
     return alert("Failed to upload image");
    }finally{
      setIsUploading(false);
      setOriginalImage(fileUrl);
    }
  }

   let downloadCounter = 0
    const handleDownload = () => {
        if (!uploadedImage) return;
        downloadCounter++;
        fetch(uploadedImage)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `makingchip_${downloadCounter}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error downloading image:", error);
          });
      };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Image Quality Improve!</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 max-w-2xl lg:flex-row">
          {originalImage && (
            <div>
              <h3 className="font-bold">Original Image: <span className="bg-primary text-white px-2 rounded">{originalSizeInMB.toString()}</span></h3>
              <Image
                src={originalImage}
                alt="Original"
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          )}
          <div className="">
            {isUploading ? (
              <div className="loading loading-lg"></div>
            ) : (
              <>
                {uploadedImage ? (
                  <div>
                    <h3 className="font-bold">Optimized Image: <span className="bg-primary text-white px-2 rounded">{compressedSizeInMB.toString()}</span></h3>
                    <Image
                      width={imageWidth}
                      height={imageHeight}
                      src={uploadedImage}
                      className="w-full"
                      alt="Uploaded Image"
                    />
                 
                  </div>
                ) : (
                  <form className="card-body">
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                      onChange={handleFileUpload}
                    />
                  </form>
                )}
              </>
            )}
          </div>
        </div>
            {uploadedImage && (
                 <button
                 onClick={handleDownload}
                 className="btn btn-primary"
               >
                 Download
               </button>
            )}
      </div>
    </div>
  );
}

export default ImageOptimize;