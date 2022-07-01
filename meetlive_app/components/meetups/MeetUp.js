import React from 'react'

export const MeetUp = (props) => {
    return (
        <>
        <div className="flex drop-shadow-lg flex-col mt-5 gap-4 overflow-y-auto">
        {props.meetups.map((meetup) =>(
        <div key={meetup.id} className="relative w-[40vw] h-[80vh]">
            <img src="https://media.timeout.com/images/105883842/750/422/image.jpg" alt="No image" className="h-[65vh] w-full" />
            <div className=" flex justify-between px-5 py-5 h-[15vh] w-full absolute bottom-0 bg-white">
                <div>
                <span className="text-[18px] bold">{meetup.name}</span>
                <p className="text-[10px]">{meetup.schedule}</p>
                <p className="text-[11px] text-[#00000058]">{meetup.date}</p>
                <p className="text-[11px] text-[#000000c8]">{meetup.location}</p>
                </div>
                <div>
                    <button className="btn btn-primary border-2 rounded-xl border-solid border-violet-500 text-violet-500 p-4 px-10">View Details</button>
                </div>
            </div>
        </div>
        ))}
        </div>
        </>
    )
}
