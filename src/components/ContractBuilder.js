import { Link } from "react-router-dom";
import React from "react";
import "../styles/components/ContractBuilder.css";
function ContractBuilder({ hide }) {
  return (
    <div
      style={{ visibility: hide ? "visible" : "hidden" }}
      className="contractBuilder"
    >
      <h3 className="title">Contract Builder</h3>
      <Link to="/add" className="a">
        <div className="create_event">
          <div>+</div>
          <p>Create new event</p>
          <div className="round"></div>
        </div>
      </Link>
      <div className="events">
        <div></div>
        <p>Active events</p>
      </div>
      <div className="events">
        <div id="old_event"></div>
        <p>Old events</p>
      </div>
      <div className="events">
        <div id="draft_event"></div>
        <p>Draft events</p>
      </div>
    </div>
  );
}

export default ContractBuilder;
