import { useContext,useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TweetContext } from "../../context/TweetContext";

import TweetBox from "./Components/TweetBox";
import TweetFeedTile from "./Components/TweetFeedTile";

function ContentBar() {
  const {logout,userName}  = useContext(AuthContext);
  const {posts,editPost,deletePost,toggleLike} = useContext(TweetContext);
  const sortedList = useMemo(()=>{
   return posts.sort((ele1,ele2)=>{
      let date1 = new Date(ele1.createdOn);
      let date2 = new Date(ele2.createdOn);
      return date2 - date1;//sort most recent tweet to top
    });
  },[posts]);
  return (
    <main className=' pt-6 bg-background h-screen overflow-y-scroll scroolbar-hidden border-r border-slate-500'>
      <p className='text-white text-xl font-semibold px-2'>Home</p>
      <TweetBox/>
      {
        posts.map(post=>{
          return( 
          <TweetFeedTile
            key={post.postID}
            authorName={post.postAuthor}
            message = {post.contents}
            createdOn = {post.createdOn}
            likeCount = {post.likes.length}
            isLikedByCurrentUser = {post.likes.includes(userName)}
            onPostEdited = {(msg)=>editPost(post.postID,msg)}
            onDeleteButtonPress = {()=>deletePost(post.postID)}
            onLikeButtonPressed = {()=>toggleLike(post.postID,userName)}
          />
          )
        })
      } 
    
    </main>
  )
}

export default ContentBar