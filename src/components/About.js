import React from 'react'
import { icons } from './Skills'

const About = () => {
  return (
    <div className="max-w-[1100px] py-10 items-center justify-center m-auto">
      <div className="flex gap-10 w-full  height-auto flex-col xl:flex-row  ">
        {/* <img className="max-w-[550px] max-h-[400px] object-cover object-right-top top xl:w-[calc(50vw-20px)]" src={aboutImg}/> */}
        <p className="w-screen xl:w-[calc(50%-20px)] text-2xl tracking-wide leading-relaxed">
          I am a driven software engineer with 13 years of experience in the broader IT field. <br/>
          I find simple solutions to solve problems
        </p>
        <p className="w-screen xl:w-[calc(50%-20px)] text-xl tracking-wide leading-relaxed">
          I'm an experienced techie with over 14 years experience in the field. Last year after selling my business last year I decided to move into Software Engineering. The rest of my time in IT has been spent in VOIP, Systems and Network Engineering so I have a wide ranging knowledge, and I've now topped it off with the ability to make things from scratch.
          </p>
      </div>
      <h2 className="text-2xl py-10 text-center">My Stack</h2>
      <div  className="flex gap-10 w-full height-auto flex-row flex-wrap justify-center">
      {icons.map((icon, idx) => {
        return (
          
            <icon.icon key={idx} color="default" className="object-cover w-24 h-24 filter rounded-full"/>
            )
      })}
      </div>
    </div>
  )
}

export default About