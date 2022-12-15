import { createContext, useState } from "react";

export const PostContext = createContext()

const PostManager = ({children}) => {
    const[posts, setPosts]=useState([])
      


    const addPosts = (newPost)=>{
        setPosts([...posts, ...newPost ])
    }

    const addPost =(newPost)=>{
      setPosts([newPost, ...posts])
      
    }




    return (
        <PostContext.Provider value={{
            posts,
            addPost,
            addPosts
        }}>
            {children}
        </PostContext.Provider>
    )
}
export default PostManager