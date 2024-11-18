import React from "react";
import AfnanProfile from "@/images/afnan.jpg";
import Image from "next/image";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaGithub,FaLinkedin } from "react-icons/fa";

function AboutPage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-[600px]">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold uppercase">
              {" "}
              I’m Afnan Hussain, A Dedicated Programmer
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {/* Main Col */}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-primary mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/F8VyN2c/Whats-App-Image-2024-05-30-at-14-21-12-9f481ef4.jpg')",
              }}
            ></div>

            <h1 className="text-3xl text-base-200 font-bold pt-8 lg:pt-0">
              Afnan Hussain
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-base-200 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <span className="h-4 fill-current text-base-200 pr-4">
                <MdWork />
              </span>
              Programmer
            </p>
            <p className="pt-2 text-white font-bold lg:text-sm flex items-center justify-center lg:justify-start">
              <span className="h-4 fill-current text-base-200 pr-4">
                <FaLocationDot />
              </span>{" "}
              Sylhet, Bangladesh
            </p>
            <p className="pt-8 font-bold">
            I have been researching full-stack web development, and I chose the MERN stack to learn full-stack development.
            </p>

            <div className="pt-12 pb-8">
              <button className="bg-base-200 text-white font-bold py-2 px-4 rounded-full">
                Get In Touch
              </button>
            </div>

            <div className="mt-6 text-2xl justify-center pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-3 lg:justify-normal">
              <a
                className="link h-6 fill-current text-base-200"
                href="https://www.facebook.com/iamafnanhussain"
                data-tippy-content="@facebook_handle"
              >
             <FaFacebook/>
              </a>
              <a className="link h-6 fill-current text-base-200 " href="https://x.com/MdAfnanHussain" data-tippy-content="@twitter_handle">
               <FaTwitter/>
              </a>
              <a className="link h-6 fill-current text-base-200" href="https://github.com/afnanhussain2002" data-tippy-content="@github_handle">
                <FaGithub/>
              </a>
              <a
                className="link h-6 fill-current text-base-200"
                href="https://www.linkedin.com/in/md-afnan-hussain/"
                data-tippy-content="@linkedin_handle"
              >
              <FaLinkedin/>
              </a>
             
            </div>

            {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
          </div>
        </div>

        {/* Img Col */}
        <div className="w-full lg:w-2/5">
          {/* Big profile image for side bar (desktop) */}
          <Image
            src={AfnanProfile}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt="Profile"
          />
          {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
        </div>

        {/* Pin to top right corner */}
        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme focus:outline-none">🌙</button>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
