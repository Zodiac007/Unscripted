import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row footer-top">
        <div className="col-lg-12 col-md-12 col-sm-12 footer-list">
          <div>
            <p>Follow</p>
          </div>
          <div>
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-lg-6 col-md-6 col-sm-6 footer-logo">
          <h3>unscripted</h3>
          <h6>by ScoopWhoop</h6>
          <p>help@unscripted.news</p>
          <p>Copyright 2021 ScoopWhoop Media Pvt Ltd</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 footer-links">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
