"use client"
import React,{ useState ,useRef, useEffect} from 'react'
import axios from 'axios'
import { CldImage } from 'next-cloudinary'

// Define the social media formats with their respective dimensions and aspect ratios
const ImageFormats = {
    "Portrait (9:16)": { width: 1080, height: 1920, aspectRatio: "9:16" },
    "Square (1:1)": { width: 1000, height: 1000, aspectRatio: "1:1" },
    "Landscape (16:9)": { width: 1920, height: 1080, aspectRatio: "16:9" }
  };
  
  type ImageFormat = keyof typeof ImageFormats;

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
        
    }

  return (
    <div>ImageFill</div>
  )
}

export default ImageFill