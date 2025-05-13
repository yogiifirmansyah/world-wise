import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <>
      <div className="relative w-full bg-[url(/bg.jpg)] min-h-screen bg-cover bg-no-repeat bg-center">
        <PageNav />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto mt-36 text-white text-center flex flex-col gap-y-4 items-center">
          <h2 className="text-4xl text-white font-bold">
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </h2>
          <p className="text-sm text-slate-200">A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.</p>
          <Link to="login" className="mt-4 bg-green-500 max-w-max py-1 px-6 rounded-md text-slate-950 uppercase font-medium cursor-pointer hover:bg-green-600 transition-all duration-300">
            Start Tracking Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
