import { PrismaClient } from "@prisma/client";
import cloudinary from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

interface CloudinaryImageOptimize {
  public_id: string;
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const originalSize = formData.get("originalSize") as string;
    // console.log("File-------", file, originalSize);

    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 401 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<CloudinaryImageOptimize>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "auto",
            folder: "making-chip-images",
            transformation: [{ quality: "auto", fetch_format: "auto" }],
          },
          (error, uploadResult) => {
            if (error) {
              reject(error);
              console.log("Error-------", error);
            } else {
              resolve(uploadResult as CloudinaryImageOptimize);
            }
          }
        );
        uploadStream.end(buffer);
      }
    );
    // console.log("Result-------", result);
    // Handle the result as needed
    return NextResponse.json({ ...result, originalSize }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when upload the file" },
      { status: 500 }
    );
  }
}
