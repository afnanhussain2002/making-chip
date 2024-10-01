"use client"
import React,{ useState ,useRef, useEffect} from 'react'
import axios from 'axios'
import { CldImage } from 'next-cloudinary'

// Define the social media formats with their respective dimensions and aspect ratios
const imageFormats = {
    "Portrait (9:16)": { width: 1080, height: 1920, aspectRatio: "9:16" },
    "Square (1:1)": { width: 1000, height: 1000, aspectRatio: "1:1" },
    "Landscape (16:9)": { width: 1920, height: 1080, aspectRatio: "16:9" }
  };
  
  type ImageFormat = keyof typeof imageFormats;

function ImageFill() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState<ImageFormat>("Portrait (9:16)");
    const [isTransforming, setIsTransforming] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() =>{
        if (uploadedImage) {
            setIsTransforming(true)
        }
    },[selectedFormat,uploadedImage])
    const handleFileUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await axios.post("/api/image-fill", formData);
          console.log(response);
          if (!response.data) {
            throw new Error("Failed to upload image");
          }
          const data = response.data
          console.log("width", data.width, "height",data.height);
          setUploadedImage(data.public_id);
          return;
        } catch (error) {
          console.log(error);
         return alert("Failed to upload image");
        }finally{
            setIsUploading(false);
        }
    }

    const handleDownload = () =>{
        if (!imageRef.current) return;
        fetch(imageRef.current.src)
        .then((response) => response.blob())
        .then((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${selectedFormat?.replace(/\s+/g, "_").toLowerCase()}.png`;
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
    <div className="container mx-auto p-4 max-w-4xl">
    <h1 className="text-3xl font-bold mb-6 text-center">
      Social Media Image Creator
    </h1>

    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Upload an Image</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Choose an image file</span>
          </label>
          <input
            type="file"
            onChange={handleFileUpload}
            className="file-input file-input-bordered file-input-primary w-full"
          />
        </div>

        {isUploading && (
          <div className="mt-4">
            <progress className="progress progress-primary w-full"></progress>
          </div>
        )}

        {uploadedImage && (
          <div className="mt-6">
            <h2 className="card-title mb-4">Select Social Media Format</h2>
            <div className="form-control">
              <select
                className="select select-bordered w-full"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value as ImageFormat)}
              >
                {Object.keys(imageFormats).map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 relative">
              <h3 className="text-lg font-semibold mb-2">Preview:</h3>
              <div className="flex justify-center">
                {isTransforming && (
                  <div className="absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-50 z-10">
                    <span className="loading loading-spinner loading-lg"></span>
                  </div>
                )}
                <CldImage
                  width={imageFormats[selectedFormat].width}
                  height={imageFormats[selectedFormat].height}
                  src={uploadedImage}
                  sizes="100vw"
                  alt="transformed image"
                  crop="pad"
                  aspectRatio={imageFormats[selectedFormat].aspectRatio}
                  gravity='auto'
                  ref={imageRef}
                  fillBackground
                  onLoad={() => setIsTransforming(false)}
                />
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary" onClick={handleDownload}>
                Download for {selectedFormat}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default ImageFill