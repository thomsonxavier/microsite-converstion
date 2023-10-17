import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";
import PodcastSeason from "./PodcastSeason";
import { season1, season2, season3, season4 } from "../Const";
import { useMediaQuery } from "react-responsive";

function Tabs() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the breakpoint as needed

  return (
    <div className="container mt-10">
      <Tab.Group>
        <div className="flex flex-col sm:flex-row border rounded-lg p-2">
          {/* Tabs */}
          <Tab.List className="flex space-x-2 sm:space-x-4">
            <Tab onClick={() => setActiveTab("All")} className="px-2 py-1 sm:px-3 sm:py-2 rounded-md cursor-pointer hover:bg-gray-200">
              All
            </Tab>
            <Tab onClick={() => setActiveTab("Season 1")} className="px-2 py-1 sm:px-3 sm:py-2 rounded-md cursor-pointer hover:bg-gray-200">
              Season 1
            </Tab>
            <Tab onClick={() => setActiveTab("Season 2")} className="px-2 py-1 sm:px-3 sm:py-2 rounded-md cursor-pointer hover:bg-gray-200">
              Season 2
            </Tab>
            <Tab onClick={() => setActiveTab("Season 3")} className="px-2 py-1 sm:px-3 sm:py-2 rounded-md cursor-pointer hover:bg-gray-200">
              Season 3
            </Tab>
            <Tab onClick={() => setActiveTab("Season 4")} className="px-2 py-1 sm:px-3 sm:py-2 rounded-md cursor-pointer hover:bg-gray-200">
              Season 4
            </Tab>
          </Tab.List>

          {/* Search input */}
          <div className="relative flex mt-2  ml-auto sm:mt-0">
            <AiOutlineSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500"  />
            <input
              className="pl-8 pr-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              type="search"
              name=""
              id=""
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <Tab.Panels className="mt-4">
          {/* Content based on active tab */}
          {activeTab === "All" && (
            <PodcastSeason
              seasonData={[...season1, ...season2, ...season3, ...season4]}
              showLoadMore={true}    
              searchTerm={searchTerm}
            />
          )}
          {activeTab === "Season 1" && (
            <PodcastSeason
              seasonData={season1}
              showLoadMore={true}    
              searchTerm={searchTerm}
            />
          )}
          {activeTab === "Season 2" && (
            <PodcastSeason
              seasonData={season2}
              showLoadMore={true}    
              searchTerm={searchTerm}
            />
          )}
          {activeTab === "Season 3" && (
            <PodcastSeason
              seasonData={season3}
              showLoadMore={true}    
              searchTerm={searchTerm}
            />
          )}
          {activeTab === "Season 4" && (
            <PodcastSeason
              seasonData={season4}
              showLoadMore={true}    
              searchTerm={searchTerm}
            />
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
