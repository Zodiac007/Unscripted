import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "../../App.css";
import { GrFormClose } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";
function Login() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      {!show ? (
        <div className="container login">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card login-card">
                <div>
                  <HashLink>
                    <GrFormClose
                      onClick={() => setShow(!show)}
                      className="close-btn"
                      style={{ backgroundColor: "#fff" }}
                      to="#"
                    />
                  </HashLink>
                </div>
                <h1>Login &amp; Pay</h1>
                <div className="input-group input-group-lg login-input">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      style={{
                        backgroundColor: "#fff",
                        fontSize: "18px",
                        height: "70px",
                      }}
                      id="inputGroup-sizing-lg"
                    >
                      +91
                    </span>
                  </div>
                  <input
                    style={{
                      backgroundColor: "#fff",
                      fontSize: "18px",
                      height: "70px",
                    }}
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
                <button className="btn btn-primary btn-otp">GET OTP</button>

                <div className="login-icon">
                  <p>Or login with</p>
                  <FaGoogle
                    style={{
                      color: "#fff",
                      fontSize: "45px",
                      backgroundColor: "#fc5350",
                      padding: "4%",
                      cursor: "pointer",
                      lineHeight: "0.4",
                    }}
                  />
                  <FaFacebook
                    style={{
                      color: "#fff",
                      fontSize: "45px",
                      backgroundColor: "#3b5998",
                      padding: "4%",
                      marginLeft: "2%",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Login;
