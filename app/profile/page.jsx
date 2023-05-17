'use client'

import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const MyProfile = () => {

  const { data: session } = useSession();
  const router = useRouter();

  const [prompts, setPrompts] = useState([]);

  const handleEdit = (post) => {
    router.push('/update-prompt?id=${post._id}')
  }

  const handleDelete = async (post) => {
    const confirmed = confirm("Do you really want to delete this prompt. You won't be able to undo")
    if (confirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });


        const filteredPosts = myPosts.filter((item) => item._id !== post._id);
        
        setPrompts(filteredPosts);



      } catch (err) {
        console.log(err)
      }

    }
  }


  const fetchPrompts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`)
    const data = await response.json();

    setPrompts(data);
  }

  // console.log(prompts)
  useEffect(() => {
    if (session?.user.id) fetchPrompts();
  }, [session?.user.id])



  return (
    <>

      <Profile
        name="My"
        desc="Welcome to your Profile page. All your prompts can be manipulated here"
        data={prompts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default MyProfile