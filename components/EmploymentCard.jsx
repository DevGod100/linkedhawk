'use client';

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const EmploymentCard = ({post, handleEdit, handleDelete}) => {
  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState('')
  const handleCopy = () => {
    setCopied(post.eprofile)
    navigator.clipboard.writeText(post.eprofile)
    setTimeout(() => setCopied(""),3000);
  }

  return (
    <div className="employment_card"  >
      <div className="flex fustify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image 
          src={post.creator.image}
          alt='user_image'
          width={40}
          height={40}
          className="rounded-full object-contain"
          placeholder="blur"
          blurDataURL={post.creator.image}
          />
          <div className="flex flex-col">
          {/* capitalize first letter of username */}
            <h3 className="font-satoshi font-semibold text-gray-900">{post.ename}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image 
          src={copied === post.eprofile
          ? '/assets/icons/tick.svg'
          : '/assets/icons/copy.svg'
          }
          alt="user_image"
          width={14}
          height={14}
          />
        </div>

      </div>

      {/* <p className="my-4 font-satoshi text-sm text-gray-700">{post.ename}</p> */}
      <p className="font-inter text-sm blue_gradient cursor-pointer" 
      >
        {post.tag}
        </p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Location:{` `}{post.location}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Salary:{` `}{post.salary}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Language:{` `}{post.language}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Proffesion:{` `}{post.proffesion}</p>

       {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className="gap-4 mt-5 flex-center border-t border-gray-100 pt-3">
          <button className="font-inter green_gradient cursor-pointer text-sm"
          onClick={handleEdit}>
            Edit
          </button>
          <button className="font-inter orange_gradient cursor-pointer text-sm"
          onClick={handleDelete}
          >
            Delete
          </button>
        </div>
       )}
       
    </div>
  )
}

export default EmploymentCard