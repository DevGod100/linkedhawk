'use client'
import { useState, useEffect } from 'react'

import Select from 'react-select';
import { selectStylesAndTheme} from '@utils/reactselectcolors'

import { listOfLanguages, listOfProfessions, listOfLocations } from '@utils/arrays';
import UploadImageV1 from './UploadThingBtn'; //--------UploadThing Trial

const EprofileSteps = ({ post, setPost, submitting, handleSubmit}) => {

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


    const [page, setPage] = useState(0)
    const FormTitles = ['Name', 'Language', 'Location', 'Profession', 'Salary'] 

    useEffect(() => {
        // Get the progress indicator element
        const progressIndicator = document.getElementById('progress_indicator');
    
        // Get the total number of pages
        const totalPages = FormTitles.length; // Replace with the actual total number of pages
    
        // Calculate the width as a percentage
        const widthPercentage = ((page + 1) / totalPages) * 100;
    
        // Set the width of the progress indicator
        progressIndicator.style.width = `${widthPercentage}%`;
      }, [page]);

  return (
    <div className='flex'>
      
    <div className="h-screen w-64 bg-blue-900 overflow-y-auto ">
    <div className="flex flex-col flex-start">
  {FormTitles.map((title, index) => (
    <button
      key={index}
      className={`${
        page === index ? 'text-white border-b ' : ' text-gray-400'
      } p-2 m-2 smooth_trans_1s `}
      onClick={() => setPage(index)}
    >
      {title} 
    </button>
  ))}
</div>
    </div>
    <div className="multi_step_form">
      

        <div className='flex items-center justify-center'>
            <div className="progress_bar">
               <div className='h-full bg-blue-900 smooth_trans_3s' id="progress_indicator"></div>
            </div>
        </div>


        <div className="multi_step_footer">
        <button className='flex items-center step_nav_btn' disabled={page === 0} onClick={() => {setPage((currPage) => currPage - 1)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" /></svg>Prev</button>

        <button className='flex items-center step_nav_btn' disabled={page === FormTitles.length - 1} onClick={() => {setPage((currPage) => currPage + 1)}}>Next <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg></button>
        </div>

        
<div className=' h-[60%] mx-48 '>
        <form onSubmit={handleSubmit} className="multi_step_body ">
        {/* <UploadImageV1 /> */}
          {page === 0 && 
          <div>
          
          <input
          ariaLabel='Full Name'
          value={post.ename}
          onChange={(e) => {
            const capitalizedValue = e.target.value.replace(/\b\w/g, (char) => char.toUpperCase());
            setPost({ ...post, ename: capitalizedValue });
          }}

          placeholder='Write your name here...'
          required 
          className='step_form_input fade-in'
          >
          </input>
          </div>
          }
          {page === 1 && 
          <div className='select_form_input fade-in'
          >
          <Select
          value={selectedLanguage}
          options={listOfLanguages} 
          onChange={handleLanguageSelect}
          
          styles={selectStylesAndTheme}

          placeholder='English...'
          required
        />
         </div>
        }
          {page === 2 && 
          <div className='select_form_input fade-in'
          >
          <Select
          value={selectedProfession}
          options={listOfProfessions} 
          onChange={handleProfessionSelect}

          placeholder='Data Engineer...'
          required
          />
         </div>

        }

         {page === 3 && 
         <div className='select_form_input fade-in'
         >
          <Select
          value={selectedLocation}
          options={listOfLocations} 
          onChange={handleLocationSelect}

          placeholder='San Fransisco...'
          required
          />
         </div>

        }
        {page === 4 && 
         <input
         value={`$${post.salary ? post.salary.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}`}
         onChange={(e) => {
           const formattedSalary = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
           setPost({ ...post, salary: formattedSalary });
         }}
         placeholder='$80,000'
         required
         className='step_form_input'
          >
            </input>
        }
       <div className='bg-blue-900 absolute right-0 bottom-0 mx-3 mb-5'>
          <button
          type='submit'
          disabled={submitting}
          className='px-10 py-3 text-md bg-blue-900 rounded-3xl hover:rounded-sm  text-white'
          >
             {submitting ? `Saving...` : 'Save & Exit'}
          </button>
        </div>
        </form>
        </div>


    </div>
    </div>
  )
}

export default EprofileSteps