import React from "react";
import Fill from "@/images/Fill.png";
import Optimize from "@/images/Optimize.png";
import Format from "@/images/Formats.png";
import Template from "@/images/Templates.png";
import Improve from "@/images/Improve.png";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <>
      <div
        className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100
 py-5"
      >
        <Link href={"/image-fill"}>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={Fill}
              alt="Pixlr Editor"
              className="w-20 h-20 rounded"
            />
            <h3 className="text-primary font-semibold">Fill Background</h3>
            <p className="text-white text-center">
              Fill Image Background Portrait or Landscape
            </p>
          </div>
        </Link>
      </div>

      <div
        className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-red-100 py-5"
      >
        <Link href={"/image-optimize"}>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={Optimize}
              alt="Pixlr Express"
              className="w-20 h-20 rounded"
            />
            <h3 className="text-primary font-semibold">Optimize Image</h3>
            <p className="text-white text-center">
              Optimize your images up to 40%-50%
            </p>
          </div>
        </Link>
      </div>

      <div
        className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 py-5"
      >
        <Link href={"/image-formats"}>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={Format}
              alt="Pixlr Designer"
              className="w-20 h-20 rounded"
            />
            <h3 className="text-primary font-semibold">Social Format</h3>
            <p className="text-white text-center">
              Convert normal image format to facebook cover and more
            </p>
          </div>
        </Link>
      </div>

      <div
        className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 py-5"
      >
        <Link href={"/funny-templates"}>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={Template}
              alt="Remove bg"
              className="w-20 h-20 rounded"
            />
            <h3 className="text-primary font-semibold">Template</h3>
            <p className="text-white text-center">
              Use funny news templates or use templates for post
            </p>
          </div>
        </Link>
      </div>

      <div
        className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 py-5"
      >
        <Link href={"/image-restore"}>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={Improve}
              alt="Batch Editor"
              className="w-20 h-20 rounded"
            />
            <h3 className="text-primary font-semibold">Image Improve</h3>
            <p className="text-white text-center">
              Improve a little bit blur image to clear image
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
