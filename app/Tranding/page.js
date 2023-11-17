"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const dataArray = [
    {
      src: "/assest/img11s.jpg",
      category: "Economy",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "Technology",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "Nature",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "Nature",
      followers: "5k Followers",
    },
  ];

  const handleHover = (index) => {
    setHoveredCard(index);
  };

  const handleHoverLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div>
      <div className="brand-container py-10">
        <div className="py-5">
          <div className="flex justify-between py-8 ">
            <h2 className="text-[30px] font-semibold ">
              <span className="text-secondary">Top Trading</span> Interview
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {dataArray.map((data, index) => (
              <div
                key={index}
                className="relative overflow-hidden transform transition-transform duration-300"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverLeave}
              >
                <div
                  className={`bg-white rounded-xl shadow-xl ${
                    hoveredCard === index
                      ? "scale-105 rotate-[-5deg] shadow-2xl"
                      : "scale-100 rotate-0 shadow-md"
                  } transition-all duration-300`}
                >
                  <Image
                    src={data.src}
                    width={200}
                    height={200}
                    className="w-full"
                    alt="img"
                  />
                  <div className="flex flex-col justify-between gap-4 px-3 py-5">
                    <div>
                      <p>{data.category}</p>
                      <p>{data.followers}</p>
                    </div>
                    <Link href="/Question">
                      <button className="bg-secondary px-3 py-1 text-white rounded-lg">
                        Question & Answer
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
