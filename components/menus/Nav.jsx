"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import {signIn, signOut, useSession, getProviders} from'next-auth/react'

const Nav = () => {
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
  

  const navRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setToggleDropdown(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
    <nav className='flex-between w-full mb-16 pt-3 px-5 pb-2 border-b border-gray-300' ref={navRef}>
      <Link href='/' className='flex gap-2 flex-center'>
      <Image 
      src='/assets/images/logo.svg'
      alt='logo'
      width={127}
      height={32}
      className='object-contain'
      priority
      />
    </Link>


    {/* desktop navigation */}
    {/* <div className='sm:flex hidden'> */}
      {/* {session?.user ? (
        <div className='flex gap-3 md:gap-5'>
          {/* <Link href='/candidates-search' className='black_btn'>Find candidates</Link> */}
          {/* <Link href='/create-eprofile'
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
      ): ( */}
        {/* <>
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
    </div> */} 
    {/* mobile navigation */}
    {/* <div className='sm:hidden flex relative'> */}

    

    {/* temporary */}
    {/* {session?.user && (
    <div className='flex gap-3 justify-end'>
          <Link href='/candidates-search' className='black_btn'>Find candidates</Link>
          <Link href='/create-eprofile'
          className='black_btn'> Create Employment Profile</Link>
    </div>
      )} */}

      
      
    <div className='flex relative'>
      {session?.user ? (
        <div className='flex z-10'>
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
              Add Employment Profile
            </Link>
            <a href="https://linkedhawk.frill.co/roadmap">RoadMap</a>
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