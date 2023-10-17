import React from 'react';
import Hero from "../components/Hero"; // Adjust the import path


import Tabs from "../components/Tabs";
import { hero } from "../Const";

function Podcast() {
  return (
    <div>
        
        <Hero data={hero}/>
        <Tabs/>
    </div>
  );
}

export default Podcast;
