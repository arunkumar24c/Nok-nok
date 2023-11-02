import React from 'react'

const Hero = () => {
  return (
    <div className="">
      <div className="brand-container">
        <div className="flex flex-col justify-center items-center text-center gap-5 px-5 py-10">
          <h1 className="leading-normal text-[1.6rem] xl:text-[5rem] lg:text-[4rem] md:text-[3rem] text-black">
            Make your knowledge <br />
            <span className="text-secondary">wonderful</span>
          </h1>
          <p className="xl:text-[24px] text-center font-medium text-black">
            Nok Nok is a Platform to Ask , Add and Create Interviews.
          </p>
          <p className="xl:text-[24px] text-center leading-normal font-medium text-black">
            Nok Nok is used to get some detailed informations about the
            interviews.
          </p>
          <div className='flex justify-center items-center gap-8 '>
            <button className='bg-secondary text-[16px] font-bold px-5 rounded-xl py-3 text-white'>Media House</button>
            <button className='bg-black text-[16px] font-bold px-5 rounded-xl py-3 text-white'>About Us</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero