-- CreateTable
CREATE TABLE "TepmVideo" (
    "id" TEXT NOT NULL,
    "originalSize" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "compressedSize" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TepmVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TempFile" (
    "id" TEXT NOT NULL,
    "originalSize" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "compressedSize" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempFile_pkey" PRIMARY KEY ("id")
);
