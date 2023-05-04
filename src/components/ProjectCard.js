import React from "react";
import chattyImg from "../assets/Chatty.jpg";
import URLImg from "../assets/URLShortener.jpg";

const Chatty = () => {
  return (
    <div className="bg-[#212121]">
      <div className="flex max-w-[1100px] w-full pt-[115px] height-auto flex-col gap-10 xl:flex-row items-center justify-center m-auto  ">
        <img
          className="relative bottom-[-40px] max-w-[550px]  max-h-[400px] object-cover top xl:w-[calc(50vw-20px)]"
          src={chattyImg}
        />
        <div className="flex flex-col">
          <p className="text-xl text-center pb-4 text-white">
            Featured Project
          </p>
          <h3 className="text-center text-2xl font-bold pb-4 text-white">
            Chatty
          </h3>
          <p className="w-[80vw] xl:w-[calc(30vw-20px)] text-2xl tracking-wide leading-relaxed text-white text-center xl:text-right">
            A socket based chat application with rooms & AI assistant. Add GPT-3.5 at the click of a button.
            Built using socket.io & React.
            Deployed using AWS Amplify - AWS ECS, API Gateway, Cloudfront and CloudFormation were used/modified in the process.
          </p>
          <div className="flex gap-5 m-auto">
            <a href="https://github.com/watchmego/chatty" className="m-auto">
              <button className="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Github
              </button>
            </a>
            <a
              href="https://chatty.reubenwhite.com"
              target="_blank"
              rel="noreferrer"
              className="m-auto"
            >
              <button className="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
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
          src={URLImg}
        />
        <div className="flex flex-col">
          <p className="text-xl text-center pb-4 text-white">
            Featured Project
          </p>
          <h3 className="text-center text-2xl font-bold pb-4 text-white">
            URL Shortener
          </h3>
          <p className="w-[80vw] xl:w-[calc(30vw-20px)] text-xl tracking-wide leading-relaxed text-white text-center xl:text-right">
            A URL shortener similar to bit.ly. Stores shortened URLs in a MongoDB. This was a project with a pre-built frontend (thanks to <a href="https://maximorlov.com/backend-portfolio-projects-no-css">Maxim Orlov</a>). The backend was built from scratch based a list of features.
            Deployed using AWS Amplify.
          </p>
          <div className="flex gap-5 m-auto">
            <a href="https://www.github.com/watchmego/url-shortener" target="_blank" rel="noreferrer" className="m-auto">
              <button className="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
                Github
              </button>
            </a>
            <a
              href="https://urlsh.reubenwhite.com"
              target="_blank"
              rel="noreferrer"
              className="m-auto"
            >
              <button className="bg-transparent hover:white text-white hover:text-black hover:bg-white font-semibold py-2 px-4 border border-white hover:border-black rounded">
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
