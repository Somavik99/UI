import { useEffect, useState } from "react";
import Camera from "../../../assets/Camera.jpg";
import Compass from "../../../assets/Compas.jpg";
import Travel from "../../../assets/Travel.jpg";
import { motion } from "framer-motion";
import useCapture from "./useCapture";

const BodyFooter = () => {
  const [MousePointerMove, setMousePointerMove] = useState({
    x: 0,
    y: 0,
  });

  const [TextHoverVariant, setTextHoverVariant] = useState("default");

  const {CaptureImage} = useCapture()

  useEffect(() => {
    const PointerEventHandler = (e) => {
      setMousePointerMove({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", PointerEventHandler);
    return () => {
      window.removeEventListener("mousemove", PointerEventHandler);
    };
  }, []);

  const Variants = {
    default: {
      x: MousePointerMove.x - 25,
      y: MousePointerMove.y - 25,
    },
    Text: {
      height: 200,
      width: 200,
      x: MousePointerMove.x - 75,
      y: MousePointerMove.y - 75,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference",
    },
  };

  const TextView = () => setTextHoverVariant("Text");
  const TextHide = () => setTextHoverVariant("default");

  return (
    <>
      <div className="w-[100%] overflow-x-hidden relative flex justify-center items-center flex-row h-[1500px] top-[50em] border-2 bg-black border-black z-50">
        <div>
          <h1
            onMouseEnter={TextView}
            onMouseLeave={TextHide}
            className="absolute z-50  top-[1.6em] bottom-0 left-[5em] text-8xl text-center text-black font-bold"
          >
            #EnjoyYourJourney! <br/>
            #SeeTheThrill!
          </h1>
        </div>
        <motion.div
          variants={Variants}
          animate={TextHoverVariant}
          className="h-[50px] w-[50px] bg-white border-2 border-black rounded-full fixed top-0 left-0 bottom-0 right-0 pointer-events-none"
        />
        <img
          src={Camera}
          onClick={CaptureImage}
          alt="Camera"
          className="w-[1050px] z-50 rounded-2xl absolute mt-[50%] bottom-96 origin-center  "
        />
        <img
          src={Travel}
          alt="Travel"
          onClick={CaptureImage}
          className="mt-[50%] w-[1050px] absolute left-10 bottom-72 rounded-2xl origin-center rotate-[-45deg]"
        />
        <img
          src={Compass}
          alt="Compass"
          onMouseDown={CaptureImage}
          className="mt-[50%] w-[1050px] absolute bottom-72 right-10 rounded-2xl origin-center rotate-[35deg]"
        />
      </div>
    </>
  );
};

export default BodyFooter;
