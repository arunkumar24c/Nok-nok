import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
const Card = () => {
  return (
    <div>
      <div className="brand-container px-10 py-10">
        <div className="bg-secondary shadow-md rounded-lg ">
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between px-10 items-center py-10 ">
            <div className="flex flex-col gap-2 py-10 px-7">
              <h1 className="font-bold text-[2rem] text-white">
                Ready to get started?
              </h1>
              <p className="font-medium text-[18px] text-white">
                {" "}
                We have a generous free tier available to get you started right
                away.
              </p>
            </div>
            <div className="px-7 py-10">
              <button className="shadow-lg font-semibold text-[14px] rounded-lg bg-white flex px-5 py-4 justify-center items-center gap-4 transform transition-transform hover:scale-110 hover:bg-blue-200 hover:text-white hover:shadow-xl duration-300 ease-in-out">
                Get started for free
                <span className="ml-2">
                  <MdArrowRightAlt size={30} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card