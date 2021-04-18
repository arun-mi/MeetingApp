import React from "react";

export default function About() {
  return (
    <div>
      <div className="heading">About Me</div>
      <div className="toolbar" style={{ height: "60vh" }}>
        <div style={{ marginLeft: "67px", paddingTop: "65px" }}>
          <div>Name: Arun Mishra</div>
          <div>Roll: 1829135</div>
          <div>Github profile: https://github.com/arun-mi</div>
          <div>
            Skills: ReactJS, Java, Python, Javascript, C, C++, JDBC, Redux
          </div>
          <br />
          <div>Projects:</div>
          <br />
          <div>Google Clone</div>
          <div>AI Enabled B2B Invoice Management System</div>
          <div>Meeting Planner</div>
        </div>
      </div>
    </div>
  );
}
