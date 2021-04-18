import React from "react";
import home from "../icons/home.svg";
import about from "../icons/about.svg";
import navIcon from "../icons/navIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePageReducer } from "../actions/actions";

export default function Navbar() {
  const pagePath = (state) => state.page.page;
  const page = useSelector(pagePath);
  const dispatch = useDispatch();

  const handlePageChange = () => {
    dispatch(togglePageReducer(true));
  };
  const handlePageChange2 = () => {
    dispatch(togglePageReducer(false));
  };
  const handleNavToggle = () => {
    console.log("Close");
  };

  return (
    <div className="navbar_full">
      <div className="navbar_header">
        <div>
          {" "}
          <span
            style={{
              paddingRight: "0.738rem",
              paddingLeft: "1.55rem",
            }}
            onClick={handleNavToggle}
          >
            <img src={navIcon} style={{ height: "30px" }} />
          </span>
          1829135
        </div>
      </div>

      <div className="navbar_content">
        <div
          className="navbar_element"
          onClick={handlePageChange}
          style={{ backgroundColor: page ? "#133B5C" : "inherit" }}
        >
          <p style={{ paddingTop: "20px" }}>
            <span style={{ paddingRight: "0.738rem", paddingLeft: "1.55rem" }}>
              <img src={home} />
            </span>
            Home
          </p>
        </div>
        <div
          className="navbar_element"
          onClick={handlePageChange2}
          style={{ backgroundColor: page ? "inherit" : "#133B5C" }}
        >
          <p style={{ paddingTop: "20px" }}>
            <span style={{ paddingRight: "0.738rem", paddingLeft: "1.55rem" }}>
              <img src={about} />
            </span>
            About me
          </p>
        </div>
      </div>
    </div>
  );
}
