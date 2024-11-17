"use client"; // This will make this component a client-side component

import { useState, useEffect } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";


export default function RootLayout({ children }: React.PropsWithChildren) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 6 seconds
    }, 1000); //9000

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Justice - Instant Legal Help</title>
      </head>
      <body>
        {/* Show the preloader while loading */}
        {loading && <Preloader />}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
