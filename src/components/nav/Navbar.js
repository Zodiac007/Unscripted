import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDown from "./DropDown";
import Login from "./Login";
import "../../App.css";

function Navbar() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="container-fluid nav-container">
        <div className="row nav-row ">
          <div className="col-lg-6 col-md-6 col-6 logo-heading">
            <h1>unscripted</h1>
            <p>by ScoopWhoop</p>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            <GiHamburgerMenu
              onClick={() => setShow(!show)}
              className="menu-item"
            />
            {show ? <DropDown /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
