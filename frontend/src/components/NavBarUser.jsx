import React, { useState } from "react";
import burgerMenu from "../assets/img/icons8-menú.svg";

export const NavBarUser = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <ul
        className={`hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[18px] sm:items-center text-Principal_1 md:font-semibold ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <li>
          <h2>Programa de Formacion</h2>
        </li>
        <li>
          <h2>Ficha</h2>
        </li>
      </ul>
      <img
        className="w-10 h-10 bg-cover cursor-pointer sm:hidden"
        src={burgerMenu}
        alt="Burger Menu"
        onClick={toggleMenu}
      />
    </>
  );
};

export default NavBarUser;
