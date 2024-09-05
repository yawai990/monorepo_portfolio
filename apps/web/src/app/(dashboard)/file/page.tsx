"use client";
import React, { ChangeEvent } from "react";
import { Button } from "@repo/ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";

const FileUpload = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [imgViewlink, setImgViewLink] = React.useState("");

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target!;
    if (file && file.files) {
      const compressImg = await imageCompression(file.files[0], {
        maxSizeMB: 1
      });
      setFile(compressImg);
    }
    return;
  };
  const fileUpload = async () => {
    if (file) {
      try {
        // ? REQUEST UPLOAD LINK
        const url = await axios.post(
          `http://localhost:3000/api/presigned?filetype=${file.type}&filename=${file.name}`
        );

        if (url.status === 200) {
          await axios.put(url.data.url, file).then(() => {
            setImgViewLink(
              decodeURIComponent(url.data.url).replace(
                /\?X-Amz-Algorithm.*$/,
                ""
              )
            );
            toast.success("file uploaded successfully");
          });
        }
      } catch (error) {
        throw new Error();
      }
    }
  };
  return (
    <div>
      <input type="file" onChange={handleChangeFile} />

      <Button onClick={fileUpload}>File Upload</Button>

      <h1>Image View Link</h1>

      <a
        target="_blank"
        href={imgViewlink}
        className="text-red-500 font-semibold"
      >
        View Image
      </a>
    </div>
  );
};

export default FileUpload;
