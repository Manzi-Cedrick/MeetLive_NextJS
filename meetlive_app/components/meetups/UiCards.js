import React from "react";
import { MeetUp } from "./MeetUp";
import WelcomeMeet from "./WelcomeMeet";

function UiCards() {
  const DummyMeetUps = [
    {
      id: 1,
      name: "Kigali Convention Meetings",
      schedule: "Manzi Cedrick",
      date: "09/12/2005",
      location: "Kigali,Rwanda",
    },
    {
      id: 2,
      name: "Kigali Management Meeting",
      schedule: "Cedrick",
      date: "09/12/2005",
      location: "Kigali,Rwanda",
    },
    {
      id: 3,
      name: "Kigali Management Meeting",
      schedule: "Cedrick",
      date: "09/12/2005",
      location: "Kigali,Rwanda",
    },
    {
      id: 4,
      name: "Kigali Management Meeting",
      schedule: "Cedrick",
      date: "09/12/2005",
      location: "Kigali,Rwanda",
    },
    {
      id: 5,
      name: "Kigali Management Meeting",
      schedule: "Cedrick",
      date: "09/12/2005",
      location: "Kigali,Rwanda",
    },
  ];
  return (
    <div className="flex justify-center ">
      <WelcomeMeet />
      <MeetUp meetups={DummyMeetUps} />
      <WelcomeMeet />
    </div>
  );
}

export default UiCards;
