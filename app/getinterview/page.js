"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const page = () => {
  const [showFull, setShowFull] = useState(false);
  const [arrowRotate, setArrowRotate] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
    setArrowRotate(!arrowRotate);
  };

  const content = `Nok Nok is a Platform to Ask, Add and Create Interviews. 
    Nok Nok is used to get some detailed information about the interviews. 
    Nok Nok is a Platform to Ask, Add and Create Interviews. 
    Nok Nok is used to get some detailed information about the interviews. 
    Nok Nok is a Platform to Ask, Add and Create Interviews. 
    Nok Nok is used to get some detailed information about the interviews.
    Nok Nok is a Platform to Ask, Add and Create Interviews. 
    Nok Nok is used to get some detailed information about the interviews. 
    Nok Nok is a Platform to Ask, Add and Create Interviews. 
    Nok Nok is used to get some detailed information about the interviews.`;

  const truncatedContent = content.split(" ").slice(0, 50).join(" ");
  const displayContent = showFull ? content : truncatedContent + "...";
  return (
    <div>
      <div className="brand-container py-10 px-5">
        <div className="flex flex-col justify-center items-center py-8 gap-4">
          <h1 className="text-[45px] text-secondary">Give Interview</h1>
          <p className="text-[30px] text-center font-medium">
            Below are some of the interview questions under various subjects.
            Please give your interview by answering the questions under each
            interview
          </p>
        </div>
        <div className="flex flex-col shadow-lg xl:flex-row lg:flex-row md:flex-col gap-4 py-8 px-5">
          {/* left container */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Image
                  src={"/assest/img11s.jpg"}
                  width={60}
                  height={60}
                  className="rounded-xl"
                  alt="img"
                />
                <div>
                  <p>Rock forest</p>
                  <p>
                    Give interview{" "}
                    <span className="text-secondary">
                      @ Roven Harry br curvee
                    </span>
                  </p>
                </div>
              </div>
              <Image
                src={"/assest/img11s.jpg"}
                width={200}
                height={200}
                className="w-full"
                alt="imgs"
              />
              <h2>
                Do you think that the Mountain valley need to be reversed by the
                by our indian Govt{" "}
              </h2>
            </div>
            <div>
              <h2 className="flex gap-2 items-center">
                Read Description{" "}
                <span
                  className="cursor-pointer"
                  onClick={toggleShowFull}
                  style={{
                    transition: "transform 0.3s ease",
                    transform: arrowRotate ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </h2>
              <p>{displayContent}</p>
            </div>
          </div>
          {/* right container */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full  ">
            <h1>Question</h1>
            <div className="border shadow-md bg-secondary mx-4 my-4 flex flex-col gap-2">
              <h2 className="px-4 py-4 text-white font-bold ">
                4. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <textarea
                className="px-4 py-4  bg-white w-70 "
                placeholder="Type your answer"
              ></textarea>
              <button
                type="submit"
                className="py-3 my-3 mx-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send message
              </button>
            </div>
            {/* 2 */}
            <div className="border shadow-md bg-secondary mx-4 my-4 flex flex-col gap-2">
              <h2 className="px-4 py-4 text-white font-bold ">
                4. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <textarea
                className="px-4 py-4  bg-white w-70 "
                placeholder="Type your answer"
              ></textarea>
              <button
                type="submit"
                className="py-3 my-3 mx-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send message
              </button>
            </div>
            {/* 3 */}
            <div className="border shadow-md bg-secondary mx-4 my-4 flex flex-col gap-2">
              <h2 className="px-4 py-4 text-white font-bold ">
                4. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <textarea
                className="px-4 py-4  bg-white w-70 "
                placeholder="Type your answer"
              ></textarea>
              <button
                type="submit"
                className="py-3 my-3 mx-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send message
              </button>
            </div>
            {/* 4 */}
            <div className="border shadow-md bg-secondary mx-4 my-4 flex flex-col gap-2">
              <h2 className="px-4 py-4 text-white font-bold ">
                4. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <textarea
                className="px-4 py-4  bg-white w-70 "
                placeholder="Type your answer"
              ></textarea>
              <button
                type="submit"
                className="py-3 my-3 mx-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6">
          <button className=" px-4 py-2 bg-secondary text-white">
            Request Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
