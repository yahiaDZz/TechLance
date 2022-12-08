import React from "react";

const Speakers = () => {
  return (
    <div>
      <div class="text-[30px] mt-[100px] space-x-[50px] items-center w-[1500px] h-[250px] bg-lightBlue justify-content rounded-[10px] flex justify-center ">
        <div class="text-center text-white font-display rounded-[10px] w-[200px] h-[300px] bg-lightPurple">
          <img
            class="p-5 rounded-[300px] "
            src="https://i.ibb.co/Wfstr0h/meziane-dahou.jpg"
            alt="meziane-dahou"
            border="0"
          ></img>
          <h1>Meziane Dahou</h1>
        </div>
        <div class="text-center text-white font-display rounded-[10px] w-[250px] h-[400px] bg-lightPurple">
          <img
            class=" mt-10 ml-6 w-[200px] h-[200px] rounded-[300px] "
            src="https://i.ibb.co/vXjjRJ3/mohamed.jpg"
            alt="mohamed"
            border="0"
          ></img>
          <h1>Mouzaoui Mohamed</h1>
          <br/>
          <h1>Graphics Designer</h1>
        </div>
        <div class="text-center text-white font-display rounded-[10px] w-[200px] h-[300px] bg-lightPurple">
          
          <img
            class=" mt-5 ml-6 w-[150px] h-[150px] rounded-[300px] "
            src="https://i.ibb.co/5jdPpTL/mesut-cicen-n5-RWBk-OM1-Pk-unsplash.jpg"
            alt="meziane-dahou"
            border="0"
          ></img>
          <h1>Ourab Riad</h1>
        </div>
      </div>
      <div>
        <img
          class="w-[200px]"
          src="https://i.ibb.co/R3GFs12/trig.png"
          alt="trig"
          border="0"
        ></img>
      </div>
    </div>
  );
};

export default Speakers;
