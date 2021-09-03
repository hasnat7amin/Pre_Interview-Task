import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/screens/Add.css";
import { Link } from "react-router-dom";
import TitleIcon from "@material-ui/icons/Title";
import HouseIcon from "@material-ui/icons/House";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function Add({ data, setdata }) {
  const [eventType, seteventType] = useState("");
  const [title, settitle] = useState("");
  const [location, setlocation] = useState("");
  const [people, setpeople] = useState("");
  const [datetime, setdatetime] = useState("");
  const [description, setdescription] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    if (data.hasOwnProperty(datetime)) {
      data[datetime].push({
        eventType: eventType,
        title: title,
        location: location,
        people: people,
        datetime: datetime,
        description: description,
      });
      seteventType("");
      settitle("");
      setlocation("");
      setpeople("");
      setdatetime("");
      setdescription("");
    } else {
      data[datetime] = [
        {
          eventType: eventType,
          title: title,
          location: location,
          people: people,
          datetime: datetime,
          description: description,
        },
      ];
      seteventType("");
      settitle("");
      setlocation("");
      setpeople("");
      setdatetime("");
      setdescription("");
    }
    alert(
      "Your Event is added now move to the Home page by clicking on Back Button."
    );
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div className="add_screen">
        <div className="add_form">
          <div className="back_button">
            <Link to="/" className="a">
              <ArrowBackIosIcon id="back_icon" />
              <p>Back</p>
            </Link>
          </div>
          <h2 className="title">New Event</h2>
          <form onSubmit={addEvent}>
            <select
              className="event_type"
              onChange={(e) => {
                seteventType(e.target.value);
              }}
            >
              <option value="Event Type">Event Type</option>
              <option value="New Event">New Event</option>
              <option value="Old Event">Old Event</option>
              <option value="Draft Event">Draft Event</option>
            </select>
            <div className="text_input">
              <TitleIcon />
              <input
                required
                type="text"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                placeholder="Event title"
              />
            </div>
            <div className="text_input">
              <HouseIcon />
              <input
                required
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <PersonPinIcon />
              <input
                required
                type="text"
                placeholder="People"
                value={people}
                onChange={(e) => {
                  setpeople(e.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <input
                required
                type="datetime-local"
                placeholder="Time and date"
                value={datetime}
                onChange={(e) => {
                  setdatetime(e.target.value);
                }}
              />
            </div>

            <textarea
              className="text_area"
              placeholder="Add a description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />

            <input type="submit" value="ADD EVENT" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
