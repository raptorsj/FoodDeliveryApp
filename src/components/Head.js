import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'


/**
 * 
 * Link is a wrapper on Anchor <a> tag
 */

const Header = () => {
    const [logInbtn,setLogInBtn] = useState("Login")
    return (<div className='header'>
        <div className='logo-container'>
            <img className='logo' src={logo} />
        </div>
        <div className='nav-list'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                    logInbtn === "Login" ? setLogInBtn("Logout") : setLogInBtn("Login")
                }}>{logInbtn}</button>
            </ul>

        </div>
    </div>)
}

export default Header;