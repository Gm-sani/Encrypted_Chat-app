import React, { useState } from 'react'
import "./mystyle.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Others_msg from './Others_msg';
import Self_msg from './Self_msg';
import { useSelector } from "react-redux";

export default function Chatarea() {
  
  const LightMode = useSelector((state) => state.themekey);
  const [conversations , setConversations] =useState ([
    {
    name:"Nest1",
    lastmsg:"Lastmsg-1",
    timestamp:"today1",
  },
  {
    name:"Test2",
    lastmsg:"Lastmsg-2",
    timestamp:"today2",
  },
  {
    name:"Test3",
    lastmsg:"Lastmsg-3",
    timestamp:"today3",
  },
]);
var props = conversations[0];
  return (
    <div className='flex-[0.7] flex flex-col max-[425px]:flex-1'>
    {/*----------------------------------------------ChatArea Header---------------------------------------- */}
      <div className={LightMode ? "chatarea-header bg-white flex items-center gap-3 p-3 m-3 rounded-3xl shadow-md shadow-slate-500" : "bg-slate-800 flex items-center gap-3 p-3 m-3  rounded-3xl shadow-md shadow-slate-500 "}>
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text flex flex-col justify-center flex-1">
        <p className={LightMode ? "con-title" : "con-title-toggle"}>{props.name}</p>
        <p className={LightMode ? "con-timestamp" : "con-timestamp-toggle"}>{props.timestamp}</p>
        </div>
        <IconButton>
        <DeleteIcon className={"" + (LightMode ? "" : "text-white")}/>
        </IconButton>    
      </div>

    {/*----------------------------------------------ChatArea msg ccontainer---------------------------------------------- */}
      <div className={LightMode ? "message-container bg-white flex-1 m-2 p-1 rounded-3xl overflow-auto shadow-md shadow-slate-500" : "message-container bg-slate-800 flex-1 m-2 p-1 rounded-3xl overflow-auto shadow-md shadow-slate-500"}>
        <Others_msg/>
        <Self_msg/>
        <Others_msg/>
        <Self_msg/>
        <Others_msg/>
        <Self_msg/>
        <Others_msg/>
        <Self_msg/>
      </div>



      <div className={LightMode ? "text-input-area bg-white p-[10px] m-[10px] rounded-3xl flex  justify-between shadow-md shadow-slate-500" : "text-input-area bg-slate-800 p-[10px] m-[10px] rounded-3xl flex  justify-between shadow-md shadow-slate-500 "}>
    <input placeholder='Type a messaage' className={LightMode ? 'border-none outline-0 font-[1.25rem] ml-3' : 'border-none outline-0 font-[1.25rem] ml-3 bg-slate-800'}/>
      <IconButton>
    <SendIcon className={"" + (LightMode ? "" : "text-white")}/>
    </IconButton>
      </div>

    </div>
  )
}
