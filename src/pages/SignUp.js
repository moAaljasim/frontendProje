import {  useNavigate } from "react-router-dom";
import classes from './signup.css'
import { useState } from 'react';
import { Link } from "react-router-dom"

const SignUp = () => {
const  navigate = useNavigate('');
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [confPassword, setConfPassword]=useState("")



const  register = async  (e)=>{
    e.preventDefault();
   
    const response = await fetch(`${process.env.REACT_APP_API}/users/register`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: confPassword
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    
    if (json.success) {
       
         navigate("/signin")
       
    } else {
        window.alert(json.messages[0])
    }
}
  




  return (
    
    <div className="contain" onSubmit={register}>
      
        <form className="frm">
            <img src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg" alt="logo"></img>
            <h2>Create Account</h2>
            <label Htmlfor="name"> Name</label>
            <input type="text" id="name" name="tname"  value={name} onChange={(e)=> setName(e.target.value)}></input>

            <label Htmlfor="email">Email</label>
            <input type="email" id="name" name="email"  value={email} onChange={(e)=> setEmail(e.target.value)}></input>

            <label Htmlfor="password"> Password</label>
            <input type="password" id="password" name="password"  value={password} onChange={(e)=> setPassword(e.target.value)}></input>

            <label Htmlfor="confPassword"> Password Confirmation</label>
            <input type="password" id="cpassword" name="confPassword"  value={confPassword} onChange={(e)=> setConfPassword(e.target.value)}></input>
           <div className="inp">
           <Link to={'signin'}  type="submit"  value="login">login</Link>
           <button  id="reg" type="submit" value="register"> register</button>
           </div>
            
        </form>
    </div>
  );
};
export default SignUp;





//<div className="container">
    // <form>
    //   <div className="mb-3">
    //     <label for="exampleInputEmail1" className="form-label">
    //       Email address
    //     </label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="exampleInputEmail1"
    //       aria-describedby="emailHelp"
    //     ></input>
    //     <div id="emailHelp" className="form-text">
    //       We'll never share your email with anyone else.
    //     </div>
    //   </div>
    //   <div className="mb-3">
    //     <label for="exampleInputPassword1" className="form-label">
    //       Password
    //     </label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       id="exampleInputPassword1"
    //     ></input>
    //   </div>
    //   <div className="mb-3 form-check">
    //     <input
    //       type="checkbox"
    //       className="form-check-input"
    //       id="exampleCheck1"
    //     ></input>
    //     <label className="form-check-label" for="exampleCheck1">
    //       Check me out
    //     </label>
    //   </div>
    //   <button type="submit" className="btn btn-primary">
    //     Submit
    //   </button>
    // </form>
