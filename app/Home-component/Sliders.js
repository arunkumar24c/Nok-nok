"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import "glider-js/glider.min.css";

const data = [
  {
    title: "First slide label",

    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    url: "/assest/img.png",
  },

  {
    title: "Second slide Label",

    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    url: "/assest/img.png",
  },
  {
    title: "third slide lable",

    content:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur. ",
    url: "/assest/img.png",
  },
];
const AUTOPLAY_INTERVAL = 4000; 
const Sliders = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    if (gliderRef.current) {
      gliderRef.current.scrollItem("next");
    }
  }, []);

  const handleGliderPrev = useCallback(() => {
    if (gliderRef.current) {
      gliderRef.current.scrollItem("prev");
    }
  }, []);

  useEffect(() => {
    let interval;

    if (gliderRef.current) {
      interval = setInterval(() => {
        if (gliderRef.current.page < data.length - 1) {
          gliderRef.current.scrollItem("next");
        } else {
          gliderRef.current.scrollItem(0);
        }
      }, AUTOPLAY_INTERVAL);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);


  return (
    <div className="relative container mx-auto h-full">
      <Glider
        className="glider-container"
        draggable
        hasDots={false}
        slidesToShow={1}
        scrollLock
        ref={gliderRef}
       
        
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Glider>
      {/* <div className="glider-arrows flex items-center justify-center gap-3">
        <button className="glider-arrow" onClick={handleGliderPrev}>
          <GoArrowLeft size={32} />
        </button>
        <button className="glider-arrow" onClick={handleGliderNext}>
          <GoArrowRight size={32} />
        </button>
      </div> */}
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-end gap-y-2 shadow-md border-2 relative bg-white/40 border-white rounded-md">
        <div>
          <Image
            src={props.url}
            width={200}
            height={400}
            className="w-full h-[600px] bg-transparent"
            alt="#"
          />
        </div>
        <div className="flex flex-col gap-2 absolute bottom-4 ">
          <p className="text-xl text-white px-4 font-bold capitalize ">
            {props.title}
          </p>
          <p className="text-md text-white px-5 font-semibold font-work-sans mt-4 mb-6">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
