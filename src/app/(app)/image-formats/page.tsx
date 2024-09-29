"use client"

import React, { useState, useEffect, useRef } from 'react';
import { CldImage } from 'next-cloudinary';

// Define the social media formats with their respective dimensions and aspect ratios
const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
};

function ImageFormats() {
  return (
    <div>ImageFormats</div>
  )
}

export default ImageFormats