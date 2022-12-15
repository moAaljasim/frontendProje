import "./Slidebar.css";
import { AuthContext } from "../context/AuthContext";
import {  useContext, useState } from "react";
import { PostContext } from "../context/PostContext";




const NewPost = () => {
    const { token } = useContext(AuthContext);
    const {addPost} =useContext(PostContext)

        const[content,setcontent]=useState('')
        const handleOnChange = (e) => {
            setcontent(e.target.value);
           
           
        };
            

    const  creatNewPost = async ()=>{
        const response = await fetch(`http://ferasjobeir.com/api/posts`, {
            method: "post",
            headers: {
              'Content-Type': 'application/json',
             "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                content: content
            }),
          });
          const json = await response.json()
          
         window.alert(json.messages)
        if(json.success){
            addPost(json.data)
            setcontent('')
           
        }
     
       
    }
 
    return( 
 <div className="content" >
 <div className="hcon">
     <h2>Home</h2>
     <div className="new">
            <div className="nlogo">
           <img className="logom" src="https://www.gravatar.com/avatar/92fa9cb7049df4d04df0cec645415913?s=200" alt="ddd"></img>

            </div>
           
         
         <div className="text">
             <textarea onChange={handleOnChange} value={content} placeholder="Waht is happening?">

             </textarea>
             <button onClick={()=>creatNewPost()} >Create post</button>
           
         </div>
     </div>
     
 </div>
 
</div>
)}

 export default NewPost
