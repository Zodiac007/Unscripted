import React from "react";
import { supportData } from "../data/data";

function Support() {
  return (
    <div className="container support">
      <h1>Support our work and enjoy these members-only benefits</h1>
      <div className="row">
        {supportData.map((i) => {
          return (
            <div className="col-lg-3 col-md-4 col-6">
              <div
                className="card support-card"
                style={{ width: "9rem", height: "12rem" }}
              >
                <div className="card-body">
                  <h4 className="card-title support-title">{i.id}</h4>
                  <p class="card-text support-text">{i.tag}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Support;
