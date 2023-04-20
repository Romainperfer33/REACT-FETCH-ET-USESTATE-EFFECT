import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to ='/'> HOME </Link>
                </li>
                <li>
                    <Link to ='/Coworkings'> LISTE COWORKING </Link>
                </li>
                <li>
                    <Link to ='/createCoworkings'> CRÉER UN COWORKING</Link>
                </li>                
            </ul>
        </nav>
    )
}
export default Header;
