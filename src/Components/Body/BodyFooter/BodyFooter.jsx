import Camera from "../../../assets/Camera.jpg";
import Compass from "../../../assets/Compas.jpg";
import Travel from "../../../assets/Travel.jpg";

const BodyFooter = () => {
  return (
    <>
      <div className="w-[100vw] overflow-x-hidden relative flex justify-center items-center flex-row h-[1500px] top-[50em] border-2 bg-black border-black z-50">
        <div>
            <h1 className=" text-8xl text-center text-white font-bold">Enjoy Your Journey!</h1>
        </div>
        <img
          src={Camera}
          alt="Camera"
          className="w-[1050px] z-50 rounded-2xl absolute mt-[50%] bottom-96 origin-center text-white "
        />
        <img
          src={Travel}
          alt="Travel"
          className="mt-[50%] w-[1050px] absolute left-10 bottom-72 rounded-2xl origin-center rotate-[-45deg]"
        />
        <img
          src={Compass}
          alt="Compass"
          className="mt-[50%] w-[1050px] absolute bottom-72 right-10 rounded-2xl origin-center rotate-[35deg]"
        />
      </div>
    </>
  );
};

export default BodyFooter;
