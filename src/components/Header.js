import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between transition mx-auto z-20 xl:items-center bg-white">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/watchmego"
          fgColor="black"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/whitereuben"
          fgColor="black"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="black"
          bgColor="transparent"
          url="#contact"
        />
        <a href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-black">
            Get in touch
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
