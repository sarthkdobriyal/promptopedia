'use client'
import React, { useState } from 'react'
import Form from '../../components/Form'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreatePrompt = () => {

  const router = useRouter();
  const { data: session } = useSession();

    const [prompt, setPrompt] = useState({
        prompt: "",
        tag: ""
    })
    const [submitting, setSubmitting] = useState(false)

    const createPrompt = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      try{
        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            prompt: prompt.prompt,
            userId: session?.user.id,
            tag:prompt.tag
          })
        })
        if(response.ok){
          router.push("/");
        }

      }catch(err){
        console.log(err)
      }finally{
        setSubmitting(false)
      }
      
      setPrompt({
        prompt: "",
        tag: ""
      });
    }


  return (   
    <Form 
    type="Create"
    handleSubmit={createPrompt}
    prompt={prompt}
    setPrompt={setPrompt}       
    submitting={submitting}
  />
  )
}

export default CreatePrompt
