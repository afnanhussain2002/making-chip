"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

function ImageImprove() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);


  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const data = response.data;
      console.log("width", data.width, "height", data.height);
      console.log("data---------", data);
      setUploadedImage(data.restoreImage);
      setImageWidth(data.width);
      setImageHeight(data.height);
      return;
    } catch (error) {
      console.log(error);
      return alert("Failed to upload image");
    } finally {
      setIsUploading(false);
      setOriginalImage(fileUrl);
    }
  };

  let downloadCounter = 0;
  const handleDownload = () => {
    if (!uploadedImage) return;
    downloadCounter++;
    setIsDownloading(true);
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
      })
      .finally(() => {
        setIsDownloading(false);
        if (uploadedImage) {
          axios
            .delete(`/api/delete-resource/${uploadedImage.split("/").pop()}`)
            .then((response) => {
              console.log("Resource deleted:", response.data);
            })
            .catch((error) => {
              console.error("Error deleting resource:", error);
            });
        }
      });
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Image Quality Improve{" "}
            <span className="text-xs bg-primary px-1 rounded">beta</span>!
          </h1>
          <p className="w-3/4 mx-auto mt-4 text-center">
            Upload an image which was a little bit blur and you can get it
            clean. Simply click on choose file and upload blur image.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 max-w-2xl lg:flex-row">
          {originalImage && (
            <div>
              <h3 className="font-bold">
                Original Image
              </h3>
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
                    <h3 className="font-bold">
                      Optimized Image
                    
                    </h3>
                    <CldImage
                      width={imageWidth}
                      height={imageHeight}
                      src={uploadedImage}
                      className="w-full"
                      alt="Uploaded Image"
                      restore
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
            className="btn btn-primary"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "Downloading..." : `Download`}
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageImprove;
