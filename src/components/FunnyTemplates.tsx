"use client";
import Image from "next/image";
import React, { useState } from "react";
import motuImage from "@/public/motu.png";
import { StepForward, Facebook, Youtube } from "lucide-react";
import domtoimage from "dom-to-image";

function FunnyTemplates() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  // const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [text, setText] = useState<string>("Inter Your Text Here");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const words = text?.split(' ');
  const lastWord = words?.pop();
  const realDate = new Date();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const fileUrl = URL.createObjectURL(file);
    setOriginalImage(fileUrl);
    return;
  };


  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.target.value;
    setText(text);
    return;
  };

  const handleDownload = async () => {
    if (!imagesLoaded) return;
    const node = await document.getElementById("template");
    if (!node) {
      console.error("Template node not found.");
      return;
    }

    setIsDownloading(true);
    domtoimage
      .toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "makingchip.png";
        link.href = dataUrl;
        link.click();
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
        setIsDownloading(false);
      });
  };

  return (
    <div>
    <h3 className="text-3xl text-center font-bold">Funny Templates</h3>
  
    <div className="flex justify-center items-center mt-5">
      <div id="template" className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto bg-customRed">
        <div className="border-4 border-customRed">
          <Image
            src={originalImage ? originalImage : motuImage}
            alt="image"
            width={300}
            height={300}
            className="w-full h-80 object-cover object-center"
            onLoadingComplete={() => setImagesLoaded(true)}
          />
        </div>
        <div className="font-bold text-center m-3 text-lg md:text-xl">
          <>
            {words?.map((word, index) => (
              <span key={index}>{word} </span>
            ))}
            {lastWord && (
              <span style={{ color: 'yellow' }}>{lastWord}</span>
            )}
          </>
        </div>
        <p className="font-bold text-right mt-6 mr-3 text-sm relative top-10">
          {realDate.toDateString()}
        </p>
  
        <div className="flex text-xs items-center relative top-10 bg-customRed2 justify-center gap-1 sm:gap-1 p-2">
  <img
    src="https://i.ibb.co.com/2sqWQSL/jomuna-logo.png"
    alt="img"
    className="w-32"
  />
  <div className="flex sm:gap-1">
    <p className="flex items-center">
      <StepForward /> www.jomuna.tv
    </p>
    <p className="flex items-center">
      <Facebook /> jomunatelevision
    </p>
    <p className="flex items-center">
      <Youtube /> jomunatvbd
    </p>
  </div>
</div>

      </div>
    </div>
  
    <div className="text-center">
      <button
        onClick={handleDownload}
        className="btn btn-primary mt-20"
        disabled={isDownloading}
      >
        {isDownloading ? "Downloading..." : "Download as Image"}
      </button>
    </div>
  
    <div className="mt-20">
      <form className="flex flex-col justify-center items-center gap-2 ">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          onChange={handleFileUpload}
        />
        <input
          type="text"
          onChange={handleTextChange}
          placeholder="Enter text"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </form>
    </div>
  </div>
  
  );
}

export default FunnyTemplates;
