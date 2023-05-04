import React from "react";
import { icons } from "./Skills";

const About = () => {
  return (
    <div className="max-w-[1100px] py-10 items-center justify-center m-auto">
      <div className="flex gap-10 w-full  height-auto flex-col xl:flex-row  ">
        {/* <img className="max-w-[550px] max-h-[400px] object-cover object-right-top top xl:w-[calc(50vw-20px)]" src={aboutImg}/> */}
        <p className="w-screen xl:w-[calc(50%-20px)] lg:text-5xl text-4xl tracking-wide leading-relaxed">
          Over the past 16 or so years in IT I have built up a broad range of skills in IT <br />I enjoy working with a variety of technologies, getting stuck into difficult problems and coming up with simple solutions.
        </p>
        <p className="w-screen xl:w-[calc(50%-20px)] lg:text-3xl text-2xl tracking-wide leading-relaxed">
          After a going into VOIP/Networks straight out of high school, I spent most of my career integrating software solutions into existing environments. This required a broad knowledge of the systems, and a lot of planning to stand up solutions successfully.
          In 2020 I took a break from IT and started an eCommerce Business which I sold in November 2022. I had already made the decision to get into coding because I saw it as an outlet for my creativity, and I have developed a passion for it.
        </p>
      </div>
      <h2 className="text-2xl py-10 text-center">My Stack</h2>
      <div className="flex gap-10 w-full height-auto flex-row flex-wrap justify-center">
        {icons.map((icon, idx) => {
          return (
            <icon.icon
              key={idx}
              color="default"
              className="object-cover w-24 h-24 filter rounded-full"
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
