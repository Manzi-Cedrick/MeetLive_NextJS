import React from 'react'
import { MeetUp } from './MeetUp'
import WelcomeMeet from './WelcomeMeet'

function UiCards() {
  return (
    <div className="flex m-5 justify-center ">
        <WelcomeMeet/>
        <MeetUp/>
        <WelcomeMeet/>
    </div>  
  )
}

export default UiCards