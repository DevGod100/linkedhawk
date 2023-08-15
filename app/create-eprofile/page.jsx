"use client"

import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import EprofileSteps from '@components/multi-step-form/EprofileSteps';


const CreateEprofile = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        ename: '',
        language: '',
        profession: '',
        location: '',
        salary: '',
    });

    const CreateEprofile = async(e) => {
    e.preventDefault();
    setSubmitting(true)

    try {
        const response = await fetch ('/api/prompt/new', {
            method: 'POST',
            body: JSON.stringify({
                userId: session?.user.id,
                ename: post.ename,
                tag: post.tag,
                language: post.language,
                profession: post.profession,
                location: post.location,
                salary: post.salary,
              })
            })

        if(response.ok){
            router.push('/')
        }
    } catch (error) {
        console.log('tzvi, POST API failed for adding new eprofile:'+ error);
    }
        finally {
            setSubmitting(false)
        }
    }

  return (
<EprofileSteps
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={CreateEprofile}
    />
  )
}

export default CreateEprofile