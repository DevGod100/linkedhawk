'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CloudinaryImageUpload from "./multi-step-form/CloudinaryImageUpload"; //cloudinary

const EmploymentCard = ({post}) => {
  const {ename} = post;
  const {data: session} = useSession();
  const router = useRouter();
  const {imageUrl} = CloudinaryImageUpload  //cloudinary

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className="linkedin_vibe_employment_card"  >
      <div className="flex fustify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer"  onClick={handleProfileClick}>
          <Image 
          src={post.creator?.image}
          alt='user_image'
          width={40}
          height={40}
          className="rounded-full object-contain"
          />
          {/* cloudinary */}
          <Image 
          src={session.user?.imageUrl}
          alt='profile_image'
          width={40}
          height={40}
          className="rounded-full object-contain"
          />
          {/* cloudinary */}
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{ename}</h3>
            <p className="font-satoshi text-gray-900">{post.profession}</p>
          </div>
        </div>
        </div>
       
    </div>
  )
}

export default EmploymentCard