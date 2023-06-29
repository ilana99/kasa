import './header.css';
import logo from "../../assets/LOGO-3.png";
import {Link} from "react-router-dom"
import { useState } from 'react';

function Header() {
    
    const [activePage, setActivePage] = useState("home");

    const handleClick = (page) =>{
        setActivePage(page);
    };

    return (
        <nav className='header'>
            <img src={logo} alt="logo" className='logo'/>
            <div>
                <Link to ="/" className={activePage === "home" ? "active" : ""} onClick={() => handleClick("home")}>Accueil</Link>
                <Link to ="/apropos" className={activePage === "apropos" ? "active" : ""} onClick={() => handleClick("apropos")}>A propos</Link>
            </div>
        </nav>
    )

}

export default Header