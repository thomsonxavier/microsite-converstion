import React from 'react';
import Hero from "../components/Hero"; // Adjust the import path

import Nav from '../components/Nav'
import EventTab from "../components/EventTab";
import { Eventhero } from "../Const";

function Events() { 
  return (
    <div>
     
        <Hero data={Eventhero}/>
       <EventTab/>
    </div>
  )
}

export default Events