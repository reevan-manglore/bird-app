import { useState, useRef, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { AiFillEdit, AiFillDelete, AiOutlineSave, AiOutlineClose } from "react-icons/ai";
import { BsChat, BsArrowRepeat, BsHeart, BsHeartFill } from "react-icons/bs";
import { IoShareOutline } from "react-icons/io5";

import { formatTimeAgo } from '../../../utils/formatTimeAgo';

function TweetFeedTile({ authorName, message, createdOn, likeCount, isLikedByCurrentUser, onPostEdited, onDeleteButtonPress, onLikeButtonPressed }) {
    const [editPostChecked, setEditPost] = useState(false);
    const messageBoxRef = useRef();
    const { userName } = useContext(AuthContext);
    function whenPostEditSaved() {
        onPostEdited(messageBoxRef.current.value);
        setEditPost(false);
    }

    return (
        <article className="
                    p-2 bg-card 
                    border-b border-slate-500
                    flex flex-col space-y-4
                   "
        >
            <div className=' flex items-start space-x-2'>
                <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${authorName}&backgroundColor=1CF2B5&size=32&radius=50&textColor=000000`} />
                <div aria-describedby='message information' className='w-full'>
                    <div className='flex justify-between  '>
                        <div className=' flex items-center space-x-3'>
                            <p className='text-white font-semibold'>{authorName}</p>
                            <p className='text-slate-400 text-sm '>@{authorName}</p>
                            <p className='text-slate-400 text-sm '>{formatTimeAgo(createdOn)}</p>
                        </div>
                        {authorName == userName ?
                            <div>
                                {!editPostChecked ?
                                    <div className='flex space-x-4 mr-4 ml-auto'>
                                        <button
                                            className='text-white text-lg hover:text-yellow-400'
                                            onClick={() => setEditPost(prev => !prev)}
                                        >
                                            <AiFillEdit />
                                        </button>
                                        <button
                                            className='text-white text-lg hover:text-red-400'
                                            onClick={onDeleteButtonPress}
                                        >
                                            <AiFillDelete />
                                        </button>
                                    </div>

                                    :

                                    <div className='flex space-x-4 mr-4 ml-auto'>
                                        <button
                                            className='text-white text-lg hover:text-green-400'
                                            onClick={whenPostEditSaved}
                                        >
                                            <AiOutlineSave />
                                        </button>
                                        <button
                                            className='text-white text-lg hover:text-red-400'
                                            onClick={() => setEditPost(prev => !prev)}
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                }
                            </div>
                            :
                            ""
                        }
                    </div>

                    <div className='text-white '>
                        {
                            editPostChecked ? <textarea
                                name="tweetMessage"
                                id="tweetMessage"
                                cols="500"
                                rows="4"
                                placeholder="Whats happening"
                                ref={messageBoxRef}
                                className="bg-transparent text-white w-full p-2 block
                                       outline-none border-none  ring ring-transparent focus:ring-primary
                                       rounded-sm resize-none
                                       "

                            >
                                {message}
                            </textarea>
                                : message.split( /([#@]\w+)/g).map(itm=>{
                                    if(itm.startsWith("#") || itm.startsWith("@")){
                                        return <span className='text-primary-500'>{itm}</span>
                                    }
                                    return itm;
                                })
                        }
                    </div>
                </div>
            </div>

            <div className='flex justify-around'>

                <div className='flex items-center space-x-2'>
                    <BsChat className="text-slate-200" />
                    <p className='text text-slate-400'>0</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <BsArrowRepeat className="text-slate-200" />
                    <p className='text text-slate-400'>0</p>
                </div>

                <button
                    type='button'
                    className='flex items-center space-x-2 group'
                    onClick={onLikeButtonPressed}
                >
                    {isLikedByCurrentUser ? <BsHeartFill className="text-red-500" /> : <BsHeart className="text-slate-200 group-hover:text-red-500" />}
                    <p className={` ${isLikedByCurrentUser ? "text-red-500" : "text-slate-400"} group-hover:text-red-500`}>{likeCount ?? 0}</p>
                </button>

                <div className='flex items-center space-x-2'>
                    <IoShareOutline className="text-slate-200" />
                    <p className=' text-slate-400'>0</p>
                </div>

            </div>
        </article>
    )
}

export default TweetFeedTile