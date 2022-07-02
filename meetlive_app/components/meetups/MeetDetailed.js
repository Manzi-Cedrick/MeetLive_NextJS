import React from 'react'

export const MeetDetailed = (props) => {
  return (
    <div className=" m-auto p-5">
        <img src={`${props.meetupsData.image}`} alt="No image" className="h-[65vsdh] m-auto w-ful]l" />
        <div className="m-auto text-center">
            <p>{props.meetupsData.name}</p>
            <p>{props.meetupsData.description}</p>
            <p>{props.meetupsData.date}</p>
        </div>
    </div>
  )
}
