import React from "react";
// import Building from "../Building/Building";
import Carouse from "../Carousal/Carouse";
import Downcarouse from "../down-carouse/downcarouse";
import Footer from "../Footer/Footer";
import Footer1 from "../Footer1/Footer1";
// import Header1 from "../Header1/Header1";
import Headr1 from "../Header1/Headr1";
import Section from "../section/section";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";

function Home() {
  return (
    <div>
      <Headr1/>
      {/* <Header1 /> */}
      <Carouse />
      {/* <Building /> */}
      <Downcarouse />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Footer />
      <Footer1 /> */}
    </div>
  );
}

export default Home;
