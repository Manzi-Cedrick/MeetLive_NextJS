import React from "react";
import { MeetUp } from "./MeetUp";
import WelcomeMeet from "./WelcomeMeet";

function UiCards(props) {
 
  return (
    <div className="flex justify-center ">
      <WelcomeMeet />
      <MeetUp meetups={props.meetUp}/>
      <WelcomeMeet />
    </div>
  );
}

export default UiCards;
