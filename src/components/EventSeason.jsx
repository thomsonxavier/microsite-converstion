import React, { useState } from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

function EventsSeason({ seasonData, showLoadMore, searchTerm }) {
  const [itemsToShow, setItemsToShow] = useState(6);

  const loadMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

 
  const currentDate = new Date();


  const filteredData = searchTerm
    ? seasonData.filter((item) =>
        item.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : seasonData;

  return (
    <div className="grid grid-cols-1 gap-5 gap-y-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
      {filteredData.length === 0 ? (
        <div className="text-center h-full min-h-screen grid col-span-3 justify-center items-center w-full text-gray-600">
          <h1 className=" max-w-2xl "><span className="text-blue-500 text-2xl  ">Stay tuned</span>
          <br/>
            <span>We are coming soon.</span>
            <br/>
            We will soon be launching our upcoming curated events and webinars.
            Till then stay tuned to our page for details regarding the launch.
          </h1>
      
        </div>
      ) : (
        filteredData.slice(0, itemsToShow).map((item, index) => (
          <div key={index} className="mb-10 flex flex-col h-full">
            <div className="relative">
              <img src={item.EventImg} alt="" />
              <span className="bg-black text-[10px] text-white px-1 py-1 absolute bottom-0 left-0">
                {item.EventImgTitle}
              </span>
            </div>
            <div className="mb-2 min-h-[50px]">
              <h4 className="mt-1 font-medium">{item.Title}</h4>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex gap-1 items-center text-[12px]">
                <BsFillCalendar2WeekFill />
                {item.EventDate}
              </div>
              <div className="flex gap-1 items-center text-[12px]">
                <AiOutlineFieldTime />
                <div>{item.EventTime}</div>
              </div>
            </div>
            <div className="mt-5 font-thin flex flex-col justify-between items-start">
              <p className="text-sm min-h-[155px]">{item.Description}</p>
              <div>
                <a
                  target="_blank"
                  href={item.ReadMoreLink}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  {item.EventDate > currentDate ? "Register Now" : "Watch Now"}
                </a>
              </div>
            </div>
          </div>
        ))
      )}

      {showLoadMore && itemsToShow < filteredData.length && (
        <div className="grid col-span-3 items-center justify-center mt-4 mb-10">
          <button
            onClick={loadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default EventsSeason;
