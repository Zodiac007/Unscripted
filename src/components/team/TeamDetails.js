import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const profileToIconMapper = {
  FaInstagram: (
    <FaInstagram
      style={{
        color: "#000",
        fontSize: "40px",
        backgroundColor: "#fee000",
        padding: "3%",
        marginLeft: "2%",
        cursor: "pointer",
      }}
    />
  ),
  FaTwitter: (
    <FaTwitter
      style={{
        color: "#000",
        fontSize: "40px",
        backgroundColor: "#fee000",
        padding: "3%",
        cursor: "pointer",
      }}
    />
  ),
};

function TeamDetails({ profile, onClick }) {
  return (
    <>
      {Object.keys(profile).length > 0 && (
        <>
          <div className="container team-modal">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  style={{ width: "25rem" }}
                  className="card team-details-card"
                >
                  <div>
                    <GrFormClose
                      onClick={() => onClick({})}
                      className="close-btn"
                    />
                  </div>
                  <img
                    src={profile.image}
                    alt="img"
                    className="card-img-top team-img"
                  />
                  <h4>{profile.name}</h4>
                  <p>{profile.message}</p>
                  <div>
                    {profile.socialLinks &&
                      profile.socialLinks.map(
                        (e) => profileToIconMapper[e.icon]
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TeamDetails;
