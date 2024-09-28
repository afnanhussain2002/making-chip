import { PrismaClient } from "@prisma/client";
import cloudinary from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface CloudinaryImageResult{
    public_id:string
    originalSize:string
    compressedSize:string

}


export async function POST(request:NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const originalSize = formData.get("originalSize") as string;

        if (!file) {
            return NextResponse.json({message:"File not found"}, {status:401})
        }

        const result = await new Promise<CloudinaryImageResult>(resolve,reject) =>{
            const uploadFile = await cloudinary.uploader.upload(file, {
                resource_type:"auto",
                folder:"making-chip-images",
            })
        }
    } catch (error) {
        
    }
}