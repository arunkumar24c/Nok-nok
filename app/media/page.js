import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const dataArray = [
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
  return (
    <div>
      <div className="brand-container px-5 py-5">
        <div className="flex flex-col justify-center items-center py-10 gap-4">
          <h1 className="text-[45px]">Media House</h1>
          <h2 className="text-[30px] text-center font-semibold text-secondary">
            Get Connected to the Community
          </h2>
          <p className="text-[18px] font-medium text-black leading-normal text-center px-5">
            Below are some of the interview questions under various subjects.
            Please give your interview by answering the questions under each
            interview
          </p>
          <div className="py-10 flex flex-col justify-center items-center gap-4 w-full px-5">
            <h1 className="text-[45px]">
              Discover <span className="text-secondary">Media House</span>{" "}
            </h1>
            <div className="py-5">
              <div className="flex justify-between py-8 ">
                <h2 className="text-[30px] font-semibold ">
                  <span className="text-secondary">MediaHouse</span> Categories
                </h2>
                <Link href="/discover">
                  <p className="bg-secondary flex items-center px-4 py-2 text-white rounded-lg text-center">
                    view all
                  </p>
                </Link>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                {dataArray.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center gap-4 shadow-md"
                  >
                    <Image
                      src={data.src}
                      width={200}
                      height={200}
                      className="w-full"
                      alt="img"
                    />
                    <div className="flex justify-between gap-4 px-3 py-5">
                      <div>
                        <p>{data.category}</p>
                        <p>{data.followers}</p>
                      </div>
                      <button className="bg-secondary px-3 py-1 text-white rounded-lg">
                        Fellow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
