'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { CldUploadWidget } from 'next-cloudinary';

import { useSession} from'next-auth/react'

const CloudinaryImageUpload = () => {

  const {data: session} = useSession();
  const [imageUrl, setImageUrl] = useState(session?.user?.image);

  // const [key, setKey] = useState(0); // Unique key value for re-rendering Image component

  // useEffect(() => {
  //   if (imageUrl) {
  //     // Do something with the uploaded image URL
  //     console.log('New image uploaded:', imageUrl);
  //   }
  // }, [imageUrl]);

    const handleUploadSuccess = async (result) => {
        const uploadedImageUrl = result.info.url;

        console.log(uploadedImageUrl);
        setImageUrl(uploadedImageUrl);

            // Update user's profile image in the backend
    try {
      const response = await fetch('/pfp', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session.user.id,
          imageUrl: uploadedImageUrl,
        }),
      });

      if (response.ok) {
        console.log('Profile image updated successfully.');
      } else {
        console.log('Failed to update profile image.');
      }
    } catch (error) {
      console.log('Error occurred while updating profile image:', error);
    }
        // setKey((prevKey) => prevKey + 1); // Update key to trigger re-render
      };
  return (
    <div>
        <CldUploadWidget uploadPreset="v1_unsigned" onSuccess={handleUploadSuccess} >
  {({ open }) => {
    function handleOnClick(e) {
      e.preventDefault();
      open();
    }
    return (
      <button className="button" onClick={handleOnClick}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>

<div className='bg-red-500 h-[50%]'>
    
{imageUrl && (
          <div className="flex z-10">
            <Image  
            //  key={key} // Add key prop for re-rendering
             src={imageUrl} 
             width={37} 
             height={37} 
             className="rounded-full cursor-pointer" 
             alt="profile" 
             />
          </div>
        )}

        {!imageUrl && session?.user?.image && (
          <div className="flex z-10">
            <Image
              src={session.user.image}
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
            />
          </div>
        )}
        
</div>
    </div>
  )
}

export default CloudinaryImageUpload