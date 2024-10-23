import Image from 'next/image'
import React from 'react'
import Makingchip from "@/app/opengraph-image.png";
import { FaCaretRight, FaFacebook, FaYoutube } from 'react-icons/fa';

interface Props {
    originalImage: string | null ;
    text: string;
    isDownloading: boolean;
    handleDownload: (nodeId: string) => void;
    imagePosition: boolean;
    setImagesLoaded: React.Dispatch<React.SetStateAction<boolean>>;
    realDate: Date;
}

function AllTemplates({originalImage, text, setImagesLoaded, realDate, isDownloading, handleDownload, imagePosition, }: Props) {
    const words = text?.split(' ');
    const lastWord = words?.pop();
  return (
    <main>
         <div
        id="bokhriTemplate"
        className="w-[500px] h-[500px] relative bg-[url('../public/BokhriTemplate.png')] bg-cover"
      >
        <div className="relative">
          <Image
            src={originalImage ? originalImage : Makingchip}
            alt="image"
            width={260}
            height={300}
            className=" w-64 h-48 object-cover object-center rounded-3xl relative top-24 left-24"
            onLoadingComplete={() => setImagesLoaded(true)}
          ></Image>
        </div>

        <p className="font-bold text-right mt-6 text-xs relative top-64 right-16">
          {realDate.toDateString()}
        </p>
        <div className="font-bold text-center m-3 text-xl text-[#1A103D] relative top-32">
          <p>{text}</p>
        </div>
      </div>
      <button
          onClick={() => handleDownload("bokhriTemplate")}
          className="btn btn-primary mt-10"
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download as Image"}
        </button>

        {/* 2nd */}

        <div id="template" className="w-[500px] h-[500px] bg-customRed mt-3">
          <div className="border-4 border-customRed">
            <Image
              src={originalImage ? originalImage : Makingchip}
              alt="image"
              width={300}
              height={300}
              className={`w-full h-80 object-cover ${imagePosition ? "object-center" : "object-top"}`}
              onLoadingComplete={() => setImagesLoaded(true)}
            ></Image>
          </div>
          <div className="font-bold text-center m-3 text-sm">
         <>
      {words?.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
      {lastWord && (
        <span style={{ color: 'yellow' }}>{lastWord}</span>
      )}
         
         </>
    </div>
          <p className="font-bold text-right mt-6 mr-3 text-xs relative top-12">
            {realDate.toDateString()}
          </p>

          <div className="flex text-[8px] items-center relative top-12 bg-customRed2 justify-center gap-1 p-2 md:text-xs">
            
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

        <button
          onClick={() => handleDownload("template")}
          className="btn btn-primary mt-10"
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download as Image"}
        </button>
    </main>
  )
}

export default AllTemplates