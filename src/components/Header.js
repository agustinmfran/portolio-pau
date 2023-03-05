"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import es from "../languages/es";
import en from "../languages/en";
import Selector from "./Selector";
import { Link as Rslink } from "react-scroll/modules";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const { locale } = useRouter();
  const lang = locale === "es" ? es.header : en.header;
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Rslink
              to="home"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold border-b-2 border-teal-500">
                  Agustín Franco
                </h2>
              </div>
            </Rslink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <Rslink
                to="home"
                className="block lg:inline-block text-neutral-900  hover:text-lg hover:text-teal-500 hover:transition duration-300 cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {lang.home}
              </Rslink>
              <Rslink
                to="about"
                className="block lg:inline-block text-neutral-900  hover:text-lg hover:text-teal-500 hover:transition duration-300 cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {lang.about}
              </Rslink>
              <Rslink
                to="projects"
                className="block lg:inline-block text-neutral-900  hover:text-lg hover:text-teal-500 hover:transition duration-300 cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {lang.projects}
              </Rslink>
              <Selector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
