"use client"
import Image from 'next/image'
import { useState,  useEffect } from "react";
import {signIn,  useSession, getProviders} from'next-auth/react'

const UserSignIn = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
    const response = await getProviders();

    setProviders(response)
  }
  setUpProviders();
  },[])

  return (

 <section className='flex-col flex-between w-full mb-0 pt-3 px-5 pb-2'>

{/* Profile image/SignUp */}
<div className='absolute right-2 top-4 md:top-10'>
      {session?.user ? (
        <div className='flex z-10'>
         <Image
          src={session?.user.image}
          width={37}
          height={37}
          className='rounded-full cursor-pointer '
          alt='profile'
          />
        </div>
      ): (
        <>
        {providers &&
        Object.values(providers).map((provider) => (
          <button
          type='button'
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className='Light_Button'
          >
            Sign In
          </button>
        ))
        }
        </>
      )}
    </div>
    </section>

  )
}

export default UserSignIn
