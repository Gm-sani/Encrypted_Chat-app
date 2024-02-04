import React from 'react'

import { useSelector } from "react-redux";
export default function Self_msg() {
    var props2 ={name:"Me",msg:"Hello from me",}
    
  const LightMode = useSelector((state) => state.themekey);
  return (
    <div className='self-msg-container flex justify-end'>
      <div className={LightMode ? "msgbox flex flex-col bg-green-200 p-3 m-3 rounded-3xl font-serif w-max shadow-md shadow-slate-700" : "msgbox flex flex-col bg-green-800 p-3 m-3 rounded-3xl font-serif w-max shadow-md shadow-slate-300"}>
      <p className={LightMode ? 'text-black' : 'text-white'}>{props2.msg}</p>
      <p className={LightMode ? "self-timestamp flex justify-end font-serif font-thin text-xs" : "text-white flex justify-end font-serif font-thin text-xs"}>12:00pm</p>
      </div>
      
    </div>
  )
}
