import React from "react";
import aboutImg from "../assets/20190816_193930.jpg";

const URLShortener = () => {
  return (
    <div className="bg-[#212121]">
      <div className="flex max-w-[1100px] w-full pt-[115px] height-auto flex-col gap-10 xl:flex-row items-center justify-center m-auto  ">
        <img
          className="relative bottom-[-40px] max-w-[550px]  max-h-[400px] object-cover top xl:w-[calc(50vw-20px)]"
          src={aboutImg}
        />
        <div className="flex flex-col">
          <p className="text-xl text-center pb-4 text-white">
            Featured Project
          </p>
          <h3 className="text-center text-2xl font-bold pb-4 text-white">
            Project Name
          </h3>
          <p className="w-screen xl:w-[calc(40vw-20px)] text-xl tracking-wide leading-relaxed text-white text-right">
            Hi there, thanks for checking out my Portfolio! I'm an experienced
            techie with over 14 years experience in the field. After selling my
            business last year I decided to move into Software Engineering. The
            rest of my time in IT has been spent in VOIP, Systems and Network
            Engineering so I have a wide ranging knowledge, and I've now topped
            it off with the ability to make things from scratch
          </p>
          <div className="flex gap-5 m-auto">
            <a href="https://www.github.com" target="_blank" className="m-auto">
              <button class="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Github
              </button>
            </a>
            <a
              href="https://www.reubenwhite.nz/url"
              target="_blank"
              className="m-auto"
            >
              <button class="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chatty = () => {
  return (
    <div className="bg-[#1c6f7c]">
      <div className="flex max-w-[1100px] w-full pt-[150px] height-auto flex-col gap-10 xl:flex-row-reverse items-center justify-center m-auto  ">
        <img
          className="relative bottom-[-40px] max-w-[550px]  max-h-[400px] object-cover top xl:w-[calc(50vw-20px)]"
          src={aboutImg}
        />
        <div className="flex flex-col">
          <p className="text-xl text-center pb-4 text-white">
            Featured Project
          </p>
          <h3 className="text-center text-2xl font-bold pb-4 text-white">
            Project Name
          </h3>
          <p className="w-screen xl:w-[calc(40vw-20px)] text-xl tracking-wide leading-relaxed text-white text-left">
            Hi there, thanks for checking out my Portfolio! I'm an experienced
            techie with over 14 years experience in the field. After selling my
            business last year I decided to move into Software Engineering. The
            rest of my time in IT has been spent in VOIP, Systems and Network
            Engineering so I have a wide ranging knowledge, and I've now topped
            it off with the ability to make things from scratch
          </p>
          <div className="flex gap-5 m-auto">
            <a href="https://www.github.com" target="_blank" className="m-auto">
              <button class="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Github
              </button>
            </a>
            <a
              href="https://www.reubenwhite.nz/url"
              target="_blank"
              className="m-auto"
            >
              <button class="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pairs = () => {
  return <div>Pairs</div>;
};

export const ProjectCards = [URLShortener, Chatty, Pairs];
