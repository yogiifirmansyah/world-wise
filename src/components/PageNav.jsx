import { Link, NavLink } from "react-router-dom";

function PageNav() {
  return (
    <header className="relative z-10 flex justify-between items-center px-12 h-16 pt-4">
      <Link to="/" className="w-48">
        <img src="logo.png" alt="" />
      </Link>
      <nav>
        <ul className="flex gap-x-8 text-white font-medium">
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <Link className="bg-green-500 text-slate-950 py-1.5 px-4 rounded-sm" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageNav;
