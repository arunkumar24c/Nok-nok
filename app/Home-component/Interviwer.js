import Link from "next/link";
import React from "react";

const Interviwer = () => {
  return (
    <div>
      <div className="brand-container py-5">
        <div className="flex flex-col">
          <div className="text-center flex flex-col gap-4 py-10">
            <h1 className="text-secondary text-[3rem] font-bold ">
              Top Interview
            </h1>
            <p className="text-center font-medium text-black leading-normal ">
              In the interview, we inquire about the recent issues of sudden
              rapid increase in prices of fuel,
              <br /> petrol and LPG and its effect on people.
            </p>
          </div>
          {/* 2 */}
          <div className="">
            <Link href="/Tranding">
              <h1 className="text-secondary cursor-pointer text-right hover:text-[24px] ">
                View all
              </h1>
            </Link>
            <div className="flex flex-col xl:flex-row lg:flex-row justify-between items-center gap-8 py-10">
              {/* 1 */}

              <div className="flex bg-white justify-center items-center cursor-pointer">
                <div className="shadow-md flex flex-col h-[331px] transition-transform duration-300 ease-out w-[270px] justify-center items-center my-5 overflow-hidden relative group hover:bg-secondary hover:text-black">
                  <div className="bg-secondary rounded-full w-[121px] h-[121px] transition-transform duration-300 top-[92px] absolute ease-out z-50 group-hover:bg-secondary"></div>
                  <div className="circle transition-transform duration-300 ease-out w-[130px] items-center bg-white rounded-full h-[130px] justify-center"></div>
                  <p className="text-black ">Education</p>
                </div>
              </div>
              {/* 2nd */}
              <div className="flex bg-white justify-center items-center cursor-pointer">
                <div className="shadow-md flex flex-col h-[331px] transition-transform duration-300 ease-out w-[270px] justify-center items-center my-5 overflow-hidden relative group hover:bg-secondary hover:text-black">
                  <div className="bg-secondary rounded-full w-[121px] h-[121px] transition-transform duration-300 top-[92px] absolute ease-out z-50 group-hover:bg-secondary"></div>
                  <div className="circle transition-transform duration-300 ease-out w-[130px] items-center bg-white rounded-full h-[130px] justify-center"></div>
                  <p className="text-black ">Education</p>
                </div>
              </div>
              {/* 3rd */}
              <div className="flex bg-white justify-center items-center cursor-pointer">
                <div className="shadow-md flex flex-col h-[331px] transition-transform duration-300 ease-out w-[270px] justify-center items-center my-5 overflow-hidden relative group hover:bg-secondary hover:text-black">
                  <div className="bg-secondary rounded-full w-[121px] h-[121px] transition-transform duration-300 top-[92px] absolute ease-out z-50 group-hover:bg-secondary"></div>
                  <div className="circle transition-transform duration-300 ease-out w-[130px] items-center bg-white rounded-full h-[130px] justify-center"></div>
                  <p className="text-black ">Education</p>
                </div>
              </div>
              {/* 4th */}
              <div className="flex bg-white justify-center items-center">
                <div className="shadow-md flex flex-col h-[331px] transition-transform duration-300 ease-out w-[270px] justify-center items-center my-5 overflow-hidden relative group hover:bg-secondary hover:text-black">
                  <div className="bg-secondary rounded-full w-[121px] h-[121px] transition-transform duration-300 top-[92px] absolute ease-out z-50 group-hover:bg-secondary"></div>
                  <div className="circle transition-transform duration-300 ease-out w-[130px] items-center bg-white rounded-full h-[130px] justify-center"></div>
                  <p className="text-black ">Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviwer;
