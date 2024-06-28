import { IoMenu, IoClose } from "react-icons/io5";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiDownload } from "react-icons/bi";

const Navbar = () => {
  let Links = [
    { name: "Sobre", link: "/about" },
    { name: "Projetos", link: "/projects" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="w-full top-0 navbar sticky backdrop-blur-sm z-50">
      {isVisible ? (<div className="absolute bg-black/50 h-screen w-screen -z-10" onClick={() => setIsVisible(!isVisible)}/>) : ""}
      <div className="md:flex justify-between md:w-4/6 items-center m-auto py-4 w-10/12">
        <div className="flex justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-2xl text-tema"
                : "font-semibold text-2xl text-gray-600"
            }
          >
            Dan.
          </NavLink>
          {isVisible ? (
            <IoClose
              className="md:invisible cursor-pointer size-6"
              onClick={() => setIsVisible(!isVisible)}
            />
          ) : (
            <IoMenu
              className="md:invisible cursor-pointer size-6"
              onClick={() => setIsVisible(!isVisible)}
            />
          )}
        </div>

        <ul
          className={`flex md:flex-row flex-col gap-6 md:items-center md:static absolute md:top-0 md:opacity-100 top-[56px] md:p-0 py-5 px-4  md:w-fit left-[15px] transition-all  duration-500 ease-in-out ${
            isVisible ? "top-[56px] opacity-100" : "-top-60 opacity-0"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.link} className="text-gray-500 hover:text-gray-200">
                {link.name}
              </NavLink>
            </li>
          ))}
          <a href="./src/assets/curriculo/Curriculo_Danilo_Ferro_Alves.pdf" className="btn  flex items-center gap-2 " download>Resumo <BiDownload/></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
