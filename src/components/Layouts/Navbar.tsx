import React from "react";
import { importImages } from "../../globals";

const Navbar = () => {
   return (
      <div className="fixed z-50 w-full bg-primary flex items-center justify-center py-2 transition-all duration-300 transform">
         <img
            alt="pokeball"
            src={importImages("pokeball")}
            className="w-10 h-10 transition duration-500 ease-in-out transform hover:rotate-180 cursor-po"
         />
      </div>
   );
};

export default Navbar;
