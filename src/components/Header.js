import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {


    const[btnName,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();

    return (

        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus?"✅":"🔴"}</li>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./about">About</Link></li>
                    <li><Link to="./contact">Contact</Link></li>
                    <li><Link to="">Cart</Link></li>
                    <button className="login-btn" onClick={() =>{
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>

    )
};

export default Header;