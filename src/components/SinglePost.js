import "./content.css";
import { useEffect, useState, useContext ,useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiComment } from "react-icons/bi";
import hdate from 'human-date'


const SinglePost = ({ post }) => {
  const [like, setlike] = useState("");
  const { token } = useContext(AuthContext);
  const { editPost } = useContext(PostContext);
  const [details, setDetails] = useState([]);
  const [openComment, setopenComment] = useState(false);
  const newCom = useRef();
  const likecoun = async (post_id) => {
    const response = await fetch(
      `http://ferasjobeir.com/api/posts/${post.liked_by_current_user ? "unlike" : "like"
      } `,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post_id,
        }),
      }
    );
    const json = await response.json();

    if(json.success){
      editPost(json.data)
    }

  };

  const commDetails = async (post_id) => {
    const respo = await fetch(`http://ferasjobeir.com/api/posts/${post_id}`, {
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await respo.json();

    // console.log(json.data.comments)
    setDetails(json.data.comments);
    // console.log(details)
  };


// ----------------------new--------------------
const newComment = async () => {
  const res = await fetch(`http://ferasjobeir.com/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content: newCom.current.value,
      post_id:post.id
    }),
  });
  const json = await res.json();

  console.log(json, "this is json");
  if (json.success) {
    console.log(json.messages);
    const Ndata = [ ...details,json.data];
    newCom.current.value = " ";
    setDetails(Ndata);
  } else {
    console.log(json);
    alert(json.messages);
  }
 
};

// --------------------------------------------------
  const handleclik = () => {
    setopenComment(true);
    commDetails(post.id);
  };

  // const [newContent , setNewContent] = useState({
  //   content :""
  // })
  // const hundleOnChange = (e) =>{
  //   setNewContent(e.targetvalue)
  // }
  // console.log(newContent)

  return (
    <div key={post.id} className="post">
      <img src={post.user.avatar} />
      <div className="postdetailes">
        <h5>{post.user.name}</h5>
        <h6>{ hdate.relativeTime(post.created_at)}</h6>
        <p>{post.content}</p>
       
        <div className="comendet">
          <div onClick={() => likecoun(post.id)} className="coment">
            {!post.liked_by_current_user ? <FcLikePlaceholder /> : <FcLike />}
            <p>{post.likes_count} </p>
          </div>
          <div className="like" onClick={handleclik}>
            <BiComment />
            <p>{post.comments_count}</p>
          </div>
        </div>
      </div>
      {/* <Comment commentt={details}/> */}
      {openComment && (
        <>
          {details.map((item, i) => (
            <div key={item.id} className="comments">
              <div className="commentCont">
                <img src={item?.user?.avatar} />
                <div details="commDetail">
                  <h5>{item?.user?.name}</h5>
                  <p> item?.created_at} </p>
                  <h6>{item?.content}</h6>
                </div>
              </div>
            </div>
          ))}
        </>
        
      )}
     { openComment && <div className="commentAdd">
          <input placeholder=" Add Anew Comment" name="content" ref={newCom}/>
          <button onClick={() => newComment()}>add</button>
        </div>
  
 } </div>
  );
};
export default SinglePost;
