import React from 'react'

export const MeetUp = () => {
    return (
        <div className="border-solid border-2 border-black relative w-[40vw] h-[80vh]">
            <div className="content flex justify-between py-2 px-4 h-[12vh] w-full absolute bottom-0 bg-white">
                <div>
                <span className="text-[18px] bold">Meeting Name</span>
                <p className="text-[10px]">Scedular</p>
                <p className="text-[11px] text-[#00000058]">12.00pm - 12.50am</p>
                </div>
                <div>
                    <button className="btn btn-primary bg-violet-500 text-white p-4">View Details</button>
                </div>
            </div>
        </div>
    )
}
