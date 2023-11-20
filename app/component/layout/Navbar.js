"use client"
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary">
      <nav className="flex items-center brand-container justify-between flex-wrap  px-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
          <div className="flex gap-2 cursor-pointer">
            <Link href="/">
              <h1 className="text-[22px] font-bold text-white">
                Nok <span className="text-primary">Nok</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block " : "hidden"
          }`}
        >
          <div className="text-[18px] font-bold lg:flex-grow gap-5">
            <Link href="/getinterview">
              <p
                
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
              >
                Give Interview
              </p>{" "}
            </Link>
            <Link href="/media">
              <p
                
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
              >
                Media House
              </p>
            </Link>
            <Link href="/contact">
              <p
                
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
              >
                Contact Us
              </p>
            </Link>
          </div>
          <div className="py-2">
            <Link href="/Login">
              <button className="inline-flex items-center text-secondary border-0 py-2 px-4 font-medium bg-white rounded-xl">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default App;
