import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import Conversation_item from "./Conversation_item";
import "./mystyle.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/Slice";

export default function Sidebar() {
  {
    /*const [LightMode, setLightmode] = useState(true);*/
  }

  const LightMode = useSelector((state) => state.themekey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(useSelector((state) => state.themekey));
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastmsg: "Lastmsg-1",
      timestamp: "today1",
    },
    {
      name: "Test2",
      lastmsg: "Lastmsg-2",
      timestamp: "today2",
    },
    {
      name: "Test3",
      lastmsg: "Lastmsg-3",
      timestamp: "today3",
    },
  ]);
  return (
    <>
      <div className="flex flex-[0.3] flex-col max-[425px]:flex-[0]">
        {/*-------------------------------------------Side bar header ------------------------------------- */}
        <div
          className={
            LightMode
              ? "bg-white flex justify-between rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:flex-col max-[425px]:flex-1  max-[425px]:w-min "
              : "bg-slate-800 flex justify-between rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:flex-col max-[425px]:flex-1  max-[425px]:w-min "
          }
        >
          <div>
            <IconButton>
              <AccountCircleIcon
                className={"" + (LightMode ? "" : "text-white")}
              />
            </IconButton>
          </div>

          <div className="max-[425px]:flex-col">
            <IconButton
              onClick={() => {
                navigate("user");
              }}
            >
              <PersonAddIcon className={"" + (LightMode ? "" : "text-white")} />
            </IconButton>

            <IconButton
              onClick={() => {
                navigate("grp");
              }}
            >
              <GroupAddIcon className={"" + (LightMode ? "" : "text-white")} />
            </IconButton>

            <IconButton
              onClick={() => {
                navigate("creategrp");
              }}
            >
              <AddCircleOutlineIcon
                className={"" + (LightMode ? "" : "text-white")}
              />
            </IconButton>

            <IconButton
              onClick={() => {
                dispatch(toggleTheme());

                {
                  /*setLightmode((preValue) => {
            return !preValue;*/
                }
              }}
            >
              {LightMode && <DarkModeIcon />}
              {!LightMode && (
                <LightModeIcon
                  className={"" + (LightMode ? "" : "text-white")}
                />
              )}
            </IconButton>
          </div>
        </div>
        {/*-------------------------------------------Side bar Search ------------------------------------- */}
        <div
          className={
            LightMode
              ? "side-search bg-white flex items-center  rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:hidden"
              : "side-search bg-slate-800 flex items-center rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:hidden"
          }
        >
          <IconButton>
            <SearchIcon className={"" + (LightMode ? "" : "text-white")} />
          </IconButton>
          <input 
            placeholder="Search"
            className={
              "border-none outline-0" +
              (LightMode ? "" : "text-white bg-slate-800")
            }
          />
        </div>
        {/*-------------------------------------------Side bar Converstion ------------------------------------- */}

        <div
          className={
            LightMode
              ? "sb-conversation bg-white rounded-3xl p-[5px] m-[5px] flex-1 shadow-md shadow-slate-600 max-[425px]:hidden"
              : " bg-slate-800 rounded-3xl p-[5px] m-[5px] flex-1 shadow-md shadow-slate-200 max-[425px]:hidden"
          }
        >
          {conversations.map((convpara) => {
            return <Conversation_item props={convpara} key={convpara.name} />;
          })}
        </div>
      </div>
    </>
  );
}
