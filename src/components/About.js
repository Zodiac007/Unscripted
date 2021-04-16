import React from "react";
import "../App.css";

function About() {
  return (
    <div className="container-fluid about-mission" id="about">
      <div className="row about">
        <div className="col-lg-12">
          <h1>About</h1>
          <p>
            Look the news is broken. It’s more about noise than context, debates
            over analysis, hate over reporting, and what the viewer needs to
            know, i.e. information, is lost somewhere between the ticker and
            primetime monologues.
          </p>
          <p>That’s where Unscripted comes in.</p>
          <p>
            Yes, we aren’t news and we aren’t “journalists” (don’t miss the air
            quotes), we know that. What we are is context, perspective,
            information, and storytelling, which cuts through the noise with a
            style that is self-aware and unafraid of reputation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
