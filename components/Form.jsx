'use client'

import React from 'react'
import Link from 'next/link'

 //auto focus on textarea on render of page 
 import { useEffect, useRef, useState } from 'react';

 function focusOnRender() {
   const promptRef = useRef(null);
 
   useEffect(() => {
     promptRef.current.focus();
   }, []);
   return promptRef;
  }

const Form = ({ type, post, setPost, submitting, handleSubmit,}) => {
  const promptRef = focusOnRender();

  function scrollToMiddle(e) {
    const inputRect = e.target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const inputTop = inputRect.top + scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollMiddle = inputTop - (windowHeight / 2);
    window.scrollTo({ top: scrollMiddle, behavior: 'smooth' });
  }

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
      <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} Your employment profile and get hired!
      </p>
      <form 
      onSubmit={handleSubmit}
      className='mt-10 w-full flex flex-col gap-7 glassmorphism max-w-2xl'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your Employment Profile</span>
          <input
          value={post.ename}
          onChange={(e) => setPost({...post, ename: e.target.value})}
          placeholder='Write your name here...'
          required
          className='form_input'
          //auto focus on textarea on render of page 
          ref={promptRef}
          //navigate to tag on enter
          ////////////////////////////
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              document.querySelector("#input2").focus();
            }
          }}
          onFocus={scrollToMiddle}

          //////////////////////////
          >
          </input>
        </label>
       
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Language</span>
          <input
          id='input2'
          value={post.language}
          onChange={(e) => setPost({...post, language: e.target.value})}
          placeholder='English..,'
          required
          className='form_input'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              document.querySelector("#input3").focus();
            }
          }}
          onFocus={scrollToMiddle}
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Proffesion</span>

          <input
          id='input3'
          value={post.proffesion}
          onChange={(e) => setPost({...post, proffesion: e.target.value})}
          placeholder='Backend Developer'
          required
          className='form_input'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              document.querySelector("#input4").focus();
            }
          }}
          onFocus={scrollToMiddle}
          />
        </label>


        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Location</span>

          <input
          id='input4'
          value={post.location}
          onChange={(e) => setPost({...post, location: e.target.value})}
          placeholder='San Fransisco...'
          required
          className='form_input'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              document.querySelector("#input5").focus();
            }
          }}
          onFocus={scrollToMiddle}
          />
        </label>


        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Salary</span>

          <input
          id='input5'
          value={post.salary}
          onChange={(e) => setPost({...post, salary: e.target.value})}
          placeholder='$80,000'
          required
          className='form_input'
          onFocus={scrollToMiddle}
          />
        </label>

{/* delete ABOVE here, it is to test long form functionality */}

        
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
          type='submit'
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-blue rounded-full text-white'
          >
             {submitting ? `${type}...` : type}
          </button>
        </div>

      </form>
    </section>
  )
}

export default Form