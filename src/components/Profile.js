import {  useNavigate } from "react-router-dom";
import classes from "./profile.css";
import Sidebar from "./Sidebar"
import React, { useEffect,useState ,useRef} from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { token } = React.useContext(AuthContext);
     
    const [profData, setProfData] = useState(null);
    const [pos, setPos] = useState([]);
    const [post, setPost] = useState([]);


    const fileRef = useRef();
    const Profile = async () => {
      const res = await fetch("http://ferasjobeir.com/api/users/me", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setProfData(json.data);
    };
    useEffect(() => {
      Profile();
    }, []);


    const deletPost = async (pos) => {
      const ress = await fetch(`http://ferasjobeir.com/api/posts/${pos}`, {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
  
      });
      const deletNewPost = await ress.json();
      setPos(...Profile);
      if(deletNewPost.success){
        const newpost = [...post]
        const index = newpost.findIndex(item => item.id == deletNewPost.data.id)
        newpost[index] = deletNewPost.data
        setPos([...pos ,...newpost])
    }
    };

       
     


    const updateProfile = async (e) => {
      e.preventDefault();
      const newData = new FormData(e.target);
      newData.append("_method", "put");
      console.log(newData);
      const response = await fetch("http://ferasjobeir.com/api/users/me", {
        method: "POST",
        body: newData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      console.log(json);
    };




    return(
   <>
    <Sidebar/>
    <div className="myprofile">
        <div className="hed">
        <h4>profile</h4>

        </div>
        <div className="profcont">
            <div className="minfo"> my iformation </div>
            <div className="fotocont" > 
             <img src={profData?.avatar}  onClick={() => fileRef.current.click()} />
            </div>
            <form onSubmit={updateProfile} method="put">
            <input type={'file'} style={ { display:'none'}} ref={fileRef} name="avatar"/>

            <label htmlFor="name">Name</label>
            <input type="name"  value={profData?.name} id="fname"  onChange={(e) => {
              setProfData({
                ...profData,
                name: e.target.value,
              });
            }}  name="name" ></input>



            <label htmlFor="email">Email</label>
            <input type="email" id="fname" value={profData?.email}   onChange={(e) => {
              setProfData({
                ...profData,
                email: e.target.value,
              });
            }} name="email" ></input>



            <label htmlFor="password">password</label>
            <input type="password" id="fname"  value={profData?.password}  onChange={(e) => {
              setProfData({
                ...profData,
                password: e.target.value,
              });
            }}  name="password" ></input>

            <label htmlFor="email">new password</label>
            <input type="email" id="fname" onChange={(e) => {
              setProfData({
                ...profData,
                new_password: e.target.value,
              });
            }}  name="new_password" ></input>

            <label htmlFor="email">new password confirmation</label>
            <input type="email" id="fname"    onChange={(e) => {
              setProfData({
                ...profData,
                new_password_confirmation: e.target.value,
              });
            }} name="new_password_confirmation" ></input>
            

            <button className="updatep">update Profile</button>
            </form>
            <div className="mposts">
            
             
              {profData?.posts.map((post) => ((<>
                <div className="minfo"> my posts </div>
                <ul>
                <li>
                  <span>  {post.content}</span>
                  <span><button className="delete"  onClick={() => deletPost(post.id)} >Delete</button></span>
                </li>
              </ul>
            
            </>)))}
             
              </div>
            
        </div>
    </div>
   </>
    )
}
export default Profile