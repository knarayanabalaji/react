import Logo from "../utils/images/foodapp.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-gray-100 lg:bg-blue-100">
        <div className="logo-container">
          <img className="w-56 " src={Logo}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "😊" : "😢"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
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