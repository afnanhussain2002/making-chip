import { PrismaClient } from "@prisma/client";
import cloudinary from "cloudinary";
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
    } catch (error) {
        
    }
}