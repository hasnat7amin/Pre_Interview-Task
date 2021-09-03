import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/screens/Home.css";
import "react-calendar/dist/Calendar.css";
import EventIcon from "@material-ui/icons/Event";
import Calendar from "react-calendar";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
function Home({ data, setdata }) {
  const [value, onChange] = useState(new Date());
  return (
    <div className="home">
      <Navbar />
      <div className="home_screen">
        <div className="home_panel">
          <div className="topbar">
            <div className="left_topbar">
              <ArrowBackIosIcon id="back_icon" />
              <p>Back</p>
            </div>
            <div>
              <SearchIcon />
              <MoreIcon />
            </div>
          </div>
          <h2>Calender</h2>
          <div className="boxes">
            <div id="all">
              <p className="all">All</p>
            </div>
            <div id="vendors">
              <p>Vendors</p>
            </div>
            <div id="view">
              <p>Viewings</p>
            </div>
            <div id="wall">
              <p>Wallets</p>
            </div>
            <div id="more">
              <p className="all">More</p>
            </div>
          </div>
          <div className="calenders">
            <Calendar
              className="calender_panel"
              onChange={onChange}
              value={value}
            />
          </div>
          <div>
            {Object.keys(data).map((key, index) => {
              return (
                <div key={index}>
                  <h3>{key.split("T")[0]}</h3>
                  <div className="meeting">
                    {data[key].map((item, index) => {
                      return (
                        <Link
                          to={"/details/" + JSON.stringify(item)}
                          className="a"
                        >
                          <div key={index} className="meeting_container">
                            <div>
                              <EventIcon className="meeting_icon" />
                            </div>
                            <div className="panel_text">
                              <div className="panel_profile">
                                <p className="panel_title">{item.title}</p>
                                <p className=" panel_person">
                                  {item.people[0]}
                                </p>
                              </div>
                              <p className="panel_location">{item.location}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
