import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsChat,BsArrowRepeat,BsHeart,BsHeartFill} from "react-icons/bs";
import { IoShareOutline} from "react-icons/io5";

function TweetFeedTile({ userName, profilePhoto, message, }) {
    return (
        <article className="
                    p-2 bg-card 
                    border-b border-slate-500
                    flex flex-col space-y-4
                   "
        >
            <div className=' flex items-start space-x-2'>
                <img src={profilePhoto} alt="avatar" />
                <div aria-describedby='message information'>
                    <div className='flex justify-between'>
                        <div className=' flex items-center space-x-3'>
                            <p className='text-white font-semibold'>{userName}</p>
                            <p className='text-slate-400 text-sm '>@{userName}</p>
                            <p className='text-slate-400 text-sm '>19h ago</p>
                        </div>
                        <div className='flex space-x-4 mr-4'>
                            <button className='text-white text-lg hover:text-yellow-400'>
                                <AiFillEdit />
                            </button>
                            <button className='text-white text-lg hover:text-red-400'>
                                <AiFillDelete />
                            </button>
                        </div>
                    </div>

                    <div className='text-white '>
                        {message}
                    </div>
                </div>
            </div>

            <div className='flex justify-around'>

                <div className='flex items-center space-x-2'>
                    <BsChat className = "text-slate-200"/>
                    <p className='text text-slate-400'>0</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <BsArrowRepeat className = "text-slate-200"/>
                    <p className='text text-slate-400'>0</p>
                </div>

                <button 
                    type='button'
                    className='flex items-center space-x-2 group'
                >
                    <BsHeart className = "text-slate-200 group-hover:text-red-500"/>
                    <p className='text text-slate-400 group-hover:text-red-500'>0</p>
                </button>

                <div className='flex items-center space-x-2'>
                    <IoShareOutline className = "text-slate-200"/>
                    <p className=' text-slate-400'>0</p>
                </div>

            </div>

        </article>
    )
}

export default TweetFeedTile