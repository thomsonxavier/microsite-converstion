import React from "react";
import Hero from "../components/Hero";
import { Homehero } from "../Const";
import CommonSection from "../components/CommonSection";
import { Link } from "react-router-dom";
import RegisterSection from "../components/RegisterSection";

function Home() {
  return (
    <div>
      <Hero data={Homehero} href={Homehero.hreflink} type="home" />
      <div className="container mt-10 ">
        <div className="text-center">
          <span class="text-xs text-blue-500  leading-9 ">
            VIEW ALL INSIGHTS
          </span>
          <h2 class="text-[18px] mt-5 leading-8">
            Regular publications that reflect our investment team's thoughts.
            <br /> These free educational materials cover the most recent
            financial market news.
          </h2>
        </div>
        <CommonSection />
        <div>
          <div className="grid col-span-3 items-center justify-center mt-4 mb-10 ">
            <Link
              to="/Insights"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Findout More
            </Link>
          </div>
        </div>
      </div>
      {/* next sec */}

    <RegisterSection/>

    </div>
  );
}

export default Home;
