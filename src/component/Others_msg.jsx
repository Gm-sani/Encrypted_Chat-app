import React from 'react'

import { useSelector } from "react-redux";
export default function Others_msg() {
  
  const LightMode = useSelector((state) => state.themekey);
    var props1 ={name:"Gmsani",msg:"Hello from Gmsani",}
  return (
    <div className='Others-msg '>
      <div className="conversation-container ">
      <p className='con-icon'>{props1.name[0]}</p>
      <div className={LightMode ? "other-text-content flex flex-col bg-purple-400 p-3 m-3 rounded-3xl font-serif w-max shadow-md shadow-slate-700 ": " flex flex-col bg-purple-800 p-3 m-3 rounded-3xl font-serif w-max shadow-md shadow-slate-300"}>
      <p className={LightMode ? 'con-title' :'con-title-toggle' }>{props1.name}</p>
      <p className={LightMode ? 'con-lastmsg' : 'con-lastmsg-toggle'}>{props1.msg}</p>
      <p className={LightMode ? 'self-timestamp flex justify-end font-serif font-thin text-xs' : 'text-white flex justify-end font-serif font-thin text-xs'}>12:00pm</p>
      </div>
      </div>
    </div>
  )
}
