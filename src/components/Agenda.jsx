import React from "react";

const Agenda = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 flex items-center h-4 bg-tertiary">
          <h1 className="uppercase text-5xl font-display font-bold">Agenda</h1>
        </div>
        <ul className="h-[170vh] w-2 flex flex-col justify-between items-center absolute bg-red-400">
          <li className=" animate-on-load translate-up bg-primary w-18 h-18 rounded-full flex items-center justify-center p-2">
            <div className="border-2 border-dashed border-tertiary rounded-full w-12 h-12 flex items-center justify-center">
              <div className="bg-tertiary rounded-full w-4 h-4"></div>
            </div>
          </li>
          <li className=" animate-on-load translate-down mt-28 bg-primary w-18 h-18 rounded-full flex items-center justify-center p-2">
            <div className="border-2 border-dashed border-tertiary rounded-full w-12 h-12 flex items-center justify-center">
              <div className="bg-tertiary rounded-full w-4 h-4"></div>
            </div>
          </li>
          <li className="mt-36 bg-primary w-18 h-18 rounded-full flex items-center justify-center p-2">
            <div className="border-2 border-dashed border-tertiary rounded-full w-12 h-12 flex items-center justify-center">
              <div className="bg-tertiary rounded-full w-4 h-4"></div>
            </div>
          </li>
          <li className="bg-primary w-18 h-18 rounded-full flex items-center justify-center p-2">
            <div className="border-2 border-dashed border-tertiary rounded-full w-12 h-12 flex items-center justify-center">
              <div className="bg-tertiary rounded-full w-4 h-4"></div>
            </div>
          </li>
        </ul>
        <ul className="mt-10 space-y-10">
          <li className="flex justify-center space-x-24">
            <div className=" animate-on-load translate-right bg-primary h-20 flex items-center text-white font-display font-semibold py-4 rounded-lg">
              <ul className=" w-96">
                <li className="text-center text-2xl">DAY1 : Mobile dev</li>
                <li className="text-center text-2xl">04/03/2023</li>
              </ul>
            </div>
            <div className=" animate-on-load translate-left bg-tertiary text-black font-display font-semibold py-4 rounded-lg">
              <ul className="px-[10%] space-y-4">
                <li>08:30 - 09:00 check-in</li>
                <li>09:00 - 09:30 cérémonie d'ouverture</li>
                <li>09:30 - 11:00 Conférence</li>
                <li>11:00 - 12:00 Lunch break</li>
                <li>12:00 - 15:00 Compétition</li>
                <li>15:00 - 15:30 Coffee break</li>
                <li>15:30 - 16:30 Discussion des solutions</li>
                <li>16:30 - 17:30 Cérémonie de clôture et annoncer gangnant</li>
              </ul>
            </div>
          </li>
            <div className="absolute w-32 h-32 bg-primary rounded-full bottom-9 z-40 -left-20"/>
            <div className="absolute w-44 h-32 -rotate-12 bg-tertiary bottom-10 -left-9 rounded-b-full"/>
            <div className="absolute w-10 h-10 border-2 border-dashed border-secondary rounded-full bottom-9 z-40 left-20"/>
          <li className="flex justify-center space-x-24">
            <div className="bg-tertiary text-black font-display font-semibold py-4 rounded-lg">
              <ul className="px-[10%] space-y-4">
                <li>08:30 - 09:00 check-in</li>
                <li>09:00 - 09:30 cérémonie d'ouverture</li>
                <li>09:30 - 11:00 Conférence</li>
                <li>11:00 - 12:00 Lunch break</li>
                <li>12:00 - 15:00 Compétition</li>
                <li>15:00 - 15:30 Coffee break</li>
                <li>15:30 - 16:30 Discussion des solutions</li>
                <li>16:30 - 17:30 Cérémonie de clôture et annoncer gangnant</li>
              </ul>
            </div>
            <div className="bg-primary h-20 flex items-center text-white font-display font-semibold py-4 rounded-lg">
              <ul className=" w-[22rem]">
                <li className="text-center text-2xl">DAY2 : Graphic Design</li>
                <li className="text-center text-2xl">11/03/2023</li>
              </ul>
            </div>
          </li>
            <div className="absolute w-32 h-32 bg-primary rounded-full -bottom-44 z-40 -right-20"/>
            <div className="absolute w-44 h-32 -rotate-12 bg-tertiary -bottom-44 -right-9 rounded-b-full"/>
            <div className="absolute w-10 h-10 border-2 border-dashed border-secondary rounded-full -bottom-44 z-40 right-20"/>
          <li className="flex justify-center space-x-24">
            <div className="bg-primary h-20 flex items-center text-white font-display font-semibold py-4 rounded-lg">
              <ul className=" w-96">
                <li className="text-center text-2xl">DAY3 : Video Editing</li>
                <li className="text-center text-2xl">18/03/2023</li>
              </ul>
            </div>
            <div className="bg-tertiary text-black font-display font-semibold py-4 rounded-lg">
              <ul className="px-[10%] space-y-4">
                <li>08:30 - 09:00 check-in</li>
                <li>09:00 - 09:30 cérémonie d'ouverture</li>
                <li>09:30 - 11:00 Conférence</li>
                <li>11:00 - 12:00 Lunch break</li>
                <li>12:00 - 15:00 Compétition</li>
                <li>15:00 - 15:30 Coffee break</li>
                <li>15:30 - 16:30 Discussion des solutions</li>
                <li>16:30 - 17:30 Cérémonie de clôture et annoncer gangnant</li>
              </ul>
            </div>
          </li>
          <div className="absolute w-32 h-32 bg-primary rounded-full -bottom-[30rem] z-40 -left-20"/>
            <div className="absolute w-44 h-32 -rotate-12 bg-tertiary -bottom-[30rem] -left-9 rounded-b-full"/>
            <div className="absolute w-10 h-10 border-2 border-dashed border-secondary rounded-full -bottom-[30rem] z-40 left-20"/>
          
        </ul>
      </div>
    </div>
  );
};

export default Agenda;
