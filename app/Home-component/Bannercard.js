import Image from "next/image";
import React from "react";
import Sliders from "./Sliders";
import Slide1 from "./Slide1";

const cardData = [
  {
    id: 1,
    title: "Education",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
  },
  {
    id: 2,
    title: "Education",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
  },
];

const Bannercard = () => {
  return (
    <div>
      <div className="brand-container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  px-5 py-10 gap-2">
          {/* 1st card */}
          <div className="hidden xl:block lg:block md:block ">
            <div className="flex flex-col gap-2 ">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="relative h-[300px] rounded-md overflow-hidden group"
                >
                  <Image
                    width={200}
                    height={300}
                    className="w-full transition-transform duration-500 transform group-hover:translate-y-0 h-full"
                    src="/assest/img.png"
                    alt="Education Image"
                  />
                  <div className="absolute text-white px-4 top-[15px] xl:top-[29px] lg:top-[73px] md:top-[20px] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 2xl:top-[70px] w-full">
                    <h1 className="py-4">{card.title}</h1>
                    <p className="text-[16px] text-white">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 2nd card */}
          <div className="h-auto hidden xl:block">
            <Sliders />
          </div>
          {/* 3rd card */}
          <div className="flex flex-col gap-2">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="relative h-[300px] rounded-md overflow-hidden group"
              >
                <Image
                  width={200}
                  height={300}
                  className="w-full transition-transform duration-500 transform group-hover:translate-y-0 h-full"
                  src="/assest/img.png"
                  alt="Education Image"
                />
                <div className="absolute text-white px-4 top-[15px] xl:top-[29px] lg:top-[73px] md:top-[20px] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 2xl:top-[70px] w-full">
                  <h1 className="py-4">{card.title}</h1>
                  <p className="text-[16px] text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 4th card */}
          <div className="w-full xl:hidden col-span-2">
            <Slide1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannercard;
