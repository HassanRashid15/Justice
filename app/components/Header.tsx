"use client";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); 
  };

  return (
    <div>
      <nav className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <div className="flex justify-between items-center lg:mr-32">
          <Link href="/">
            <span className="text-white text-xl">FWR</span>
          </Link>
          <button
            aria-expanded={isMobileMenuOpen}
            type="button"
            className="group relative h-6 w-6 lg:hidden p-2 rounded-md text-white hover:opacity-75 focus:outline-none"
            onClick={toggleMobileMenu}
            style={{
              "--width": "1.25rem",
              "--thickness": "0.125rem",
              "--gap": "0.25rem",
              "--color": "#fff",
              "--duration": "300ms",
            }}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-full before:rounded-full before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] before:group-aria-expanded:delay-0`}
            ></span>
            <span
              className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]`}
            ></span>
            <span
              className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] before:group-aria-expanded:delay-0`}
            ></span>
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex flex-grow`}
          id="navbar-collapse"
        >
          <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
            <li>
              <Link
                href="/"
                className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
              >
                Dropdown
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
              >
                Attorneys
              </Link>
            </li>
            <li>
              <Link
                href="/Aboutus"
                className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col lg:flex-row my-3 lg:my-0">
            <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-1 px-3 rounded border border-solid border-white mb-2 lg:mb-0 lg:mr-2">
              Sign In
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-3 rounded border border-solid border-purple-700 hover:border-purple-800">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
