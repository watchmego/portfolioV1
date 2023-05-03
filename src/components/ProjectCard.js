import React from "react";
import aboutImg from "../assets/20190816_193930.jpg";

const Chatty = () => {
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
            Chatty
          </h3>
          <p className="w-screen xl:w-[calc(40vw-20px)] text-xl tracking-wide leading-relaxed text-white text-right">
            A socket based chat application with rooms & AI assistant. Add GPT-3.5 at the click of a button.
            Built using socket.io & React.
          </p>
          <div className="flex gap-5 m-auto">
            <a href="https://github.com/watchmego/chatty" className="m-auto">
              <button class="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Github
              </button>
            </a>
            <a
              href="https://chatty.reubenwhite.com"
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

const URLShortener = () => {
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
            A URL shortener similar to bit.ly. Stores shortened URLs in a MongoDB. This was a project with a pre-built frontend (thanks to <a href="https://maximorlov.com/backend-portfolio-projects-no-css">Maxim Orlov</a>). The backend was built from scratch based a list of features.
          </p>
          <div className="flex gap-5 m-auto">
            <a href="https://www.github.com/watchmego/url-shortener" target="_blank" className="m-auto">
              <button class="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Github
              </button>
            </a>
            <a
              href="https://urlsh.reubenwhite.nz"
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
