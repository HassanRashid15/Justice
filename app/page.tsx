import React from "react";
import HeroSection from "./components/HeroSecton";
import Practice from "./components/Practice";
import Clients from "./components/Clients";
import Expertise from "./components/Expertise";
import Newsletter from "./components/Newsletter";
function page() {
  return (
    <div>
      <HeroSection />
      <Practice />
      <Clients/>
      <Expertise/>
      <Newsletter/>
    </div>
  );
}

export default page;
