// components/Navbar.jsx

"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const NavItems = ({ links, isMobile, toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ul className={isMobile ? "space-y-4" : "space-x-6 flex items-center"}>
      {links.map(({ id, name, href, subLinks }) => (
        <li
          key={id}
          className={`relative ${isMobile ? "" : "group"}`}
          onMouseEnter={() => !isMobile && setActiveDropdown(id)}
          onMouseLeave={() => !isMobile && setActiveDropdown(null)}
        >
          {/* Main Links */}
          <Link
            href={href}
            className="hover:text-accent cursor-pointer py-2 uppercase block"
            onClick={() => isMobile && toggleMenu()}
          >
            {name}
          </Link>
          {/* Sub-links */}
          {subLinks && (isMobile || activeDropdown === id) && (
            <div
              className={
                isMobile
                  ? "mt-2"
                  : "absolute left-0 top-full pt-2 hidden group-hover:block"
              }
            >
              <ul className="bg-white text-black shadow-md rounded-md z-10 border-b-4 border-accent">
                {subLinks.map((subLink, index) => (
                  <li key={index} className="hover:bg-gray-200 min-w-max">
                    <Link
                      href={subLink.href}
                      onClick={() => isMobile && toggleMenu()}
                    >
                      <span className="block px-4 py-2">{subLink.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="bg-primary text-white py-4 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
            href="/"
            className="flex items-center px-2 py-1 rounded-md bg-white"
          >
            <Image src="/logo.svg" alt="logo" width={120} height={120} />
          </Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex">
          <NavItems links={navLinks} isMobile={false} toggleMenu={toggleMenu} />
        </div>
        {/* Registration Button */}
        {/* <div className="hidden md:block">
          <Link href="/register">
            <button className="bg-accent text-white px-6 py-2 rounded-lg shadow hover:bg-accent/80 transition-all font-semibold">
              Register Now
            </button>
          </Link>
        </div> */}
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <Image
              src={isOpen ? "/close.svg" : "/menu.svg"}
              alt="toggle"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[70px] inset-0 bg-primary z-50 md:hidden overflow-y-auto pt-5">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {/* Mobile Registration Button */}
              {/* <li>
                <Link href="/register" onClick={toggleMenu}>
                  <button className="bg-accent text-white w-full py-2 rounded-lg shadow hover:bg-accent/80 transition-all font-semibold">
                    Register Now
                  </button>
                </Link>
              </li> */}
              <NavItems
                links={navLinks}
                isMobile={true}
                toggleMenu={toggleMenu}
              />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
