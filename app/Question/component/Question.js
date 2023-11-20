"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Question = () => {
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
        <h1 className="py-5 text-center text-[35px]">Read Interview</h1>
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
                    has interviewed{" "}
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
            <div className="border shadow-md bg-secondary mx-4 my-4">
              <h2 className="px-4 py-4 text-white font-bold ">
                1. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <p className="px-4 py-4 bg-white">
                Mountain valley is the example tend to have near -vertical walls
                and a narrow channel but one on the plains the slopes are
                shallow and the channel is wide,
              </p>
            </div>
            {/* 2 */}
            <div className="border shadow-md bg-secondary mx-4 my-4">
              <h2 className="px-4 py-4 text-white font-bold ">
                2. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <p className="px-4 py-4 bg-white">
                Mountain valley is the example tend to have near -vertical walls
                and a narrow channel but one on the plains the slopes are
                shallow and the channel is wide,
              </p>
            </div>
            {/* 3 */}
            <div className="border shadow-md bg-secondary mx-4 my-4">
              <h2 className="px-4 py-4 text-white font-bold ">
                3. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <p className="px-4 py-4 bg-white">
                Mountain valley is the example tend to have near -vertical walls
                and a narrow channel but one on the plains the slopes are
                shallow and the channel is wide,
              </p>
            </div>
            {/* 4 */}
            <div className="border shadow-md bg-secondary mx-4 my-4">
              <h2 className="px-4 py-4 text-white font-bold ">
                4. what will be the bigger issuse is the appalling state of our
                defence in anything connected to the net?
              </h2>
              <p className="px-4 py-4 bg-white">
                Mountain valley is the example tend to have near -vertical walls
                and a narrow channel but one on the plains the slopes are
                shallow and the channel is wide,
              </p>
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

export default Question;
