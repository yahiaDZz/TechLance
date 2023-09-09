import React from "react";
import about from "../assets/about.png";
const About = () => {
  return (
    <div>
      <div className="mr-20 px-8 flex items-center h-[80vh] w-screen justify-between">
        <div className="flex flex-col items-center px-10 w-[100vh]">
          {/* text */}
          <div className="w-72 mb-10 h-4 flex items-center justify-center  bg-tertiary"><h1 className=" text-center text-5xl font-bold animate-on-load translate-down">ABOUT CSE</h1></div>
          <p className="text-3xl font-secondary w-full animate-on-load translate-right">
            CSE -Club Scientifique de l'ESI- is a student club at the Higher
            National School of Computer Science, Algiers. It is created for
            computer science, high technology, robotics, design and anything
            else technology-related enthusiasts. CSE's activities made it
            establish itself on a national & international scale and became one
            of the country's largest & most active clubs.
          </p>
        </div>
        <div className="border-[10px] border-pink-200 rounded-lg">
          {/* image */}
          <img src={about}  className="w-full animate-on-load translate-left"/>
        </div>
      </div>
      <div className="fixed w-20 h-20 rounded-full bottom-12 z-10 -right-12 bg-primary"/>
      <div className="fixed w-32 h-32 -bottom-10 z-0  -right-8 rotate-[2deg] bg-pink-300"/>
      <div className="fixed w-16 h-16 rounded-full bottom-2 z-10 right-14 bg-transparent border-dashed border-8 border-primary"/>
      
    </div>
  );
};

export default About;
