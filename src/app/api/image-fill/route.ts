// import { PrismaClient } from "@prisma/client";
import cloudinary from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";


// const prisma = new PrismaClient();

interface CloudinaryImageFill {
  public_id: string;
  url: string;
  [key: string]: string | number | boolean | null;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    console.log("File-------", file.name,);


    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 401 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<CloudinaryImageFill>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
            folder: "making-chip-images",
          },
          (error, uploadResult) => {
            if (error) {
              reject(error);
              console.log("Error-------", error);
            } else {
              resolve(uploadResult as CloudinaryImageFill);
            }
          }
        );
        uploadStream.end(buffer);
      }
    );

    // Handle the result as needed
    return NextResponse.json({result}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when upload the file" },
      { status: 500 }
    );
  }
}
