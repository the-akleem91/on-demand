"use client"

import { CloudUpload } from 'lucide-react';
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function UploadImage() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0]);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className=' cursor-pointer mt-4 border w-[20rem] flex items-center justify-center border-input rounded-md p-4'>
            <input {...getInputProps()} />
            <div className='flex flex-col items-center gap-4 '>
                <CloudUpload size={"72"} />
                <p className='text-center'>Upload the Image to get know whether its for you or not</p>
            </div>
        </div>
    )
}