import React, {useState,useEffect} from 'react'
import { IoEllipsisVertical } from "react-icons/io5";

const Timer = () => {
  const [time, settime] = useState(60* 1000);
  useEffect(()=>{
    const worker = new Worker(new URL("../../src/CountDownWorker.js", import.meta.url));
    worker.postMessage(time);
    worker.onmessage = (e)=>{
     settime(e.data);
    };
  }, []);

  useEffect(() => {
  if (time <= 0) return;

  const timer = setTimeout(() => {
    settime((prev) => prev - 1000);
  }, 1000);

  return () => clearTimeout(timer);
}, [time]);

  // format the countDown date 
  const formatDate = (miliSecond)=>{
    let total_second = parseInt(Math.floor(miliSecond/1000));
    let total_minutes = parseInt(Math.floor(total_second/60));
    let total_hours = parseInt(Math.floor(total_minutes/60));
    let days = parseInt(Math.floor(total_hours/24));
    let second = parseInt(Math.floor(total_second % 60));
    let minutes = parseInt(Math.floor(total_minutes % 60));
    let hours = parseInt(Math.floor(total_hours % 60));

    

    return { days, hours ,minutes, second};
  };
  const { days, hours ,minutes, second} = formatDate(time);
  console.log(days,hours,minutes,second);
  return (
    <div className = "flex items-center gap-x-4">
      <div className = "flex flex-col items-start ">
        <span className='font-medium text-[12px] font-poppins text-black-color'>Days</span>
        <div className = "flex items-center gap-x-3">
            <h1 className="text-[32px] font-bold"> {String(days).padStart(2, "0")} </h1>
              <span className =" text-red-600 text-xl"><IoEllipsisVertical /></span>
        </div>
    
      </div>


      <div className = "flex flex-col items-start ">
        <span className='font-medium text-[12px] font-poppins text-black-color'>Hours</span>
        <div className = "flex items-center gap-x-3">
            <h1 className="text-[32px] font-bold">{String(hours).padStart(2, "0")}</h1>
              <span className =" text-red-600 text-xl"><IoEllipsisVertical /></span>
        </div>
      
      </div>
    

      <div className = "flex flex-col items-start ">
        <span className='font-medium text-[12px] font-poppins text-black-color'>Minutes</span>
        <div className='flex items-center gap-x-3'>
        <h1 className="text-[32px] font-bold">{String(minutes).padStart(2, "0")}</h1> 
        <span className =" text-red-600 text-xl"><IoEllipsisVertical /></span>
        </div>
     
      </div>
     

      <div className = "flex flex-col items-start ">
        <span className='font-medium text-[12px] font-poppins text-black-color'>Seconds</span>
        <h1 className="text-[32px] font-bold" >{String(second).padStart(2, "0")}</h1>
      </div>

    </div>
  )
}

export default Timer

