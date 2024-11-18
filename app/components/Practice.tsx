import React from "react";
import { FaStar, FaHeart, FaCheckCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const cardData = [
  {
    icon: <FaStar />,
    title: "Banking and Finance Law",
    description:
      "Far far away, behind the word mountains, far from the countries.",
  },
  {
    icon: <FaHeart />,
    title: "Commercial Law",
    description:
      "Far far away, behind the word mountains, far from the countries.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Corporate Law",
    description:
      "Far far away, behind the word mountains, far from the countries.",
  },
  {
    icon: <FaStar />,
    title: "Criminal Law",
    description:
      "Far far away, behind the word mountains, far from the countries.",
  },
];

const statCardData = [
  {
    count: "40K+",
    label: "Variations",
    description:
      "Many desktop publishing packages now use Pinky as their default model text.",
    gradientId: "icon1-a",
  },
  {
    count: "30K+",
    label: "Variations",
    description:
      "Many desktop publishing packages now use Pinky as their default model text.",
    gradientId: "icon2-a",
  },
  {
    count: "20K+",
    label: "Variations",
    description:
      "Many desktop publishing packages now use Pinky as their default model text.",
    gradientId: "icon3-a",
  },
  {
    count: "10K+",
    label: "Variations",
    description:
      "Many desktop publishing packages now use Pinky as their default model text.",
    gradientId: "icon4-a",
  },
];

function Practice() {
  return (
    <div className="bg-gray-600 p-10">
      {/* First section */}
      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
        <div className="md:flex md:flex-col md:justify-center gap-8">
          <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
            Our{" "}
            <span style={{ color: "var(--primary-color)" }}>
              Practice Areas
            </span>
          </h2>
          <p className="md:text-lg text-gray-900">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <p className="md:text-lg text-gray-900">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <div>
            <button
              className="text-start p-5 px-8"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto mb-4"
            >
              <div className="text-blue-500 text-4xl mb-4 mr-4">
                {card.icon}
              </div>
              <div>
                <h1
                  className="text-sm font-bold text-gray-800 mb-0"
                  style={{ color: "var(--primary-color)" }}
                >
                  {card.title}
                </h1>
                <p className="text-gray-600 text-start">{card.description}</p>
              </div>
            </div>
          ))}
          <div className="practice-custom-box">
            <h5
              className="max-w-sm mx-auto mb-0 gap-4 flex items-center  "
              style={{ color: "var(--primary-color)" }}
            >
              More Practice Areas <FaLongArrowAltRight />
            </h5>
          </div>
        </div>
      </div>

      {/* Second section (Dynamic Stat Cards) */}
      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
        <div className="md:flex md:flex-col md:justify-center ">
          <h2 className="text-white text-2xl md:text-3xl lg:text-6xl font-medium mb-0">
            <span style={{ color: "var(--primary-color)" }}> 50 Years </span>of
            Experience in Various Cases
          </h2>
        </div>

        <div className="w-full h-auto py-10">
          <div className="flex flex-wrap justify-around gap-7">
            {statCardData.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 rounded-lg shadow-2xl bg-black md:bg-purple-400"
              >
                <section className="flex flex-col items-center justify-center p-6">
                  <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="20"
                    >
                      <defs>
                        <linearGradient
                          id={card.gradientId}
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#A5B4FC" />
                          <stop offset="100%" stopColor="#4F46E5" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="nonzero">
                        <path
                          fill={`url(#${card.gradientId})`}
                          d="M20.625 0H9.375a9.375 9.375 0 0 0 0 18.75h11.25a9.375 9.375 0 0 0 0-18.75Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2>
                    <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                      {card.count}
                    </span>
                    <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                      {card.label}
                    </span>
                  </h2>
                  <p className="text-sm text-slate-500">{card.description}</p>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;
