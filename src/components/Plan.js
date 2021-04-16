import React from "react";
import { BsCheck, BsCircle } from "react-icons/bs";
import "../App.css";

const white = "#fff";
const black = "#000";
const yellow = "#fee000";
const visibility = "hidden";

function Plan() {
  const [color1, setColor1] = React.useState(white);
  const [color2, setColor2] = React.useState(black);
  const [color3, setColor3] = React.useState(yellow);
  const [show1, setShow1] = React.useState(visibility);
  const [show2, setShow2] = React.useState(!visibility);

  const colorChange = () => {
    const newColor1 = color1 == white ? black : white;
    const newColor2 = color2 == black ? white : black;
    const newColor3 = color3 == yellow ? black : yellow;
    const newShow1 = show1 == visibility ? "" : visibility;
    const newShow2 = show2 == visibility ? "" : visibility;

    setColor1(newColor1);
    setColor2(newColor2);
    setColor3(newColor3);
    setShow1(newShow1);
    setShow2(newShow2);
  };

  return (
    <div className="container plan" id="plan">
      <div className="row plan-para">
        <div className="col-lg-12 col-md-12">
          <p>
            We want to continue to report fearlessly on issues that are
            important to you and for that we need you. By subscribing to
            Unscripted you empower us to continue to do work that matters.
          </p>
        </div>
      </div>
      <div className="row plan-card">
        <div className="col-lg-12 col-md-12">
          <h1>Choose a plan &amp; subscribe to Unscripted</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                className="card checked-card"
                style={{
                  backgroundColor: color1,
                  color: color2,
                }}
                onClick={colorChange}
              >
                <div className="card-body">
                  <div className="plan-icon">
                    <BsCircle className="plan-circle" />
                    <BsCheck
                      style={{ visibility: show1 }}
                      className="plan-checked"
                    />
                  </div>
                  <h4
                    style={{ marginTop: "7%", fontWeight: "bold" }}
                    className="card-title plan-title"
                  >
                    Rs 200
                  </h4>
                  <p
                    style={{
                      color: color2,
                      letterSpacing: "5px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                    class="card-text plan-text"
                  >
                    Per Month
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                className="card checked-card"
                style={{
                  backgroundColor: color2,
                  color: color1,
                }}
                onClick={colorChange}
              >
                <div className="card-body">
                  <div className="plan-icon">
                    <BsCircle className="plan-circle" />
                    <BsCheck
                      style={{ visibility: show2 }}
                      className="plan-checked"
                    />
                  </div>
                  <h4
                    style={{ marginTop: "7%", fontWeight: "bold" }}
                    className="card-title plan-title"
                  >
                    Rs 1200
                  </h4>
                  <p
                    style={{
                      color: color3,
                      letterSpacing: "5px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                    class="card-text support-text"
                  >
                    Per Year
                  </p>
                </div>
                <div className="card-footer support-footer">
                  <p
                    style={{ fontWeight: "bold" }}
                    className="card-text support-text"
                  >
                    SAVE 50% ON ANNUAL SUBSCRIPTION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-pay">PAY &amp; SUPPORT</button>
          <p className="below-btn-text">
            This is a one time payment plan. No recurring charges will be
            applied.
          </p>
          <p className="learn-more">Learn more about subscriptions.</p>
          <a className="know-more" href="">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Plan;
