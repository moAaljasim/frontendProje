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

    const editPost =(newPost)=> {
        const newPosts = [...posts]
        const index = newPosts.findIndex(item => item.id == newPost.id)
        newPosts[index] = newPost
        setPosts(newPosts)
      }




    return (
        <PostContext.Provider value={{
            posts,
            addPost,
            addPosts,
            editPost
        }}>
            {children}
        </PostContext.Provider>
    )
}
export default PostManager