import cloudinary from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest, { params }: { params: { publicId: string } }) {
  const { publicId } = params;
  
  if (!publicId) {
    return NextResponse.json({ error: "public_id is required" }, { status: 400 });
  }

  const cloudinaryPublicId = `making-chip-images/${publicId}`;
  try {
    const result = await cloudinary.uploader.destroy(cloudinaryPublicId);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

