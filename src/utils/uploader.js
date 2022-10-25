import React from 'react'

export default async function uploader(event) {
    const fileUploaded = event.taget.value[0];
    const sizeOfUploadedImage = fileUploaded.size / 1024 / 1024;
    let urlUploadedImg = ""

    if(sizeOfUploadedImage > 10){
        alert("can not upload this image")
    }
  return function () {
    return fileUploaded;
  };
}
