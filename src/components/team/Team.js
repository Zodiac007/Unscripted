import React, { useState } from "react";
import { teamData } from "../../data/data";
import TeamDetails from "./TeamDetails";

function Team() {
  const [state, setState] = useState({
    show: false,
    data: {},
  });

  const toggleShow = (data, show) => {
    console.log(data, show);
    setState((prev) => ({ ...prev, show, data }));
  };

  console.log(state);

  return (
    <>
      <div className="container team" id="team">
        <h1>Team</h1>
        <div className="row">
          {teamData.map((i) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-6 team-columns"
                  key={i.id}
                  onClick={() => toggleShow(i, true)}
                >
                  <div className="card team-card">
                    <img
                      src={i.image}
                      alt={i.id}
                      className="card-img-top team-img"
                    />
                    <div className="card-body">
                      <h4 className="card-title team-title">{i.name}</h4>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {state.show && <TeamDetails profile={state.data} onClick={toggleShow} />}
    </>
  );
}

export default Team;
