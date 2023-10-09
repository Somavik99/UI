import Body from "./Components/Body/Body";
import BodyFooter from "./Components/Body/BodyFooter/BodyFooter";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <div className="h-[150px] relative mt-[2%] z-[100] bg-transparent">
        <Nav />
      </div>

      <div className="-z-50 h-[100%]">
        <Body />
      </div>
      <div className="w-[100vw] h-[800px]">
        <BodyFooter />
      </div>
    </>
  );
}

export default App;
