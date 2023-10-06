import Balloons from "../../assets/HotAirBalloons.jpg";
import Mountains from "../../assets/Mountains.jpeg";
import Luftansa from "../../assets/Lufthansa.webp";

export const ImgData = [
  {
    id:"01",
    body: "Find new Destinations to explore and amaze your mind.",
    image: <img src={Balloons} className="w-[40vw] h-[50vh] overflow-hidden rounded-3xl" />,
  },
  {
    id:"02",
    body: "Travel to see true beauty. Make your vision wide.",
    image: <img src={Mountains} className="w-[40vw] h-[50vh] overflow-hidden rounded-3xl" />,
  },
  {
    id:"03",
    body: "Live your dreams and make new discovery. Be where you should be.",
    image: <img src={Luftansa} className="w-[40vw] h-[50vh] overflow-hidden rounded-3xl" />,
  },
];
