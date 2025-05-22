import "./header.css";
import { Link } from "react-router-dom";
import "../../assets/style.css";

function Header({ handleShowSignUp }) {
  return (
    <div className="header">
      <div className="navbar">
        {/* Button to trigger the SignUp form */}
        <button className="Signuph" type="button" onClick={handleShowSignUp}>
          <i className="icon-enter"></i> Sign Up
        </button>
        <img className="logo" src="logo.png" alt="" />
        <div className="navcontainer">
          <ul>
            <li>
              <i className="icon-home"></i>
              <Link id="active" className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="icon-information-solid"></i>
              <Link to="#mission"> About</Link>
            </li>
            <li>
              <i className="icon-portfolio"></i>{" "}
              <Link to="#services">Services</Link>
            </li>
            <li>
              <i className="icon-contacts"></i> <Link to="#footer">Contact</Link>
            </li>
            <li>
              <i className="icon-question-circle"></i>
              <Link to="#faq"> FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
