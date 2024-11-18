"use client";
import React from "react";
import Slider from "react-slick"; // Import the Slider component for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Import the Next.js Image component

// Replace this with your actual logos array
const logos = [
  "/images/logo1.png", // Update the logo paths to be relative to the public folder
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
];

// Dynamic content for the custom section (headings and paragraphs)
const dynamicContent = [
  {
    heading: "Why Choose Us?",
    paragraph:
      "At [Your Company], we believe in empowering your financial future with personalized wealth management strategies tailored to your unique needs. Our expert team partners with you to build a plan that grows and protects your wealth, backed by a network of trusted financial institutions.",
  },
  {
    heading: "Personalized Strategy",
    paragraph:
      "We work with you to create a wealth strategy that's tailored to your goals, risk tolerance, and lifestyle. Our team ensures that every decision we make is in alignment with your long-term vision.",
  },
  {
    heading: "Expert Financial Guidance",
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in..",
  },
  {
    heading: "Long-Term Partnerships",
    paragraph:
      "We build long-term relationships with our clients to ensure continuous support, planning, and wealth management. Your financial journey is a partnership, and we’re with you every step of the way.",
  },
];

const Clients = () => {
  // Slick settings for smooth, continuous scrolling
  const settings = {
      dots:true,
      autoplay: false,
    rtl: true,
    arrows: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200, // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // For medium screens (e.g., tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For smaller tablets and large mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-start my-10">
      <div className="my-10 p-10 pb-5">
        <h1 className="text-white text-2xl md:text-3xl lg:text-6xl font-medium mb-0">
          <span style={{ color: "var(--primary-color)" }}> Empower Yo</span>ur
          Wealth
        </h1>
        <p className="text-xl font-medium text-gray-600 my-5">
          Wealth Management Tailored for You, Backed by Trusted Banks
        </p>
      </div>

      {/* Slider Section with Dynamic Content */}
      <div className="relative py-4 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-30"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-30"></div>

        <Slider {...settings}>
          {/* Loop through dynamicContent and logos to create cards */}
          {dynamicContent.map((content, index) => (
            <div key={index} className="flex justify-center px-4 py-8">
              {/* SliderCard with Logo and Dynamic Content */}
              <div className="text-center max-w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Logo Image */}
                <div className="flex justify-center mb-6">
                  <Image
                    src={logos[index]} // Match logo to content index
                    alt={`Logo ${index + 1}`}
                    height={48} // Fixed height for logos
                    width={120} // Fixed width for logos
                  />
                </div>

                {/* Dynamic Heading and Paragraph */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {content.heading}
                </h2>
                <p className="text-gray-600">{content.paragraph}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
