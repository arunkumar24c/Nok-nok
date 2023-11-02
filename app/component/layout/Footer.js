import Link from "next/link";
import React from "react";
import { BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="brand-container py-5">
        <footer className="">
          <hr />
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between py-5">
            {/* 1st */}
            <div className="flex">
              <Link href="/">
                <h1 className="text-[22px] font-bold text-black">
                  Nok <span className="text-primary">Nok</span>
                </h1>
              </Link>
            </div>
            {/* 2nd */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[22px] font-bold text-red">Product</h1>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Web studio
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Flex
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Programming Forms
              </p>
            </div>
            {/* 3rd */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[22px] font-bold text-black">Resources</h1>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Tutorials & Guides
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Blog
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Support Center
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Partners
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[22px] font-bold text-black">Company</h1>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Home
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                About us
              </p>
              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Company values
              </p>
              <Link href="/privacy">
                <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                  Privacy Policy
                </p>
              </Link>
              <Link href="/privacy">

              <p className="text-[16px] font-medium cursor-pointer hover:text-[18px] hover:font-semibold">
                Terms & condition
              </p>
              </Link>
            </div>
            {/* 5 */}
            <div className="flex flex-col gap-3">
              <h1 className="text-black font-bold">Subscribe</h1>
              <p className="text-[16px] font-medium ">
                Get the latest news and articles to your inbox every month.
              </p>
              <form className="flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Email id"
                  class="xl:w-[300px] h-[47px] rounded-l-md text-[15px] bg-white pl-4 text-black border-b border-black focus:outline-none"
                  required
                />
                <button class="w-[87px] h-[47px] text-[15px] bg-secondary text-white focus:outline-none p-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <hr />
        </footer>
        <div className="flex justify-between py-4 px-4">
          <p>© 2022 Simple. All rights reserved.</p>
          <div className="flex gap-5 justify-center ">
            <p className=" text-[#6b7280] cursor-pointer hover:text-secondary rounded-md">
              <a href=" " target="_blank">
                <BsLinkedin size={25} />
              </a>
            </p>
            <p className=" text-[#6b7280] cursor-pointer hover:text-secondary rounded-md">
              <a href="" target="_blank">
                <BsYoutube size={25} />
              </a>
            </p>
            <p className=" text-[#6b7280] cursor-pointer hover:text-secondary rounded-md">
              <a href="https://wa.me/+91999999999" target="_blank">
                <BsWhatsapp size={25} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
