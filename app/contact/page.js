"use client";
import React from "react";
import { BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      
      await simulateSubmit(data);

      setIsSubmitted(true);

      
      setTimeout(() => {
        reset();
        setIsSubmitted(false);
      }, 1000); 
    } catch (error) {
      console.error("Error occurred during form submission:", error.message);
    
    }
  };

  const simulateSubmit = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Simulated form submitted:", data);
        resolve();
      }, 1000); 
    });
  };

  return (
    <div>
      <div className="brand-container py-8 px-5">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col shadow-md">
          {/* left */}
          <div className="bg-secondary flex flex-col  justify-center items-center gap-6 py-16 px-16 w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <h1 className="text-white font-bold text-[30px]">Let's Chat</h1>
            <p className="text-white text-[18px] text-center font-medium">
              Whether you have a question, want to start a project or simply
              want to connect.
            </p>
            <p className="text-white font-medium">
              Feel free to send me a message in the contact form
            </p>

            <div className="flex gap-4">
              <p className=" text-[white] cursor-pointer hover:text-[red] rounded-md">
                <a href=" " target="_blank">
                  <BsLinkedin size={25} />
                </a>
              </p>
              <p className=" text-[white] cursor-pointer hover:text-[red] rounded-md">
                <a href="" target="_blank">
                  <BsYoutube size={25} />
                </a>
              </p>
              <p className=" text-[white] cursor-pointer hover:text-[red] rounded-md">
                <a href="https://wa.me/+91999999999" target="_blank">
                  <BsWhatsapp size={25} />
                </a>
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <h1 className="text-center text-secondary pt-4 text-[30px]">
              Contact
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`space-y-5 w-full bg-white p-8 rounded-lg shadow-md transition-opacity ${
                isSubmitted ? "opacity-0" : "opacity-100"
              }`}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Name*
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    maxLength: {
                      value: 30,
                      message: "Name should not exceed 30 characters",
                    },
                  })}
                  type="text"
                  id="name"
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email*
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-2 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@gmail.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Mobile Number
                </label>
                <input
                  {...register("number", {
                    required: "Please enter a valid phone number",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  type="tel"
                  id="number"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 shadow-md focus:border-primary-500"
                  placeholder="+91 "
                />
                {errors.number && (
                  <span className="text-red-500 text-sm">
                    {errors.number.message}
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:border-primary-500 shadow-md"
                  placeholder="Leave a comment..."
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary sm:w-fit hover:bg-primary-800 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-10 ">
          <h1 className="text-[25px] font-bold text-center text-secondary ">
            Find Us on Google Map
          </h1>
          <p className="text-[18px] px-5 text-center text-black font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            quo beatae quasi assumenda, expedita aliquam minima tenetur maiores
            neque incidunt repellat aut voluptas hic dolorem sequi ab porro,
            quia error.
          </p>
          <section className="w-full py-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4417316688!2d76.8848339633056!3d11.014126294919281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699274239441!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
