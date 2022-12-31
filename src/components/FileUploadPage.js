import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import React from "react";

const FileUploadPage = () => {

  const upload = (file) => {
    var file = file.target.files[0];
    const target = { Bucket: "homebar.co.kr", Key: file.name, Body: file };
    const creds = {
      accessKeyId: "AKIAROQYAO4UZDOSVPOJ",
      secretAccessKey: "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",
    };

    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({ region: "ap-northeast-2", credentials: creds }),
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
  };
  
  return (
    <div className=" w-full h-screen bg-slate-200">
      <div className="pt-32">
        <p className="text-2xl text-center mb-20">File UpLoad</p>
      </div>
      <div className=" w-4/12 m-auto bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            멀티 파일  Upload
          </h3>
          <div className="mt-8  max-w-xl text-sm text-gray-500">
            <p>  * S3 스토리지에 멀티파일 Upload </p>
            <p>  * S3 계정에서 확인할 것 </p>
          </div>
          <form className="mt-5 mb-4 sm:flex sm:items-center border-2 p-4 border-black border-opacity-10 ">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="file" className="sr-only">
                Files
              </label>
              <input
                type="file"
                name="file"
                className="block w-full m-auto rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={upload} 
              />
            </div>
          </form>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPage;
