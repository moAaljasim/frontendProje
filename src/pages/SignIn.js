import classes from './signup.css'
import {  useNavigate } from "react-router-dom";
import { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const SignIn = () => {
const authCtx = useContext(AuthContext)
const  navigate = useNavigate('');
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [userData, setUserData] = useState({
  email: "",
  password: ""
});


  const  register = async  (e)=>{
    e.preventDefault();
   
    const response = await fetch(`${process.env.REACT_APP_API}/users/login`, {
        method: 'POST',
        body: JSON.stringify({      
            email: email,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    console.log(json)
    window.alert(json.messages)
    if (json.success) {
        authCtx.register(json.data, json.token)
         navigate("/")
       
    } else {
        window.alert(json.messages[0])
    }
}


  return (
    
    
    <div className="contain">
      
        <form className="frm" onSubmit={register}>
           
        <img src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg" alt="logo"></img>
            <h2>login</h2>
            <label Htmlfor="email">Email</label>
            <input type="email" id="fname" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>

            <label Htmlfor="password"> Password</label>
            <input type="password" id="password" name="password"   value={password} onChange={(e)=> setPassword(e.target.value)} ></input>

           
            <button id="login" type="submit" value="Submit">login</button>
           
        </form>
    </div>
  );
};
export default SignIn;





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
