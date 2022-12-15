import {  useNavigate } from "react-router-dom";
import classes from "./profile.css";
import Sidebar from "./Sidebar"



const Profile = () => {
    return(
   <>
    <Sidebar/>
    <div className="myprofile">
        <div className="hed">
        <h4>profile</h4>

        </div>
        <div className="profcont">
            <div className="minfo"> my iformation </div>
            <div className="fotocont"> 
             <img src="	https://www.gravatar.com/avatar/9fa22bccbe63ba6d09b4b98ce689eefe?s=200"></img>
            </div>
            <form>
            

            <label for="email">Name</label>
            <input type="email" id="fname" name="email" ></input>

            <label for="email">Email</label>
            <input type="email" id="fname" name="email" ></input>

            <label for="email">password</label>
            <input type="email" id="fname" name="email" ></input>

            <label for="email">new password</label>
            <input type="email" id="fname" name="email" ></input>

            <label for="email">new password confirmation</label>
            <input type="email" id="fname" name="email" ></input>
            

            
            </form>
        </div>
    </div>
   </>
    )
}
export default Profile