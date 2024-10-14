"use client";
import Image from "next/image";
import React, { useState } from "react";
import makingChip from "../app/opengraph-image.png";
import { FaCaretRight, FaFacebook, FaYoutube } from "react-icons/fa";
import domtoimage from "dom-to-image";


function FunnyTemplates() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  // const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [text, setText] = useState<string>("Inter Your Text Here");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imagePosition, setImagePosition] = useState<boolean>(true);

  const words = text?.split(" ");
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
  let downloadCounter = 0;

  const handleDownload = async () => {
    downloadCounter++;
    if (!imagesLoaded) return;
    const node = await document.getElementById("template");
    if (!node) {
      console.error("Template node not found.");
      return;
    }

    setIsDownloading(true);
    const scale = 2; // Increase this value for higher resolution
    const style = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    };

    domtoimage
      .toPng(node, {
        width: node.offsetWidth * scale,
        height: node.offsetHeight * scale,
        style,
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `makingchip_${downloadCounter}.png`;
        link.href = dataUrl;
        link.click();
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error("Oops, something went wrong!", error);
        setIsDownloading(false);
      });
  };

  console.log(imagePosition);

  return (
    <div>
      <h3 className="text-3xl text-center font-bold">Funny Templates</h3>

      <div className="flex justify-center items-center mt-5">
        <div id="template" className="w-[500px] h-[500px] bg-customRed">
        
            <div className="border-4 border-customRed">
              <Image
                src={originalImage ? originalImage : makingChip}
                alt="image"
                width={300}
                height={300}
                className={`w-full h-80 object-cover ${imagePosition ? "object-center" : "object-top"}`}
                onLoadingComplete={() => setImagesLoaded(true)}
              ></Image>
            </div>
       
          <div className="font-bold text-center m-3 text-xl">
            <>
              {words?.map((word, index) => (
                <span key={index}>{word} </span>
              ))}
              {lastWord && <span style={{ color: "yellow" }}>{lastWord}</span>}
            </>
          </div>
          <p className="font-bold text-right mt-6 mr-3 text-sm relative top-12">
            {realDate.toDateString()}
          </p>

          <div className="flex text-[8px] items-center relative top-14 bg-customRed2 justify-center gap-1 p-2 md:text-xs">
            <img
              src="https://i.ibb.co.com/2sqWQSL/jomuna-logo.png"
              alt="img"
              width={100}
              height={50}
              className="w-20 md:w-32 "
            />
            <div className="grid grid-cols-3 gap-1">
              <p className="flex items-center">
                {" "}
                <FaCaretRight /> www.jomuna.tv
              </p>
              <p className="flex items-center gap-1">
                <FaFacebook />
                jomunatelevision
              </p>
              <p className="flex gap-1 items-center">
                <FaYoutube />
                jomunatvbd
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-1">
      <button
          onClick={() => setImagePosition((prev) => !prev)}
          className="btn btn-primary btn-sm mt-1"
        >
          Change Image Position
        </button>

      </div>
      <div className="text-center">
        <button
          onClick={handleDownload}
          className="btn btn-primary mt-20"
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download as Image"}
        </button>
        <br />

      </div>
      <div className="mt-10">
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
