'use client'

import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const MyProfile = () => {

    const {data: session } = useSession();
    const router = useRouter();

    const [prompts, setPrompts] = useState([]);

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }
   
    
    const fetchPrompts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`)
        const data = await response.json();

        setPrompts(data);
    }

    console.log(prompts)
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