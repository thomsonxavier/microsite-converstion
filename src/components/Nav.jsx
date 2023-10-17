import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (

    <div>
    <div className="top-container bg-gray-200 flex text-xs h-8 items-center ">
           <p className="ml-5">CITI UNITED KINGDOM</p>
     </div>
   <header className=" ">
     <div className="flex justify-between items-center p-5 ">
       <img src="https://www.citibank.co.uk/gwm/images/citi-logo.svg" alt="" className="mr-5 w-16"/>
         <div className=" gap-4 mr-auto ml-10 hidden lg:flex text-xs font-normal tracking-wide">
         <Link to="/">Home</Link>
            <Link to="/Insights">Insights</Link>
            <Link to="/Events">Events & webinars</Link>
            <Link to="/Podcast">Podcast</Link>

         </div>
           <img src="https://www.citibank.co.uk/gwm/images/menu-bar.png" alt="" className="ml-auto mr-7"/>
        
        <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" className="w-5"/> 
     </div>
   </header>
   </div>

  
  )
}

export default Nav