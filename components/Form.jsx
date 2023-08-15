'use client'

import React from 'react'
import Link from 'next/link'

import Select from 'react-select';


import { listOfLanguages, listOfProfessions, listOfLocations } from '@utils/arrays'; // Import the array of languages

import { useEffect, useRef, useState } from 'react';

 function focusOnRender() {
   const enameRef = useRef(null);
 
   useEffect(() => {
     enameRef.current.focus();
   }, []);
   return enameRef;
  }

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  
  const enameRef = focusOnRender();

  const languageRef = useRef(null);
  const professionRef = useRef(null);
  const locationRef = useRef(null);
  const salaryRef = useRef(null);
  
  const handleKeyDown = (e, ref) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ref.current.focus();
    }
  };
  
   //Scroll to middle of element clicked
  function scrollToMiddle(e) {
    const inputRect = e.target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const inputTop = inputRect.top + scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollMiddle = inputTop - (windowHeight / 2);
    window.scrollTo({ top: scrollMiddle, behavior: 'smooth' });
  }

  //React-select Language options
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    setPost({ ...post, language: selectedOption.value });
  };

  //React-select profession options
  const [selectedProfession, setSelectedProfession] = useState(null);

  const handleProfessionSelect = (selectedOption) => {
    setSelectedProfession(selectedOption);
    setPost({ ...post, profession: selectedOption.value });
  };

    //React-select profession options
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationSelect = (selectedOption) => {
      setSelectedLocation(selectedOption);
      setPost({ ...post, location: selectedOption.value });
    };

  return (
    <section className='w-full max-w-full flex-start flex-col px-5 pb-10'>
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
          onChange={(e) => {
            const capitalizedValue = e.target.value.replace(/\b\w/g, (char) => char.toUpperCase());
            setPost({ ...post, ename: capitalizedValue });
          }}

          placeholder='Write your name here...'
          required
          className='form_input '

          ref={enameRef}   //auto focus on textarea on render of page 
          onKeyDown={(e) => handleKeyDown(e, languageRef)}
          onFocus={scrollToMiddle}
          >
          </input>
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Language</span>
          <Select
          value={selectedLanguage}
          options={listOfLanguages} 
          onChange={handleLanguageSelect}

          placeholder='English...'
          required

          ref={languageRef}
          onKeyDown={(e) => handleKeyDown(e, professionRef)}
          onFocus={scrollToMiddle}
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Profession</span>
          <Select
          value={selectedProfession}
          options={listOfProfessions} 
          onChange={handleProfessionSelect}

          placeholder='Data Engineer...'
          required

          ref={professionRef}
          onKeyDown={(e) => handleKeyDown(e, locationRef)}
          onFocus={scrollToMiddle}
          />
        </label>


        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Location</span>

          <Select
          value={selectedLocation}
          options={listOfLocations} 
          onChange={handleLocationSelect}

          placeholder='San Fransisco...'
          required
         
          ref={locationRef}
          onKeyDown={(e) => handleKeyDown(e, salaryRef)}
          onFocus={scrollToMiddle}

          />
        </label>


        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Salary (yearly)</span>

          <input
          id='input5'
          value={`$${post.salary ? post.salary.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}`}
          onChange={(e) => {
            const formattedSalary = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            setPost({ ...post, salary: formattedSalary });
          }}
          placeholder='$80,000'
          required
          className='form_input capitalize'

          ref={salaryRef}
          onFocus={scrollToMiddle}
          />
        </label>

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

//Old Input Below
{/* <input
id='input4'
value={post.location}
onChange={(e) => setPost({...post, location: e.target.value})}
placeholder='San Fransisco...'
required
className='form_input capitalize'
onKeyDown={(e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.querySelector("#input5").focus();
  }
}}
onFocus={scrollToMiddle}
/> */}