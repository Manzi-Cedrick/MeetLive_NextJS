import React from 'react'

export const MeetUp = () => {
    return (
        <div className="relative w-[40vw] h-[80vh]">
            <img src="https://media.timeout.com/images/105883842/750/422/image.jpg" alt="No image" className="h-[65vh] w-full" />
            <div className="content drop-shadow-lg flex justify-between py-5 px-4 h-[15vh] w-full absolute bottom-0 bg-white">
                <div>
                <span className="text-[18px] bold">Meeting Name</span>
                <p className="text-[10px]">Scedular</p>
                <p className="text-[11px] text-[#00000058]">12.00pm - 12.50am</p>
                <p className="text-[11px] text-[#000000c8]">Kigali City,Rwanda</p>
                </div>
                <div>
                    <button className="btn btn-primary bg-violet-500 text-white p-4 px-10">View Details</button>
                </div>
            </div>
        </div>
    )
}
