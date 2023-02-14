import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { dummytweets } from "../data/dummyTweets";
const TweetContext = createContext({});

function TweetProvider({children}){
    const [posts,storePost]  = useLocalStorage({key:"posts",initialValue:dummytweets});

    function createPost({author,message}){
       
        storePost(prev=>[...prev,{
            "postID":Date.now(),
            "contents":message.trim(),
            "postAuthor":author,
            "createdOn":new Date().toISOString(),
            "updatedOn":0,
            "likes":[]
        }]);
    }

    function editPost(postId,message){
   
       const editedPost =  posts.map(post=>{
            if(post.postID === postId){
                return {
                        ...post,
                        "contents":message.trim(),
                        "updatedOn":new Date().toISOString()
                    }
                
            }
            return post;
        });
        storePost(editedPost);
    }

    function deletePost(postId){
        const filterdPosts = posts.filter(post=>post.postID!=postId);
        storePost(filterdPosts);
    }
    
    function toggleLike(postId,userName){
        const editedPost =  posts.map(post=>{
            if(post.postID === postId){
                const temp = new Set(post.likes);
                temp.has(userName)?temp.delete(userName):temp.add(userName);
                return {
                        ...post,
                        "likes":Array.from(temp),
                    }
                
            }
            return post;
        });
      
        storePost(editedPost);
    }

    return (
        <TweetContext.Provider value = {{posts,createPost,editPost,deletePost,toggleLike}}>
            {children}
        </TweetContext.Provider>
    );

}



export {TweetContext,TweetProvider};


/*
[{
    postID: '', // a unique post ID
    contents: '', // contents of the post
    postAuthor: '', // username of the author of the post
    createdOn: 0, // a unix timestamp (stored in seconds) of the time it was created
    updatedOn: 0, // a unix timestamp (stored in seconds) of time it was updated
}]
*/