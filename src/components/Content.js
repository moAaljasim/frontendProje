import classes from "./content.css";
import axios from "axios";
import React  from "react";
import { useEffect ,useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";




const Content = () => {
  const { token } = useContext(AuthContext);
    const [posts,setposts]= useState([]) 
    
    useEffect(()=>{
      const getPosts = async ( ) => {
        const response = await fetch(
          `http://ferasjobeir.com/api/posts`,
          {
            method: "get",
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
        const json = await response.json();
    
        setposts([...posts, ...json.data.data]);
      };
      
      
      getPosts()
      
    },[])
   console.log(posts)
    
   
 // posts.map((post, i) => {
   
    return(
    
   <div className="conten">
    {
      posts.map((post, i) => (
        <div key={post.id} className="post">
            <img src={post?.user?.avatar}/>
            <div className="postdetailes">
                <h5>{post.user.name}</h5>
                <p>{post.content}</p>
                <h6>{post.created_at}</h6>
               
                <div className="comendet">
                  
                  <div className="coment">
                    <span class="material-symbols-outlined">favorite</span>
                    <p>{post.likes_count}</p>
                    </div>
                  <div className="like"><span class="material-symbols-outlined">mode_comment</span>
                  <p>{post.comments_count}</p></div>
                    

                </div>
            </div>
          {/* <h2>{posts.content}</h2> */}
      </div>
      ))
    }
       
   </div>

    )
  }
    
export default Content