import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import "./App.css";
import React from "react";
import Profile from "./components/Profile"


const App = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div className="App">
    

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />
        {<Route path="/" element={token ? <Home /> : <SignUp />} />}

        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
    // <Comment/>
  );
}

export default App;
