"use client"
import React,{ useState ,useRef} from 'react'
import axios from 'axios'
import { CldImage } from 'next-cloudinary'


function ImageFill() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
  return (
    <div>ImageFill</div>
  )
}

export default ImageFill