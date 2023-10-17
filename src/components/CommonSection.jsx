import React from 'react';
import { MarketOutlook, FXWeekly, CIOBulletin } from '../Data/Insights';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';

function CommonSection() {
  const MarketOutlookItem = MarketOutlook[0];
  const fx = FXWeekly[0];
  const cio = CIOBulletin[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10 ">
      {/* First Column */}
      <div className="col-span-1 lg:col-span-1 h-[450px]">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <div className="relative">
            <img src={MarketOutlookItem.InsightImg} alt="" />
            <span className="bg-black text-[10px] text-white px-1 py-1 absolute bottom-0 left-0">
              {MarketOutlookItem.InsightImgTitle}
            </span>
          </div>
          <div className="mb-2">
            <h4>{MarketOutlookItem.Title}</h4>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center text-[12px]">
              <BsFillCalendar2WeekFill />
              {MarketOutlookItem.PostedDate}
            </div>
            <div className="flex gap-1 items-center text-[12px]">
              <AiOutlineFieldTime />
              <div>{MarketOutlookItem.ReadTime}</div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-[12px]'>{MarketOutlookItem.Description}</p> 
          </div>
        </div>
      </div>

      {/* Center Column */}
      <div className="col-span-1 lg:col-span-1">
        <div className="p-4 bg-white rounded-lg shadow-lg h-[500px]    ">
          <div className="relative">
            <img src={fx.InsightImg} alt="" />
            <span className="bg-black text-[12px] text-white px-1 py-1 absolute bottom-0 left-0">
              {fx.InsightImgTitle}
            </span>
          </div>
          <div className="mb-2">
            <h4>{fx.Title}</h4>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center text-[12px]">
              <BsFillCalendar2WeekFill />
              {fx.PostedDate}
            </div>
            <div className="flex gap-1 items-center text-[12px]">
              <AiOutlineFieldTime />
              <div>{fx.ReadTime}</div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-[10px]'>{fx.Description}</p> 
          </div>
        </div>
      </div>

      {/* Last Column */}
      <div className="col-span-1 lg:col-span-1">
        <div className="p-4 bg-white rounded-lg shadow-lg h-[450px] ">
          <div className="relative">
            <img src={cio.InsightImg} alt="" />
            <span className="bg-black text-[10px] text-white px-1 py-1 absolute bottom-0 left-0">
              {cio.InsightImgTitle}
            </span>
          </div>
          <div className="mb-2">
            <h4>{cio.Title}</h4>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center text-[12px]">
              <BsFillCalendar2WeekFill />
              {cio.PostedDate}
            </div>
            <div className="flex gap-1 items-center text-[12px]">
              <AiOutlineFieldTime />
              <div>{cio.ReadTime}</div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-[12px]'>{cio.Description}</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonSection;
