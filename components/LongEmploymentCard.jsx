'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const EmploymentCard = ({post, handleEdit, handleDelete}) => {
  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return ( 
    //styling v1
  // <div className="long_employment_card">
  // <div className="flex fustify-between items-start gap-5">
  //   <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
    <div>

        <div className="p-8 border border-gray-100  rounded-md">
          <Image 
          src={post.creator.image}
          alt='user_image'
          width={80}
          height={80}
          className="rounded-full object-contain"
          placeholder="blur"
          blurDataURL={post.creator.image}
        
          />
        </div>

        <div>
            <h3 className=" font-satoshi font-semibold text-gray-900">{post.ename}</h3>
        </div>


       <div className="mt-10">
      <p className="font-satoshi text-gray-900">{post.profession}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Email:{` `}{post.creator.email}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Salary:{` `}${post.salary}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Language:{` `}{post.language}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">Location:{` `}{post.location}</p>
      </div>

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