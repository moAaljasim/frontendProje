import "./content.css";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {FcLikePlaceholder, FcLike} from 'react-icons/fc'
import {BiComment} from 'react-icons/bi'
import Comment from "./Comment";
const SinglePost = ({ post }) => {
  const [like, setlike] = useState("");
  const { token } = useContext(AuthContext);



  const likecoun = async (post_id) => {
    const response = await fetch(`http://ferasjobeir.com/api/posts/${post.liked_by_current_user ? "unlike" : "like" } `, {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post_id 
      }),
    });
    const json = await response.json()
  
    setlike(json)
    alert(json.messages)
    
     
  
  };
 
  return (
    <div key={post.id} className="post">
      <img src={post?.user?.avatar} />
      <div className="postdetailes">
        <h5>{post.user.name}</h5>
        <p>{post.content}</p>
        <h6>{post.created_at}</h6>

        <div className="comendet">
          <div onClick={ ()=>likecoun(post.id)}   className="coment">
            {!post.liked_by_current_user?<FcLikePlaceholder/> :<FcLike/>}
            <p>{post.likes_count} </p>
          </div>
          <div className="like">
            <BiComment/>
            <p>{post.comments_count}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePost;
