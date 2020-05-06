import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/fireBase.Utile"

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.style.scss";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="loho" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> Shop</Link>
            <Link className="option" to="/"> Connect</Link>
            {
                currentUser ?
                    <div className="option" onClick={()=> auth.signOut() } > Sign Out</div>
                    :
                    <Link className="option" to="/sign"> Sign In</Link>
            }

        </div>
    </div>
)

export default Header;