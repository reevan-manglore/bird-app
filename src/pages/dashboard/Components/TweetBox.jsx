import { useState } from "react";
import {AiOutlineTwitter} from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { TweetContext } from "../../../context/TweetContext";

function TweetBox() {
const {userName} = useContext(AuthContext);
const {createPost} = useContext(TweetContext);
const [postMessage,setPostMessage] = useState("");

function onButtonClick(){
  createPost({"author":userName,"message":postMessage});
  setPostMessage("");
}
  return (
    <div className='flex flex-col justify-start items-start  mt-2 border-b border-slate-500 px-2 py-4 '>
         <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50&textColor=000000`} alt = "avatar"  />
         <div className="flex flex-col   mt-2 ">
            <textarea 
            name="tweetMessage" 
            id="tweetMessage"
            cols="500" 
            rows="4"
            placeholder="Whats happening"
            className="bg-transparent text-white  w-full p-2 block
                       outline-none border-b border-slate-500 ring-2 ring-transparent focus:ring-primary
                       rounded-sm resize-none
                       "   
            value={postMessage}
            onChange = {(e)=>setPostMessage(e.target.value)}
            >
            
            </textarea>
            <button 
            type="button" 
            className={`bg-primary px-8 py-1.5 w-fit text-white disabled:text-gray-600 ml-auto mt-3
                         rounded-full active:scale-95 disabled:scale-100 transition-transform disabled:bg-primary-800`
                      }
            disabled = {postMessage.trim().length<1}
            onClick = {onButtonClick}
            >
              Tweet
            </button>
         </div>
    </div>
  )
}

export default TweetBox