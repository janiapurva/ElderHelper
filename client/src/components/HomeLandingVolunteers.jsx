import React from "react";

export default function HomeVolunteers(props) {
  return (
    <div className="volunteer-landing">
      <h1>Welcome {props.headerName} </h1>
      <h2>Your Current Rating is... </h2>
    </div>
  );
}
