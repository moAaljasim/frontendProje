import classes from "./Slidebar.css";
const NewPost = () => {
    return( 
 <div className="content" >
 <div className="hcon">
     <h2>Home</h2>
     <div className="new">
            <div className="nlogo">
           <img className="logom" src="https://www.gravatar.com/avatar/92fa9cb7049df4d04df0cec645415913?s=200" alt="ddd"></img>

            </div>
           
         
         <div className="text">
             <textarea placeholder="Waht is happening?">

             </textarea>
             <button  >Create post</button>
           
         </div>
     </div>
     
 </div>
 
</div>
)}

 export default NewPost
