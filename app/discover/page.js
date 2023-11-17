import Image from 'next/image';
import React from 'react'

const page = () => {
  const dataArray = [
    {
      src: "/assest/img11s.jpg",
      category: "Indian Economy",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "Value education",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "life Coaching",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "Tech Bang-world",
      followers: "5k Followers",
    },
    {
      src: "/assest/img11s.jpg",
      category: "Life Inflation",
      followers: "5k Followers",
    },
    
  ];
  return (
    <div>
      <div className="brand-container py-10">
        <h2 className="text-[30px] font-semibold flex gap-2 justify-center items-center py-5">
          <span className="text-secondary ">MediaHouse{" "}</span>{" "} Categories
        </h2>
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
                  <p className='text-black font-medium'>{data.category}</p>
                  <p className='text-secondary font-medium'>{data.followers}</p>
                </div>
                <button className="bg-secondary px-3 py-1 text-white rounded-lg">
                  Fellow
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="py-10 flex flex-col xl:flex-row md:flex-col lg:flex-row gap-8 justify-center items-center ">
          <button className="px-5 py-2 text-white bg-secondary rounded-lg">
            View More
          </button>
          <button className="px-5 py-2 text-white bg-secondary rounded-lg">
            View in List Mode{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default page