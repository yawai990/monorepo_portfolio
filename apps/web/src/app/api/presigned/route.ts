import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string,
});

export async function POST(req: NextRequest) {
  const filetype = req.nextUrl.searchParams.get("filetype") as string;
  const filename = req.nextUrl.searchParams.get("filename") as string;

  if (filetype || filename) {
    const signedUrl = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME as string,
        Key: filename,
        ContentType: filetype,
      }),
      {
        // ~ THE UNUSED PRESIGNED LINK WILL BE EXPIRED AFTER 1 HOUR
        expiresIn: 3600,
      },
    );
    return NextResponse.json({
      url: signedUrl,
      key: filename,
    });
  }
  return NextResponse.json({ error: "Missing filetype or filename" });
}
