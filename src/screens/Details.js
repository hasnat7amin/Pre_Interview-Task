import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../styles/screens/Details.css";
import { Link, useParams } from "react-router-dom";
import HouseIcon from "@material-ui/icons/House";
import EventIcon from "@material-ui/icons/Event";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
function Details() {
  const { item } = useParams();
  const data = JSON.parse(item);
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="details_screen">
        <div className="details">
          <div className="topbar">
            <Link to="/" className="a">
              <div className="left_topbar">
                <ArrowBackIosIcon id="back_icon" />
                <p>Back</p>
              </div>
            </Link>
            <div>
              <p>Edit</p>
            </div>
          </div>
          <div>
            <h1>{data.title}</h1>
            <h5>{data.eventType}</h5>
          </div>
          <div className="event_details">
            <div className="event_list">
              <HouseIcon />
              <h2 className="event_heading">{data.location}</h2>
            </div>
            <div className="event_list">
              <EventIcon />
              <div className="event_heading">
                <p>{data.datetime.split("T")[1]}</p>
                <p>{data.datetime.split("T")[0]}</p>
              </div>
            </div>
          </div>
          <div className="event_description">
            <p>{data.description}</p>
          </div>
          <div>
            <h3>Attendees</h3>
            <div className="event_people">
              <div>
                <AccountCircleIcon />
                <p>{data.people}</p>
              </div>
              <ChatIcon />
            </div>
          </div>
          <div className="cancel_event">
            <h3>Cancel Event</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
