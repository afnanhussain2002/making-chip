import cloudinary from "@/utils/cloudinary";
import { NextResponse, NextRequest } from "next/server";

interface CloudinaryImageSocialFormats {
  public_id: string;
  [key: string]: string | number | boolean | null;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<CloudinaryImageSocialFormats>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "social-format-image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result as CloudinaryImageSocialFormats);
          }
        );
        uploadStream.end(buffer);
      }
    );
    return NextResponse.json({ public_id: result.public_id }, { status: 201 });
  } catch (error) {
    console.log("upload image failed to social format", error);
    return NextResponse.json({ error: "upload image failed" }, { status: 501 });
  }
}
