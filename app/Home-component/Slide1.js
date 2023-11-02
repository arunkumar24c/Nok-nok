"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import "glider-js/glider.min.css";
import Image from "next/image";

const data = [
  {
    name: "First slide",
    content:
      "An interview is a structured conversation where one participant asks questions, and the other provides answers.",
    url: "/assest/img.png",
  },
  {
    name: "Second slide",
    content:
      "No matter what happens, use it as an experience to grow from. Best of luck!",
    url: "/assest/img.png",
  },
  {
    name: "Third slide",
    content:
      "As you go into this interview, understand that fate is in your hands. Believe in yourself and your potential, and success shall be yours. Good luck, my friend!",
    url: "/assest/img.png",
  },
];

const AUTOPLAY_INTERVAL = 4000;

const Slide1 = () => {
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
    <div className="relative container mx-auto py-5">
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
              slidesToShow: 1,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
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
    <div className="brand-container  py-10">
      <div className="relative">
        <div>
          <Image
            src={props.url}
            width={200}
            height={400}
            className="w-full h-[600px] bg-transparent"
            alt="#"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-7 py-10 px-5 absolute top-[280px]">
          <h1 className="text-white px-2">{props.name}</h1>
          <p className="text-white px-2">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
