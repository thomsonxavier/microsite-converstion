import React from "react";
import { Link } from "react-router-dom";

function RegisterSection() {
  return (
    <div className="flex  w-full bg-slate-200 h-full mb-10 ">
      <div className=" w-1/2 relative mx-12 my-auto   ">
        <div>
          <div className=" mx-auto max-w-sm ">
            <span className="text-xs">Events &amp; Webinars</span>
            <h2 class="">
              Register now to <br />
              upcoming live and on <br />
              demand webcasts.
            </h2>
            <Link
              to='/Events'
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            
            >
              VIEW ALL EVENTS &amp; WEBINARS
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-1/2 relative ">
        <div>
            <img src="https://www.citibank.co.uk/gwm/images/events-img.jpg" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default RegisterSection;
