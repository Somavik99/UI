// import React from 'react'

import { ImgData } from "./ImgData";
import "./Body.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Body = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  // let y1 = useTransform(scrollYProgress,[1,2], ["0%","80%"])

  return (
    <div className="h-[100%]  w-[100%] ">
      <div
        style={{ perspective: 22, y }}
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
                className="imgBody antialiased z-[100] absolute left-52 w-[800px] font-bold text-[75px]  before:content-['\201C']"
              >
                {image.body}
              </motion.div>
              <motion.div className="flex items-end  justify-center flex-col mt-[-12%]">
                <div className="Background   right-52 absolute transform-gpu object-cover">
                  {image.image}
                </div>
                <div
                  style={{ y }}
                  className="Foreground antialiased z-50 top-[22pc]  object-cover left-[25em] fixed before:content-['#'] after:content-['\201D'] text-white text-[68px] font-semibold italic"
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
          className="text-[80px] font-bold text-red-500 z-[100 ] rotate-[360deg]"
        >
          TRAVEL.
        </h1>
      </div>
    </div>
  );
};

export default Body;
