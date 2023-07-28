import Logo from "../utils/images/foodapp.png";
import { useState } from "react";

const Header = () => {
   
    const [btnNameReact, setBtnNameReact] = useState('Login');
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo}></img>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                btnNameReact === "Login"?
                setBtnNameReact("Logout"):
                setBtnNameReact("Login");
                console.log(btnNameReact);
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;