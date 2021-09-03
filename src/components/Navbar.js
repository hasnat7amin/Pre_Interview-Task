import React, { useState } from "react";
import "../styles/components/Navbar.css";
import logo from "../images/logo.png";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ForumIcon from "@material-ui/icons/Forum";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import WeekendIcon from "@material-ui/icons/Weekend";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import ContractBuilder from "./ContractBuilder";
function Navbar() {
  const [contactBuilder, setcontactBuilder] = useState(false);
  return (
    <div>
      <div className="sidebar">
        <div className="top">
          <AccountCircleOutlinedIcon color="white" id="profile" />
          <div class="icon">
            <ChromeReaderModeIcon className="img" />
            <p>Omni Check</p>
          </div>
          <div class="icon">
            <FeaturedPlayListIcon className="img" />
            <p>Contract Builder</p>
          </div>
          <div class="icon">
            <ReceiptIcon className="img" />
            <p>OmniNews</p>
          </div>
          <div class="icon">
            <WeekendIcon className="img" />
            <p>OmniScan</p>
          </div>
          <div
            className="icon"
            onClick={() => {
              contactBuilder
                ? setcontactBuilder(false)
                : setcontactBuilder(true);
            }}
          >
            <WeekendIcon
              style={{
                backgroundColor: contactBuilder ? "#51B64F" : "#EDE8E8",
              }}
              className="img"
              id="calender"
            />
            <p>Calender</p>
          </div>
        </div>
        <div className="bottom">
          <img alt="Logo" src={logo} />
        </div>
      </div>
      <div className="bottombar">
        <SearchIcon />
        <ForumIcon />
        <img alt="Logo" src={logo} />
        <CalendarTodayIcon
          style={{ color: contactBuilder ? "#51B64F" : "#EDE8E8" }}
          onClick={() => {
            contactBuilder ? setcontactBuilder(false) : setcontactBuilder(true);
          }}
        />
        <AddBoxIcon />
      </div>
      <ContractBuilder hide={contactBuilder} />
    </div>
  );
}

export default Navbar;
