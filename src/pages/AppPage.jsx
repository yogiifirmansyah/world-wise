import { NavLink, Outlet } from "react-router-dom";
import Map from "../components/Map";
import User from "../components/User";

function AppPage() {
  return (
    <div className="w-full min-h-screen flex relative">
      <div className="w-[30%] bg-slate-900 flex flex-col justify-between pb-4">
        <div>
          <img src="/logo.png" className="w-36 mx-auto my-8" alt="" />

          <ul className="mb-4 rounded-lg bg-slate-700 flex max-w-max py-2 text-xs font-medium text-slate-100 uppercase mx-auto overflow-hidden">
            <li>
              <NavLink to="cities" className="py-2 px-6 rounded-md">
                Cities
              </NavLink>
            </li>
            <li>
              <NavLink to="countries" className="py-2 px-6 rounded-md">
                Countries
              </NavLink>
            </li>
          </ul>

          <Outlet />
        </div>

        <footer className="mx-auto">
          <p className="text-slate-500 text-sm">&copy;Copyright 2025 by WorldWise inc.</p>
        </footer>
      </div>

      <Map />

      <User />
    </div>
  );
}

export default AppPage;
