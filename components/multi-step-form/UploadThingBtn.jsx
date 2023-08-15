"use client";
 
import "@uploadthing/react/styles.css";
 
import { UploadButton } from "@uploadthing/react";
 
// const { OurFileRouter } = require("./api/uploadthing/core");
// import { ourFileRouter } from "@app/api/uploadthing/core";

export default function UploadImageV1() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </section>
  );
}