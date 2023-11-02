import React from 'react'
import { BsSnow } from "react-icons/bs";
const Interview = () => {
  
  return (
    <div>
      <div className="brand-container py-5">
        <div className="flex flex-col">
          <div className="text-center flex flex-col gap-4 py-10">
            <h1 className="text-secondary text-[3rem] font-bold ">
              Top Interviewers
            </h1>
            <p className="text-center font-medium text-black leading-normal ">
              “Our task, regarding creativity, is to help children climb their
              own mountains,
              <br /> as high as possible. No one can do more.”
            </p>
          </div>
          {/* 2 */}
          <div className="py-10">
            <div className="flex flex-col xl:flex-row lg:flex-row justify-between items-center gap-8 py-10 ">
              {/* 1st */}
              <div className="flex justify-center items-center flex-col py-10 cursor-pointer">
                <div className="relative group">
                  {/* Icon card */}
                  <div className="bg-secondary flex justify-center items-center w-[15rem] h-[15rem] transition-transform duration-700 transform translate-y-0 group-hover:translate-y-[-100px] shadow-md p-4 absolute z-50">
                    <BsSnow className="" size={45} />
                  </div>

                  {/* Hover card */}
                  <div className="flex flex-col justify-center items-center transition-transform duration-700 transform translate-y-0 group-hover:translate-y-[100px] bg-white shadow-md h-[15rem] p-4 w-[15rem] relative z-10">
                    <h3 className="text-sm font-bold">Hello there!</h3>
                    <p className="text-sm">Trust yourself and keep going.</p>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="flex justify-center items-center flex-col py-10 ">
                <div className="relative group cursor-pointer">
                  {/* Icon card */}
                  <div className="bg-secondary flex justify-center items-center w-[15rem] h-[15rem] transition-transform duration-700 transform translate-y-0 group-hover:translate-y-[-100px] shadow-md p-4 absolute z-50">
                    <BsSnow className="" size={45} />
                  </div>

                  {/* Hover card */}
                  <div className="flex flex-col justify-center items-center transition-transform duration-700 transform translate-y-0 group-hover:translate-y-[100px] bg-white shadow-md h-[15rem] p-4 w-[15rem] relative z-10">
                    <h3 className="text-sm font-bold">Hello there!</h3>
                    <p className="text-sm">Trust yourself and keep going.</p>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="flex justify-center items-center flex-col py-10 ">
                <div className="relative group cursor-pointer">
                  {/* Icon card */}
                  <div className="bg-secondary flex justify-center items-center w-[15rem] h-[15rem] transition-transform duration-700 transform translate-y-0 group-hover:translate-y-[-100px] shadow-md p-4 absolute z-50">
                    <BsSnow className="" size={45} />
                  </div>

                  {/* Hover card */}
                  <div className="flex flex-col justify-center items-center transition-transform duration-700 transform translate-y-0 group-hover:translate-y-[100px] bg-white shadow-md h-[15rem] p-4 w-[15rem] relative z-10">
                    <h3 className="text-sm font-bold">Hello there!</h3>
                    <p className="text-sm">Trust yourself and keep going.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview