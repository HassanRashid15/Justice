import React, { useState, useEffect } from "react";

// Preloader component
const Preloader = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Hide spinner after 3 seconds
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(false); // Hide the spinner
    }, 3000); // 3000ms = 3 seconds

    // Show text after spinner is hidden
    const textTimer = setTimeout(() => {
      setShowText(true); // Show the loading text
    }, 3000); // 3000ms = 3 seconds (same as spinner hide time)

    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative flex items-center justify-center">
        {/* Show Spinner for 3 seconds */}
        {showSpinner && (
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        )}

        {/* Show Text after Spinner is hidden */}
        {showText && (
          <p className="absolute text-blue-500 font-semibold animate-fadeIn">
           Justice..
          </p>
        )}
      </div>
    </div>
  );
};

export default Preloader;
