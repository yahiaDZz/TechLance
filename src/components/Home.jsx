import React from "react";
import home from "../assets/home.png"
import bag from "../assets/bag.png"
import location from "../assets/location.png"
const Home = () => {
  return (
    <div>
      <div className="rounded-bl-[10rem] -rotate-12 bottom-56 -left-44 fixed w-[110vw] h-[110vw] bg-gradient-to-bl from-primary via-secondary to-tertiary -z-10" />
        <div className="py-4 px-20 flex justify-between items-center w-screen">
            <div className="text-white font-display text-5xl space-y-12 mt-14">
            {/* text */}
            <h1 className="text-white font-display text-8xl ml-10 animate-on-load translate-right">TechLance</h1>
            <ul className="space-y-4 mt-4 text-2xl font-thin">
            <li className="flex items-center space-x-2 animate-on-load translate-right"><img src={bag} alt="date" className="w-6 h-6 items-center"/><h1>MARCH 4TH,2022</h1></li>
            <li className="flex items-center space-x-2 animate-on-load translate-right"><img src={location} alt="location" className="w-6 h-6"/><h1>Ecole Nationale Supèrieure d'Informatique Oued Smar - Alger</h1></li>
            </ul>
            <button className="animate-on-load translate-up px-10 py-4 rounded-full mt-10 bg-purple-400 text-black text-5xl font-bold hover:bg-secondary hover:scale-95 hover:text-white transition duration-200 ease-in-out">GET STARTED</button>
            </div>
            <div className="animate-on-load translate-left">
                {/* image */}
                <img src={home} alt="logo" className="w-96 h-96"/>
            </div>
        </div>
        <div className="animate-on-load translate-left rounded-l-full w-96 h-2 right-0 fixed bg-tertiary"/>
        
        <div className="animate-on-load translate-up rounded-l-full w-[28rem] h-2 mt-4 right-0 fixed bg-secondary"/>
    </div>
  );
};

export default Home;
