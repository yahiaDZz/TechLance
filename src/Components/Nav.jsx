import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="shadow-sm shadow-gray-700  bg-gradient-to-r from-lightBlue to-lightPurple border-gray-200 px-2 py-2.5 ">
  <div class="container flex justify-between mx-auto ">
    <a href="#" class="flex">
        <img src="https://i.ibb.co/0c6qmjh/logo.png" class="rounded-[50px] h-6 mr-3 sm:h-9" alt="Logo" />
    </a>
    <div>
      <ul class=" flex space-x-4 p-3 text-[20px] font-display ">
        <li>
          <a href="#" class="rounded-[30px] md:hover:border-2 border-white  py-3 pl-5 pr-4 text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="rounded-[30px] md:hover:border-2  border-white  py-3 pl-5 pr-4 text-white">About Us</a>
        </li>
        <li>
          <a href="#" class="rounded-[30px] md:hover:border-2  border-white  py-3 pl-5 pr-4 text-white">Agenda</a>
        </li>
        <li>
          <a href="#" class="rounded-[30px] md:hover:border-2  border-white  py-3 pl-5 pr-4 text-white">Speakers</a>
        </li>
        <li>
          <a href="#" class="rounded-[30px] md:hover:border-2  border-white  py-3 pl-5 pr-4 text-white">FAQ</a>
        </li>
        <li>
          <a href="#" class="rounded-[30px] md:hover:border-2  border-white  py-3 pl-5 pr-4 text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav