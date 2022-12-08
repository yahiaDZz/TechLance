import React from "react";

const About = () => {
  return (
    <div>
      <div class="mt-10 mx-auto flex space-x-4">
        <img
          src="https://i.ibb.co/0c6qmjh/logo.png"
          class="ml-[200px] h-[200px] w-[200px]"
        ></img>
        <div class="w-[550px] text-center text-[70px] text-darkish   mt-10 font-display bg-rose align-center h-[40px]">
          <h1 class="">What is TechLance ?</h1>
        </div>
      </div>
      <br/>
      <br/>
      <div class="mx-auto flex justify-between container">
        <ul>
          <li>
            <img
              class="w-[200px] h-[200px]"
              src="https://i.ibb.co/dKLZtVY/pen.png"
              alt="pen"
              border="0"
            ></img>
          </li>
          <li><h1 class="text-center font-display text-lightPurple text-[40px]">Graphic Design</h1></li>
        </ul>
        <ul>
            <li>
        <img
          class="w-[200px] h-[200px]"
          src="https://i.ibb.co/XyX5vYG/ANDR.png"
          alt="ANDR"
          border="0"
        ></img></li>
        <li>
            <h1 class="text-center font-display text-lightPurple text-[40px]">Mobile Dev</h1>
        </li>
        </ul>
        <ul>
            <li>
        <img
          class="w-[200px] h-[200px]"
          src="https://i.ibb.co/TBzpW6F/G.png"
          alt="G"
          border="0"
        ></img></li>
        <li>
            <h1 class="text-center font-display text-lightPurple text-[40px]">Video Editing</h1>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
