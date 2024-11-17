import React from "react";
import heroimg from "../assets/imgs/heroimg.jpg"; 

function HeroSection() {
  return (
    <div>
   <div
      className="relative h-screen w-full flex items-center justify-start text-left bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}
    >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <main className="px-10 lg:px-24 z-10">
          <div className="text-left">
            <h2 className="text-4xl text-start tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span style={{ color: "var(--primary-color)" }}>We Fight </span> <br/>For Your Right
            </h2>
            <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10" style={{ backgroundColor: "var(--primary-color)" }}
                >
Free Consultation                </a>
              </div>
              {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HeroSection;
