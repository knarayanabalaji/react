import Logo from "../utils/images/foodapp.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   
    const [btnNameReact, setBtnNameReact] = useState('Login');
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo}></img>
        </div>
        <div className="nav-item">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                btnNameReact === "Login"?
                setBtnNameReact("Logout"):
                setBtnNameReact("Login");
                // console.log(btnNameReact);
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;