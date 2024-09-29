import { NextResponse, NextRequest } from "next/server";

interface CloudinaryImageSocialFormats{
    public_id:string;
    [key:string]:any;
}


export async function POST(request:NextRequest){
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;
    } catch (error) {
        
    }
}