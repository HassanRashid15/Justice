import React from "react";
import HeroSection from "./components/HeroSecton";
import Practice from "./components/Practice";
import Clients from "./components/Clients";
function page() {
  return (
    <div>
      <HeroSection />
      <Practice />
      <Clients/>
    </div>
  );
}

export default page;
