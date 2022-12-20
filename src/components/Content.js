import "./content.css";
import axios from "axios";
import React  from "react";
import { useEffect ,useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SinglePost from './SinglePost';
import { PostContext } from "../context/PostContext";




const Content = () => {
  const { token } = useContext(AuthContext);
  const {addPosts, posts} =useContext(PostContext)
  const [counter,setCounter]=useState(1)
    
    useEffect(()=>{
      const getPosts = async ( ) => {
        const response = await fetch(
          `http://ferasjobeir.com/api/posts?page=${counter}`,
          {
            method: "get",
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
        const json = await response.json();
    
        addPosts(json.data.data)
       
      };
      
      
      getPosts()
      
    },[counter])
  // console.log(posts)
    
   
 // posts.map((post, i) => {
   
    return(
    
   <div className="conten">
    {
      posts.map((post, i) => (
      
        <SinglePost post={post}/>
      ))
    }

    <button onClick={()=>setCounter(counter+1)}>clik</button>
       
   </div>

    )
  }
    
export default Content