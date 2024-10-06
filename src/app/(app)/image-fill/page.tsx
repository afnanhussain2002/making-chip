"use client"

import React, { useState, useEffect, useRef } from 'react';
import { CldImage } from 'next-cloudinary';
import axios from 'axios';

// Define the social media formats with their respective dimensions and aspect ratios
const socialFormats = {
   " Portrait (9:16)": { width: 1080, height: 1920, aspectRatio: "9:16" }, // Main portrait size
    " Landscape (16:9)": { width: 1920, height: 1080, aspectRatio: "16:9" },
};

type SocialFormat = keyof typeof socialFormats;

function ImageFormats() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [selectedFormat, setSelectedFormat] = useState<SocialFormat>(" Portrait (9:16)");
    const [isUploading, setIsUploading] = useState(false);
    const [isTransforming, setIsTransforming] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (uploadedImage) {
            setIsTransforming(true);
        }
    }, [selectedFormat, uploadedImage]);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        console.log("file----", file);

        if (!file) return;
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("/api/image-fill", formData);

            if (!response.data) {
                throw new Error("Failed to upload image");
            }

            const data = response.data;
            console.log('data------', response.data.result.public_id);

            setUploadedImage(data.result.public_id);

        } catch (error) {
            console.log("Error from uploading image format", error);
            alert("Failed to format image");
        } finally {
            setIsUploading(false);
        }
    };

    const handleDownload = () => {
        if (!imageRef.current) return;

        setIsDownloading(true);

        fetch(imageRef.current.src)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `${selectedFormat.replace(/\s+/g, "_").toLowerCase()}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error downloading the image:", error);
                alert("Failed to download image");
            })
            .finally(() => {
                setIsDownloading(false);
                if (uploadedImage) {
                    axios.delete(`/api/delete-resource/${uploadedImage.split("/").pop()}`)
                      .then(response => {
                        console.log("Resource deleted:", response.data);
                      })
                      .catch(error => {
                        console.error("Error deleting resource:", error);
                      });
                  }
            });
    };

    console.log('uploadImag------e', uploadedImage);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Image background fill <span className='text-xs bg-primary px-1 rounded'>beta</span>!
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
                            <h2 className="card-title mb-4">Select Format</h2>
                            <div className="form-control">
                                <select
                                    className="select select-bordered w-full"
                                    value={selectedFormat}
                                    onChange={(e) => setSelectedFormat(e.target.value as SocialFormat)}
                                >
                                    {Object.keys(socialFormats).map((format) => (
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
                                        width={socialFormats[selectedFormat].width}
                                        height={socialFormats[selectedFormat].height}
                                        src={uploadedImage}
                                        sizes="100vw"
                                        alt="transformed image"
                                        crop={"pad"}
                                        aspectRatio={socialFormats[selectedFormat].aspectRatio}
                                        gravity='center'
                                        ref={imageRef}
                                        fillBackground
                                        onLoad={() => setIsTransforming(false)}
                                    />
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-6">
                                <button className="btn btn-primary" onClick={handleDownload} disabled={isDownloading}>
                                    {isDownloading ? "Downloading..." : `Download for ${selectedFormat}`}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImageFormats;
