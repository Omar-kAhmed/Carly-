import "./header.css";
import { Link } from "react-router-dom";  // Ensure to import Link from react-router-dom
import "../../assets/style.css";

function Header1({ onDIYClick }) {
    return (
        <div className="header1">
            <img className="logo1" src="logo.png" alt="Logo" />
            <div className="navbar1">
                <div className="navcontainer1">
                            <i className="icon-engineering " id="icon-eng">  </i>
                       
                            <i className="icon-contacts" id="icon-contact"> </i>
                            <i className="icon-question-circle" id="icon-price"></i>

                      
                            <i className="icon-home" id="icon-home1"></i>  
                </div>
            </div>
        </div>
    );
}

export default Header1;
