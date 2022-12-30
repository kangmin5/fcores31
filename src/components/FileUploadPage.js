import {  S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import React from "react";

const FileUploadPage = () => {

    const upload = (file) => {
        var file = file.target.files[0];

    const target = { Bucket: "homebar.co.kr", Key:file.name, Body:file };
    const creds = { accessKeyId: "AKIAROQYAO4UZDOSVPOJ", secretAccessKey: "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" };

    try {
        const parallelUploads3 = new Upload({
          client: new S3Client({region:"ap-northeast-2",credentials:creds,}),
          leavePartsOnError: false, // optional manually handle dropped parts
          params: target,
        //   tags: [/*...*/ ], // optional tags
        //   queueSize: 4, // optional concurrency configuration
        //   partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
        });
      
        parallelUploads3.on("httpUploadProgress", (progress) => {
          console.log(progress);
        });
      
         parallelUploads3.done();
      } catch (e) {
        console.log(e);
      }
    }
  return (
    <div className=" w-full h-screen bg-slate-200">
      <div className="">
              <p className="text-2xl text-center">File UpLoadPage</p>
              <input type="file" className="" onChange={upload}/>
      </div>
    </div>
  );
};

export default FileUploadPage;
