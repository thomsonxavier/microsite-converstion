import React, { useState } from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import Popup from "./Popup";

function PodcastSeason({ seasonData, showLoadMore, searchTerm }) {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [popupOpen, setPopupOpen] = useState(Array(seasonData.length).fill(false));

  const loadMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

  const togglePopup = (index) => {
    const newPopupOpen = [...popupOpen];
    newPopupOpen[index] = !newPopupOpen[index];
    setPopupOpen(newPopupOpen);
  };

  const filteredData = searchTerm
    ? seasonData.filter((item) =>
        item.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : seasonData;

  return (
    <div className="grid grid-cols-1 gap-5 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredData.slice(0, itemsToShow).map((item, index) => (
        <div key={index}>
          <div className="relative">
            <img src={item.PodcastImg} alt="" onClick={() => togglePopup(index)} />
            <span className="bg-black text-[10px] text-white px-1 py-1 absolute bottom-0 left-0">
              {item.PodcastImgTitle}
            </span>
          </div>
          <div className="mb-2">
            <h4>{item.Title}</h4>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center text-[12px]">
              <BsFillCalendar2WeekFill />
              {item.PodcastDate}
            </div>
            <div className="flex gap-1 items-center text-[12px]">
              <AiOutlineFieldTime />
              <div>{item.PodcastDuration}</div>
            </div>
          </div>
          {popupOpen[index] && (
            <Popup open={popupOpen[index]} hreflink={item.ReadMoreLink} closemodal={() => togglePopup(index)} />
          )}
        </div>
      ))}
      {showLoadMore && itemsToShow < filteredData.length && (
        <div className="grid col-span-3 items-center justify-center mt-4 mb-10 ">
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

export default PodcastSeason;
