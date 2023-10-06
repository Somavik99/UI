import { useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";

const Nav = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const ShowDropDown = () => {
    return setIsOpen((open) => !open);
  };

  return (
    <div className="relative z-[200]">
      <div  style={{backgroundColor:"rgba(1,1,1,0.1)"}} className="z-[100] w-[80vw] left-[180px] bg-blend-darken bg-red-400 shadow-slate-300 shadow-lg backdrop-filter backdrop-blur-[20px]  text-slate-200 m-2 pl-[60px]  rounded-2xl  pr-[70px]  flex items-center justify-between space-x-16 fixed">
        <h1 className=" text-[80px] font-bold text-black">FLY.</h1>
        <h1 className="sticky left-0 text-[25px] before:content-['#'] w-24 font-bold border-b-2 border-white hover:w-28 text-black hover:after:content-['.']  transition ease-in-out delay-200 hover:transition-all duration-700 hover:delay-200 hover:ease-in-out hover:transform-gpu hover:scale-110  hover:border-black hover:border-b  cursor-pointer">
          Choose Destination
        </h1>
        <button
          className="flex text-black  items-center justify-center cursor-pointer border-b-2 border-b-transparent font-bold text-[20px] w-24 transition ease-out duration-200 delay-200 hover:scale-110 hover:border-b-black"
          onClick={ShowDropDown}
        >
     MENU. { IsOpen? <ImCancelCircle/> :   <CgMenuBoxed  />} 
        </button>
      </div>
      <div className="flex justify-end items-center">
        {IsOpen ? (
          <div
            className={
              IsOpen
                ? "z-[100] flex transition ease-out duration-200 delay-200 scale-100 transform opacity-100 items-center justify-center align-middle  rounded-2xl bg-indigo-200 overflow-hidden shadow-2xl flex-col w-48 pr-[15px] p-5 pb-10 right-64  top-40 fixed space-y-4"
                : " transform opacity-0 scale-95 hidden"
            }
          >
            <h1 className="cursor-pointer rounded-lg  border-r-[4px]  hover:bg-indigo-100 h-[50px] w-[186px] text-center border-transparent hover:border-black hover:border-l-[4px] border-l-[4px] transition ease-out duration-200 delay-200 hover:transition-all hover:ease-out hover:delay-200 hover:duration-200">
              Home
            </h1>
            <h1 className="cursor-pointer rounded-lg  border-r-[4px]  hover:bg-indigo-100 h-[50px] w-[186px] text-center border-transparent hover:border-black hover:border-l-[4px] border-l-[4px] transition ease-out duration-200 delay-200 hover:transition-all hover:ease-out hover:delay-200 hover:duration-200">
              About
            </h1>
            <h1 className="cursor-pointer rounded-lg border-r-[4px] hover:bg-indigo-100 h-[50px] w-[186px] text-center border-transparent hover:border-black hover:border-l-[4px] border-l-[4px] transition ease-out duration-200 delay-200 hover:transition-all hover:ease-out hover:delay-200 hover:duration-200">
              Contacts
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
