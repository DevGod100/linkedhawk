"use client"

import {useEffect, useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const EditEprofile = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const eprofileId = searchParams.get('id')
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(()=> {
    const getEprofileDetails = async() => {
        const response = await fetch(`/api/prompt/${eprofileId}`)
        const data = await response.json();

        setPost({
            ename: data.ename,
            language: data.language,
            proffesion: data.proffesion,
            location: data.location,
            salary: data.salary,
        })
    }
     if(eprofileId)getEprofileDetails();
    },[eprofileId])

    const updatePrompt = async(e) => {
    e.preventDefault();
    setSubmitting(true)

    if(!eprofileId) return alert('no prompId found')

    try {
        const response = await fetch (`/api/prompt/${eprofileId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            ename: post.ename,
            language: post.language,
            proffesion: post.proffesion,
            location: post.location,
            salary: post.salary,
          })
        })

        if(response.ok){
            router.push('/')
        }
    } catch (error) {
        console.log('tzvi, POST API failed for updating eprofile:'+ error);
    }
        finally {
            setSubmitting(false)
        }
    }

  return (
    <Form 
    type="Edit"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={updatePrompt}
    />
  )
}

export default EditEprofile