import React from 'react'
import Meagle from './Meagle.png'

export default function Welcome() {
  return (
    <div className='flex-[0.7] bg-white- flex flex-col justify-center items-center gap-5 font-serif rounded-3xl border-b-4 border-slate-600 max-[425px]:flex-1 '>
      <img src={Meagle} alt="" className='' />
    <p>View and Text directly to people present in the chat room </p>
    </div>
  )
}
