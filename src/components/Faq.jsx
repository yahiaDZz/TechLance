import React, { useState } from "react";
import arrowup from "../assets/arrowup.png";
import cselogo from "../assets/cselogo.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
const Faq = () => {
  const [firstToggle, setFirstToggle] = useState(false);
  const [secondToggle, setSecondToggle] = useState(false);
  const [thirdToggle, setThirdToggle] = useState(false);
  const [fourthToggle, setFourthToggle] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-display font-bold">FAQ</h1>
        <div>
          <ul className="space-y-3">
            <li className=" animate-on-load translate-left flex items-center justify-center bg-primary text-white">
              <div className="py-2 px-10 text-xl">
                <h1 className="font-display font-semibold">
                  How can we participate ?
                </h1>
                <p
                  className={`animate-on-load translate-right text-lg font-display font-regular ${
                    firstToggle ? "text-white" : "text-transparent"
                  }`}
                >
                  You find the link to the registrations either on our Instagram
                  bio or in a pinned post on our facebook page{" "}
                </p>
              </div>
              <div>
                <button onClick={() => setFirstToggle(!firstToggle)}>
                  <img
                    src={arrowup}
                    className={`${firstToggle ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </li>
            <li className=" animate-on-load translate-right flex items-center justify-between bg-primary text-white">
              <div className="py-2 px-10 text-xl">
                <h1 className="font-display font-semibold">
                  How can we participate ?
                </h1>
              </div>
              <div>
                <button onClick={() => setFirstToggle(!firstToggle)}>
                  <img
                    src={arrowup}
                    className={`${firstToggle ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </li>
            <li className=" animate-on-load translate-left flex items-center justify-between bg-primary text-white">
              <div className="py-2 px-10 text-xl">
                <h1 className="font-display font-semibold">
                  How can we participate ?
                </h1>
              </div>
              <div>
                <button onClick={() => setFirstToggle(!firstToggle)}>
                  <img
                    src={arrowup}
                    className={`${firstToggle ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </li>
            <li className=" animate-on-load translate-right flex items-center justify-between bg-primary text-white">
              <div className="py-2 px-10 text-xl">
                <h1 className="font-display font-semibold">
                  How can we participate ?
                </h1>
              </div>
              <div>
                <button onClick={() => setFirstToggle(!firstToggle)}>
                  <img
                    src={arrowup}
                    className={`${firstToggle ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="-z-40 fixed w-[150rem] h-[150rem] -bottom-[139rem] rounded-full bg-gradient-to-bl from-primary via-secondary to-tertiary"></div>
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-4">
                  <img src={cselogo} className="w-24 h-40"/>
            </div>
            <div className="flex flex-col space-y-4 ">
                <h1 className="text-center text-2xl text-white font-display">CONTACT US</h1>
                  <ul className="flex justify-center items-center space-x-4">
                  <li>
                    <img src={linkedin} className="w-10 h-10"/>
                  </li><li>
                    <img src={facebook} className="w-10 h-10"/>
                  </li><li>
                    <img src={youtube} className="w-10 h-10"/>
                  </li><li>
                    <img src={instagram} className="w-10 h-10"/>
                  </li><li>
                    <img src={twitter} className="w-10 h-10"/>
                  </li>
                  </ul>
            </div>
            </div> 
      </div>
    </div>
  );
};

export default Faq;
