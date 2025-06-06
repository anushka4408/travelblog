import { useState } from "react";
import { NavLink } from "react-router-dom";
import hiddenMenuIcon from "../../assets/images/burger-passive.png";
import activeMenuIcon from "../../assets/images/burger-active.png";
import Socials from "./Socials";

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  function ToggleMenu() {
    setHiddenMenu(!hiddenMenu);
  }

  function RemoveMenu() {
    setHiddenMenu(true);
    window.scrollTo(0, 0);
  }

  return (
    <header className="sm:relative flex flex-col min-h-screen sm:col-span-1 md:col-span-2 items-center absolute">
      <img
        className="burger-icon w-10 fixed cursor-pointer md:hidden z-50 sm:ml-2 ml-12 mt-3"
        onClick={ToggleMenu}
        src={hiddenMenu ? hiddenMenuIcon : activeMenuIcon}
        alt="Toggle menu"
      />
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden md:flex`}
      >
        <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black font-light">
          Travel with
          <br />
          <span className="font-semibold font-namefont text-5xl">Us</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/"
          onClick={RemoveMenu}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={RemoveMenu}
        >
          Blog
        </NavLink>
        <Socials />
      </nav>
    </header>
  );
};

export default SideMenu;
