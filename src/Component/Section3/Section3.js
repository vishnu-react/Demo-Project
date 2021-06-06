import React from "react";
import "./Section3.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from "react-bootstrap";

import innovate1 from "../../image/innovate1.jpg";
import innovate2 from "../../image/innovate2.jpg";

export default function Section3() {
  return (
    //  <section className="division6">
    <div className="mt-5 alignment3">
    <div className="container">
      <div className="row">
        <h3 className="innovation">INNOVATIONS BY SOMANY</h3>
        <p className="paragraph">
          Innovations in tiles have afforded an array of applications in
          interiors and exteriors of living spaces, to suit every design and
          utility preference. Taking forward this tradition, Somany presents
          patented VC Shield tiles that last long & Slip Shield tiles with
          slip-resistant properties.
        </p>

        <div className="col-md-12 col-12">
          {/* <img className="innovate1 mt-3 " src={innovate1}></img>
                    <img className="innovate2 mt-3 " src={innovate2}></img> */}
          <Carousel>
            <Carousel.Item>
              <img className="innovate1 mt-3 " src={innovate1} />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="innovate2 mt-3 " src={innovate2} />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
    </div>
    //  </section>
  );
}
