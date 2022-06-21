import React, { useContext, useState } from "react";
import "./navbar.scss";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";

const Navbar = () => {
  const [scroll, setscroll] = useState(false);
  const { dispatch } = useContext(AuthContext);
  window.onscroll = () => {
    setscroll(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <span className="stream">MStream</span>
          <Link to="/" className="link">
            <span className="categeory">Home</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="categeory">Movies</span>
          </Link>
          <Link to="/series" className="link">
            <span className="categeory">Series</span>
          </Link>
        </div>
        <div className="right">
          {/* we can  add search and notification implementation if needed  */}
          {/* <SearchIcon className="icon"></SearchIcon> */}

          {/* <NotificationsIcon className="icon"></NotificationsIcon> */}
          <div className="profile">
            <ArrowDropDownCircleIcon className="icon"></ArrowDropDownCircleIcon>
            <div className="options">
              <span>Settings</span>
              <span
                onClick={() => {
                  dispatch(logoutSuccess());
                }}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
