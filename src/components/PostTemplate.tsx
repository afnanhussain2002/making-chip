"use client";
import React, { useState } from "react";
import DummyImage from "@/public/dummy_user.jpg";
import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";
import domtoimage from "dom-to-image";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function PostTemplate() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  // const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [name, setName] = useState<string>("Making Chip");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'color': [] }, { 'bold': true }], // Add color and bold options
      [{ 'align': [] }], // Optional: Add text alignment options
    ],
  };


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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.target.value;
    setName(text);
    return;
  }
 

  let downloadCounter = 0;

  const handleDownloadPost = async () => {
    console.log("clicked");
    downloadCounter++;
    if (!imagesLoaded) return;
    const node = await document.getElementById("templatePost");
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
  }
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">Post Template</h3>
      <p className="w-3/4 mx-auto mt-4 text-center">Upload your Image and Enter your name. Then Write something and download it as image. You can also change the color of post text. </p>
      <div className="flex justify-center mt-4">
    <div id="templatePost" className="text-gray-800 bg-white max-w-md w-full p-4 rounded-xl h-80 relative">
     <div className="flex">
        <p className="text-2xl  text-red-500"><TbPointFilled/></p>
        <p className="text-2xl text-yellow-500"><TbPointFilled /></p>
        <p className="text-2xl text-green-500"><TbPointFilled /></p>
     </div>
      <div className="border-t-2 mt-2 ml-2 border-gray-800 ">
        {/* <!-- User Info --> */}
       
        <div className="flex items-center space-x-4 mt-4">
          <Image
            className="w-12 h-12 rounded-full"
            src={originalImage ? originalImage : DummyImage}
            alt="Profile Picture"
            width={48}
            height={48}
            onLoadingComplete={() => setImagesLoaded(true)}
          />
          <div>
            <span className="font-bold">{name}</span>
          </div>
        </div>
        {/* <!-- Tweet Content --> */}
        <div className="mt-4 text-xl font-extrabold flex justify-center text-black">
        
        <div dangerouslySetInnerHTML={{ __html: value }} />

        </div>
      </div>
      <p className="font-bold text-blue-500 absolute bottom-0 right-3 ">
    makingchip.com
  </p>
    </div>

      </div>

    <div className="text-center">
      <button
          onClick={handleDownloadPost}
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
            onChange={handleNameChange}
            placeholder="Enter Your Name"
            maxLength={120}
            className="input input-bordered input-primary w-full max-w-xs"
          />
            <ReactQuill
          value={value}
          onChange={setValue}
          modules={modules}
          className="w-full max-w-xs h-20"
          >
          </ReactQuill>
        </form>
        
        
      </div>
    </div>
  );
}

export default PostTemplate;
