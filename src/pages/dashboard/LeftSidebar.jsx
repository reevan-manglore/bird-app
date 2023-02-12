import {useContext} from 'react'

import { AuthContext } from '../../context/AuthContext';

import { AiOutlineTwitter, AiOutlineHome, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { BiHash, BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";



import ActionTabs from './Components/ActionTabs';

function LeftSidebar() {
  const {userName,logout} = useContext(AuthContext);
  return (
    <aside className='bg-background flex flex-col justify-between relative  w-fit max-w-[225px]  pt-4 pb-1 border-r border-slate-600 max-h-screen overflow-y-auto '>
      <nav className='flex flex-col px-3 '>
        <AiOutlineTwitter className="text-4xl text-white ml-3 mb-3 " />
        <ActionTabs Icon={AiOutlineHome} title="Home" />
        <ActionTabs Icon={BiHash} title="Explore" />
        <ActionTabs Icon={AiOutlineBell} title="Notifications" />
        <ActionTabs Icon={AiOutlineMail} title="Messages" />
        <ActionTabs Icon={BsPerson} title="Profile" />
        <ActionTabs Icon={BiDotsHorizontalRounded} title="More" />
        <button type='button' className='mt-4 py-2 px-6 w-full text-white  text-xl rounded-full bg-primary active:scale-95 transition-transform'>Tweet</button>
      </nav>
      <div className='flex flex-col p-3 bg-card  '>
        <div className='flex items-center flex-nowrap  space-x-1'>
         <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`} alt = "avatar"  />
         <p className='text-white text-lg font-semibold overflow-hidden text-ellipsis  max-w-[12rem] '>@{userName}</p>
        </div>
        <button 
        type='button' 
        className='px-2 py-1 mt-3 rounded-full bg-red-400 text-white active:scale-95 transition-transform'
        // onClick = {logout}
        >
          Logout
        </button>
      </div>

    </aside>
  )
}

export default LeftSidebar