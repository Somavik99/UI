// import React from 'react'

import { ImgData } from "./ImgData";
import "./Body.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Body = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ["0%", "110%"]);
  // let y1 = useTransform(scrollYProgress,[1,2], ["0%","80%"])

  const SwingFunction = (e) => {
    const FrontYard = 250;
    const BackYard = 550;
    window.addEventListener("mousemove", () => {
      const x = e.clientX;
      const y = e.clientY;
      window.style.transform = `translate(${x / FrontYard}%,${y / BackYard})`;
    });
  };

  return (
    <div className="h-[100%]  w-[100%] ">
      <div
        style={{ perspective: 22, y }}
        onMouseOver={SwingFunction}
        className="transform-gpu flex justify-center items-center flex-col w-[100vw] relative snap-y "
      >
        {ImgData.map((image, index) => {
          return (
            <motion.div
              style={{ y }}
              key={index}
              className="w-[100vw] h-[100vh] flex justify-center snap-center"
            >
              <motion.div
                style={{ y }}
                className="imgBody z-[100] absolute left-52 w-[800px] font-bold text-[80px]  before:content-['\201C']"
              >
                {image.body}
              </motion.div>
              <motion.div className="flex items-end  justify-center flex-col mt-[-12%]">
                <div className="Background   right-52 absolute transform-gpu object-cover">
                  {image.image}
                </div>
                <div
                  style={{ y }}
                  className="Foreground  z-50 top-[26pc]  object-cover left-[30em] fixed before:content-['#'] after:content-['\201D'] text-[68px] font-semibold italic"
                >
                  {image.id}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <div>
        <h1
          style={{ border: " black" }}
          className="text-[80px] font-bold text-red-500 z-[100 ] rotate-[-40deg]"
        >
          TRAVEL.
        </h1>
      </div>
    </div>
  );
};

export default Body;
