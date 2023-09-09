import React from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import android from "../assets/android.png";
import designtools from "../assets/designtools.png";
const Us = () => {
  return (
    <div>
      <div className="space-y-4 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          <img src={logo} className=" animate-on-load translate-right"/>
          <div className="h-4 flex items-center bg-tertiary">
            <h1 className="text-5xl font-display font-bold  animate-on-load translate-left">
              What is TechLance?
            </h1>
          </div>
        </div>
        <div className=" animate-on-load translate-right">
          <p className="px-32 font-display font-semibold text-2xl">
            Techlance is a 3-day event , with one day per week, mainly focused
            on a series of finalized conferences with competition in different
            technological fields (web development, design, video editing,...).
            <br />
            The conferences will have different professional and academic
            purposes, including familiarization of students with the world of
            freelancing as well as different strategies to achieve a balance
            between studies and freelancing. There will also be workshops on how
            to deal with the client.
          </p>
        </div>
        <div className="flex space-x-8 items-center">
          <div className="bg-primary rounded-full p-4  animate-on-load translate-up">
            <img src={designtools} className="w-32" />
          </div>
          <div className="bg-primary rounded-full p-4  animate-on-load translate-down">
            <img src={android} className="w-32" />
          </div>
          <div className="bg-primary rounded-full p-4  animate-on-load translate-up">
            <img src={google} className="w-32" />
          </div>
        </div>
      </div>
      <div className="fixed -left-16 w-[25rem] h-3 bg-primary rounded-full rotate-45"/>
      <div className="fixed -left-16 -bottom-12 w-[25rem] h-3 bg-secondary rounded-full rotate-45"/>
      <div className="fixed -left-16 -bottom-[6rem] w-[25rem] h-3 bg-tertiary rounded-full rotate-45"/>

    </div>
  );
};

export default Us;
