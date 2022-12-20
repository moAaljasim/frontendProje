import "../pages/Home.css";
import React from 'react'
import {  useNavigate } from "react-router-dom";
import  {useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
    const {signOut} = useContext(AuthContext)
    const navigator = useNavigate()
  return (
    <div className="cont">
      <header>
        <nav>
          <img className="img" src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg"></img>
          <div className="icon">
            <a className="home" onClick={()=> {
            
              navigator("/")
            }} ><span class="material-symbols-outlined">home</span>Home</a>
            <a id="color"><span class="material-symbols-outlined">mail</span>messages</a>
            <a id="color"><span class="material-symbols-outlined">bookmarks</span>bookmarks</a>
            <a id="color"><span class="material-symbols-outlined">explore</span>explore</a>
            <a id="color"><span class="material-symbols-outlined">playlist_add_check</span>list</a>
            <a id="color"   onClick={()=> {  navigator("/profile")}}    ><span class="material-symbols-outlined">person</span>profile</a>
            <a id="color" onClick={()=> {
              signOut()
              navigator("/")
            }}><span class="material-symbols-outlined">lock</span>signout</a>
          </div>
        </nav>
      </header>
      
    </div>

  );
  
}

export default Sidebar