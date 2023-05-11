"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from'next-auth/react'

const Nav = () => {
  //mock test
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
    const response = await getProviders();

    setProviders(response)
  }
  setUpProviders();
  },[])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
      <Image 
      src='/assets/images/logo.svg'
      alt='logo'
      width={127}
      height={32}
      className='object-contain'
      />
      {/* <p className='logo_text'>LinkedHawk</p> */}
    </Link>
    {/* desktop navigation */}
    <div className='sm:flex hidden'>
      {session?.user ? (
        <div className='flex gap-3 md:gap-5'>
          <Link href='/candidates-search' className='black_btn'>Find candidates</Link>
          <Link href='/create-eprofile'
          className='black_btn'> Create Employment Profile</Link>
          <button type='button' onClick={signOut} className='outline_btn'>Sign out</button>
          <Link href='/profile'>
            <Image  
            src={session?.user.image}
            width={37}
            height={37}
            className='rounded-full'
            alt='profile'
            />
          </Link>
        </div>
      ): (
        //empty react fragment placeholder
        <>
        {providers &&
        Object.values(providers).map((provider) => (
          <button
          type='button'
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className='black_btn'
          >
            Sign In
          </button>
        ))
        }
        </>
      )}
    </div>
    {/* mobile navigation */}
    <div className='sm:hidden flex relative'>
      {session?.user ? (
        <div className='flex'>
         <Image
          src={session?.user.image}
          width={37}
          height={37}
          className='rounded-full cursor-pointer'
          alt='profile'
          onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown &&
          (
            <div className='dropdown'>
            <Link
            href='/profile'
            className='dropdown_link'
            onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link
            href='/create-eprofile'
            className='dropdown_link'
            onClick={() => setToggleDropdown(false)}
            >
              Create Employment Profile
            </Link>
            <button
            type='button'
            onClick={() => {toggleDropdown(false)
            signOut}}
            className='mt-5 w-full black_btn'
            >
            Sign out
            </button>
            </div>
          )}
        </div>
      ): (
        <>
        {providers &&
        Object.values(providers).map((provider) => (
          <button
          type='button'
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className='black_btn'
          >
            Sign In
          </button>
        ))
        }
        </>
      )}
    </div>
    </nav>
  )
}

export default Nav