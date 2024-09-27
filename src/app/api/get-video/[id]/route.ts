import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";


const prisma = new PrismaClient()

export async function GET (request:NextRequest, { params }: { params: { id: string } }){
    try {
        const video = await prisma.tepmVideo.findUnique({
            where:{
                id:params.id
            }
            
        })
        if (!video) {
           return NextResponse.json({message:"Video not found"}, {status:401})
        }
        return NextResponse.json(video,{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Error on fetching video"}, {status:501})
    }finally{
        await prisma.$disconnect()
    }
}