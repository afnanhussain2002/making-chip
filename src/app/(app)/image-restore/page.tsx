"use client"
import React,{useState,useRef} from 'react'
import axios from 'axios'
import {CldImage} from 'next-cloudinary';

function ImageRestore() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [imageWidth, setImageWidth] = useState<number>(0);
    const [imageHeight, setImageHeight] = useState<number>(0);
    const imageRef = useRef<HTMLImageElement>(null);
  return (
    <div>ImageRestore</div>
  )
}

export default ImageRestore