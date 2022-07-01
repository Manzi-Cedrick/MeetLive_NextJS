import React from 'react'

const NewMeetUp = () => {
  return (
    <div className=" m-auto mt-10 p-5 bg-white drop-shadow-lg overflow-auto relative w-[40vw]">
        <label className="block text-[14px] font-bold py-2 mt-2">Metting Name</label>
        <input type="text" placeholder="Enter Name" className="w-full  px-5 outline-solid outline-violet-500 border-none bg-zinc-100 h-[7vh]" />
        <label className="block text-[14px] font-bold py-2 ">MeetUp Image</label>
        <input type="text" placeholder="Enter Name" className="w-full px-5 outline-solid outline-violet-500 border-none bg-zinc-100 h-[7vh]" />
        <label className="block text-[14px] font-bold py-2">Address</label>
        <input type="text" placeholder="Enter Name" className="w-full px-5 outline-solid outline-violet-500 border-none bg-zinc-100 h-[7vh]" />
        <label className="block text-[14px] font-bold py-2">Description</label>
        <textarea type="text" placeholder="Enter Name" className="w-full bg-zinc-100 pt-2 px-5 outline-solid outline-violet-500 border-none h-[18vh] resize-none" ></textarea>
        <button className="btn btn-primary bg-violet-500 text-white flex justify-center place-items-center p-4 px-10 mt-5 float-right">Submit</button>
    </div>
  )
}

export default NewMeetUp