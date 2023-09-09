import React from "react";
import dahou from "../assets/dahou.png";
import mohamed from "../assets/mohamed.png";
import riad from "../assets/riad.png";
import triangles from "../assets/triangles.png"
const Speakers = () => {
  return (
    <div className="">
      <div className="mt-40 relative bg-tertiary h-44 flex items-center justify-center space-x-10">
        <div className=" animate-on-load translate-right rounded-lg flex flex-col items-center space-y-4 bg-primary h-72 p-10">
          <img src={dahou} className="w-44 h-44" />
          <h1 className="text-center text-3xl font-display font-bold text-white">
            Meziane Dahou
          </h1>
        </div>
        <div className=" animate-on-load translate-down rounded-lg flex items-center flex-col bg-primary h-96 p-14 space-y-10">
          <img src={mohamed} className="w-44 h-44" />
          <h1 className="text-center text-4xl font-display font-bold text-white">
            Mouzaoui Mohamed
          </h1>
          <h1 className="text-center text-xl font-display font-bold text-white">
            Graphics Designer
          </h1>
        </div>
        <div className=" animate-on-load translate-left space-y-4 rounded-lg flex items-center flex-col bg-primary h-72 p-10">
          <img src={riad} className="w-44 h-44" />
          <h1 className="text-center text-3xl font-display font-bold text-white">
            Ourab Riad
          </h1>
        </div>
      </div>
      <div
        className="fixed left-0 bottom-0"
      >
        <img src={triangles} className="scale-75"/>
      </div>
    </div>
  );
};

export default Speakers;
