"use client"
import React,{ useState ,useRef, useEffect} from 'react'
import axios from 'axios'
// import { CldImage } from 'next-cloudinary'

// Define the social media formats with their respective dimensions and aspect ratios
/* const imageFormats = {
    "Portrait (9:16)": { width: 1080, height: 1920, aspectRatio: "9:16" },
    "Square (1:1)": { width: 1000, height: 1000, aspectRatio: "1:1" },
    "Landscape (16:9)": { width: 1920, height: 1080, aspectRatio: "16:9" }
  };
  
  type ImageFormat = keyof typeof imageFormats; */

function ImageFill() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    // const [selectedFormat, setSelectedFormat] = useState<ImageFormat>("Portrait (9:16)");
    // const [isTransforming, setIsTransforming] = useState(false);
    // const imageRef = useRef<HTMLImageElement>(null);

  /*   useEffect(() =>{
        if (uploadedImage) {
            setIsTransforming(true)
        }
    },[selectedFormat,uploadedImage]) */
    const handleFileUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await axios.post("/api/image-fill", formData);
          console.log(response.data);
          if (!response.data) {
            throw new Error("Failed to upload image");
          }
          const data = response.data
          console.log("width", data.width, "height",data.height);
          setUploadedImage(data.restoreImage);
          return;
        } catch (error) {
          console.log(error);
         return alert("Failed to upload image");
        }finally{
            setIsUploading(false);
        }
    }
console.log('uploadedImage',uploadedImage);
    const handleDownload = () =>{
        if (!uploadedImage) return;
        fetch(uploadedImage)
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
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Image Restore!</h1>
          <p className="py-6">
            Restore any image to its original state.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
          {isUploading ? <div className="loading loading-lg"></div>
        :
        <>
        {
          uploadedImage ? <>
          <img
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
  )
}

export default ImageFill