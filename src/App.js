import React from "react";
import "./index.css";
import Navbar from "./navbar";
import Services from "./service";
import Pricing from "./pricing";
import NewsLetter from "./newletter";
import Hero from "./hero";

import Single from "./Images/single.png";
import Double from "./Images/double.png";
import Triple from "./Images/triple.png";

function App() {
  return (
    <div className="h-screen overflow-auto">
      {/* <Head />
      <Main /> */}
      <Navbar />
      <Hero />
      <Services />
      <NewsLetter />
      <div className="grid w-full md:grid-cols-3 my-10">
        <Pricing
          imageType={Single}
          userType="Single"
          storage={500}
          userAllowed={1}
          sendAmount={50}
        />
        <Pricing
          imageType={Double}
          userType="Double"
          storage={1000}
          userAllowed={2}
          sendAmount={100}
        />
        <Pricing
          imageType={Triple}
          userType="Triple"
          storage={2000}
          userAllowed={3}
          sendAmount={200}
        />
      </div>
    </div>
  );
}

export default App;
