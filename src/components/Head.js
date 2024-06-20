import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [logInbtn,setLogInBtn] = useState("Login")
    return (<div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} />
        </div>
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                    logInbtn === "Login" ? setLogInBtn("Logout") : setLogInBtn("Login")
                }}>{logInbtn}</button>
            </ul>

        </div>
    </div>)
}

export default Header;