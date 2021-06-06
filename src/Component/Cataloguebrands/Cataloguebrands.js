import React from "react";
import "./Cataloguebrands.css";
import brandcard1 from "../../image/brand-card1.svg";
import brandcard2 from "../../image/brandcard2.svg";
import brandcard3 from "../../image/brandcard3.svg";
import brandcard4 from "../../image/brandcard4.svg";
import brandcard5 from "../../image/brandcard5.svg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Cataloguebrands() {
  return (
    <div className="bg-light mt-5 alignment4">
      <div className="container ">
        <div className="row align-items-center">
          <div className="cata_align">
            <h3 className="our-brand">OUR BRANDS</h3>
            <div className="col-md-12 col-12">
              <Carousel
                autoPlay
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                interval="3000"
                infiniteLoop={true}
              >
                <div className="img1 ">
                  <img className="brandcard1" src={brandcard1} />
                </div>
                <div className="img1">
                  <img className="brandcard2" src={brandcard2} />
                </div>
                <div className="img1">
                  <img className="brandcard3" src={brandcard3} />
                </div>
                <div className="img1">
                  <img className="brandcard4" src={brandcard4} />
                </div>
                <div className="img1">
                  <img className="brandcard5" src={brandcard5} />
                </div>
              </Carousel>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cataloguebrands;
