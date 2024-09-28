import cloudinary from "cloudinary";
import { NextRequest, NextResponse } from "next/server";


interface CloudinaryImageResult{
    public_id:string
    originalSize:string
    compressedSize:string

}


export async function POST(request:NextRequest) {
    
}