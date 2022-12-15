//import classes from "./Home.css";
import { Link ,useNavigate } from "react-router-dom";
import  {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import NewPost from "../components/NewPost";
const Home = () => {
  return(
    <>
   
     <Sidebar/> 
     <NewPost/>
     <Content/>
     
    
     
    </>
  )
 
 
};
export default Home;




// const {signOut} = useContext(AuthContext)
// const navigator = useNavigate()
// return (
//   <div className="cont">
//     <header>
//       <nav>
//         <img className="img" src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg"></img>
//         <div className="icon">
//           <a className="home" ><span class="material-symbols-outlined">home</span>Home</a>
//           <a id="color"><span class="material-symbols-outlined">mail</span>messages</a>
//           <a id="color"><span class="material-symbols-outlined">bookmarks</span>bookmarks</a>
//           <a id="color"><span class="material-symbols-outlined">explore</span>explore</a>
//           <a id="color"><span class="material-symbols-outlined">playlist_add_check</span>list</a>
//           <a id="color"><span class="material-symbols-outlined">person</span>profile</a>
//           <a id="color" onClick={()=> {
//             signOut()
//             navigator("/")
//           }}><span class="material-symbols-outlined">lock</span>signout</a>
//         </div>
//       </nav>
//     </header>
//      <div className="content" >
//       <div className="hcon">
//           <h2>Home</h2>
//           <div className="new">
//                  <div className="nlogo">
//                 <img className="logom" src="https://www.gravatar.com/avatar/92fa9cb7049df4d04df0cec645415913?s=200" alt="ddd"></img>

//                  </div>
                
              
//               <div className="text">
//                   <textarea placeholder="Waht is happening?">

//                   </textarea>
//                   <button  >Create post</button>
                
//               </div>
//           </div>
          
//       </div>
      
//      </div>
//   </div>

// );