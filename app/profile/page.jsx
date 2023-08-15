'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import FullProfile from "@components/FullProfile"


const MyProfile = () => {
  const router = useRouter();
    
    const {data: session} = useSession();

    const [posts, setPosts] = useState([]);
    
    useEffect(()=> {
        const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        console.log(response);
        setPosts(data);
        }
    
        if(session?.user.id) {
          fetchPosts();
        }
      },[session]);


    const handleEdit = (post) => {
     router.push(`/update-eprofile?id=${post._id}`);
    }

    const handleDelete = async (post) => {
       const confirmDelete = confirm('Are you sure you want to delete this Eprofile?')

       if(confirmDelete){
        try {
          await fetch(`/api/prompt/${post._id.toString()}`,
          {
            method: 'DELETE'
          })

          const filteredPosts = posts.filter((p) => p._id !== post._id);
          
          setPosts(filteredPosts)
        } catch (error) {
          console.log(error)
        }
       }
    }

  return (
    <FullProfile 
    name='My Employment'
    desc='Welcome to your Personalized profile page'
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile