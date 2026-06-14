import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* LEFT (empty) */}
      <div className="w-1/3"></div>

      {/* MIDDLE MENU */}
      <div className="w-1/3 flex justify-center">
        <div className="flex gap-6 font-medium">
          <NavLink to="/" className="hover:text-primary cursor-pointer">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-primary cursor-pointer">
            About
          </NavLink>
          <NavLink to="/career" className="hover:text-primary cursor-pointer">
            Career
          </NavLink>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/3 flex justify-end items-center gap-4">
        {/* user icon */}
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          👤
        </div>

        {/* login button */}
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
