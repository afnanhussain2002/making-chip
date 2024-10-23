"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Makingchip from "@/app/opengraph-image.png";
import { FaCaretRight, FaFacebook, FaYoutube } from 'react-icons/fa';
import AllTemplates from '@/components/AllTemplates';
import domtoimage from 'dom-to-image';


function FunnyTemplates() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [text, setText] = useState<string>("Inter Your Text Here");
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [imagePosition, setImagePosition] = useState<boolean>(true);
    const realDate = new Date();
    const words = text?.split(' ');
    const lastWord = words?.pop();

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
    
      const handleDownload = async (nodeId: string) => {
        downloadCounter++;
        if (!imagesLoaded) return;
        const node = await document.getElementById(nodeId);
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
    <>
    <h2 className='text-5xl font-bold text-center mb-8'>Funny Templates</h2>
    <main className='grid grid-cols-1 gap-1 md:grid-cols-2'>
        <div className="w-[200px] h-[200px] relative bg-[url('../public/BokhriTemplate.png')] bg-cover">
  <div className='relative'>
  <Image
              src={originalImage ? originalImage : Makingchip}
              alt="image"
              width={260}
              height={300}
              className=" w-28 h-20 object-cover object-center rounded-3xl relative top-[37px] left-[34px]"
              onLoadingComplete={() => setImagesLoaded(true)}
              
            >

            </Image>

  
  </div>
 
  <p className="font-bold text-right mt-6 text-[6px] relative top-20 right-8">
            {realDate.toDateString()}
          </p>
          <div className="font-bold text-center m-3 text-[10px] text-[#1A103D] relative top-8">
      <p>{text}</p>
    </div>
</div>

{/* 2nd */}

<div className="w-[200px] h-[200px] bg-customRed">
          <div className="border-4 border-customRed">
            <Image
              src={originalImage ? originalImage : Makingchip}
              alt="image"
              width={300}
              height={300}
              className={`w-full h-20 object-cover ${imagePosition ? "object-center" : "object-top"}`}
              onLoadingComplete={() => setImagesLoaded(true)}
            ></Image>
          </div>
          <div className="font-bold text-center m-3 text-[10px]">
         <>
      {words?.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
      {lastWord && (
        <span style={{ color: 'yellow' }}>{lastWord}</span>
      )}
         
         </>
    </div>
          <p className="font-bold text-right mt-6 mr-3 text-[6px] relative top-6">
            {realDate.toDateString()}
          </p>

          <div className="flex text-[6px] items-center relative top-6 bg-customRed2 justify-center gap-1 p-1">
            
            <img
              src="https://i.ibb.co.com/2sqWQSL/jomuna-logo.png"
              alt="img"
              width={100}
              height={50}
              className="w-10"
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

    </main>
        {/* inputs */}

        <div className="text-center">
     
       {/* You can open the modal using document.getElementById('ID').showModal() method */}
       <button className="btn btn btn-primary mt-20" onClick={() => (document.getElementById('my_modal_4') as HTMLDialogElement)?.showModal()}>Ready for Download</button>
<dialog id="my_modal_4" className="modal overflow-y-auto overflow-x-auto">
  <div className="modal-box w-11/12 max-w-5xl ">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <AllTemplates originalImage={originalImage} text={text} setImagesLoaded={setImagesLoaded} realDate={realDate} isDownloading={isDownloading} handleDownload={handleDownload} imagePosition={imagePosition} />
       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        <br />
        <button
          onClick={() => setImagePosition((prev) => !prev)}
          className="btn btn-primary btn-sm mt-1"
        >
          Change Image Position
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
            maxLength={71}
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </form>
      
        
      </div>
    
    </>
  )
}

export default FunnyTemplates