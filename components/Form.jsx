import Link from 'next/link'
import React from 'react'

const Form = ({ type, handleSubmit, prompt, setPrompt,submitting }) => {
  return (
    <section className='w-full max-w-full md:w-[60%]'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 font-satoshi'>
      <span className='font-bold text-4xl md:text6xl my-4 blue_gradient'>{type} an AI Prompt</span>

      <label htmlFor="prompt" className='font-semibold '>Your AI prompt: </label>
      
      <textarea name="prompt" id="prompt" cols="30" rows="7" placholder="Type or paste your prompt here..." className='rounded-lg bg-slate-400 text-white outline-none p-5 text-xl' 
        value={prompt.prompt}
        required
        onChange={(e) => setPrompt((prev) => ({
          ...prev,
          prompt: e.target.value
        }) )}
        ></textarea>
        
      <label  className='font-semibold '>Tag <span className='font-thin'>


        (design, webdevelopment, idea):

      </span>
      </label>
      <input type="text" placeholder='#Tag'
            required className='py-3 px-5 rounded-lg bg-slate-400 text-white outline-none text-xl  ' value={prompt.tag} onChange={(e) => setPrompt((prev) => ({
              ...prev,
              tag: e.target.value
            }))} />

         
      <div className='flex flex-end mb-5 gap-4'>
        <Link href="/"
          className='hover:bg-slate-300 px-3 py-2 rounded-lg active:translate-y-2'
        >
          Cancel
        </Link>
        <button
          type="submit"
          className='bg-blue-500 hover:bg-slate-700 text-white px-3 py-2 rounded-lg active:translate-y-2'
          disabled={submitting}
        >
           {submitting ? `Working on it..` : type}
        </button>
      </div>


    </form>

    </section>


  )
}

export default Form