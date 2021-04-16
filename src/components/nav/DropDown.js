import React from "react";
import { HashLink } from "react-router-hash-link";
import Login from "./Login";
import "../../App.css";

function DropDown() {
  const [showLogin, setLogin] = React.useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <>
      <div className="card dropdown-menu-111" style={{width:"15rem", zIndex: "2" }}>
        <ul>
          <li>
            <HashLink className="smooth-link" smooth to="#">
              Home
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink
              onClick={handleLogin}
              className="smooth-link"
              smooth
              to="#login"
            >
              Login
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink className="smooth-link" smooth to="#profile">
              My Profile
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink className="smooth-link" smooth to="#plan">
              Subscribe
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink className="smooth-link" smooth to="#about">
              About Unscripted
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink className="smooth-link" smooth to="#mission">
              Mission
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink className="smooth-link" smooth to="#team">
              Our Team
            </HashLink>
          </li>
          <br />
          <li>
            <HashLink className="smooth-link" smooth to="#faq">
              FAQs
            </HashLink>
          </li>
        </ul>
      </div>

      {showLogin ? <Login /> : null}
    </>
  );
}

export default DropDown;
