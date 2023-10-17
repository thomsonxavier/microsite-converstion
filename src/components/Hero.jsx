import React from "react";
import "./hero.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


function Hero({ data, type,href  }) {
  
  return (
    <div className="container mt-14">
      <div className="flex max-lg:flex-col-reverse gap-5 w-full">
        <div className="lg:w-2/5 w-full">
          <div className="px-7 w-full">
            <Splide
              options={{
                arrows: false,
                autoplay: true,
                perPage: 1,
                pagination: false,
                rewind: true,
                gap: "1rem",
              }}
            >
              {data.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="insightSliderItem">
                    <div dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div dangerouslySetInnerHTML={{ __html: item.stitle }} />
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          {type == 'home' &&
            <div className="grid px-7 col-span-3 items-center justify-start mt-4 mb-10">
              <a
               href={href}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Find Out More
              </a>
            </div>
          }
        </div>
        <div className="lg:w-3/5 block w-full">
          <img
            src="https://www.citibank.co.uk/gwm/images/podcast-banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
