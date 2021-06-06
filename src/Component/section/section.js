import React from "react";
import "./section.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap";
import sectionimg2 from "../../image/section-image2.jpg";
import sectionimg7 from "../../image/section-img7.jpg";
import sectionimg6 from "../../image/section-img6.jpg";
// import {formgroup} from 'react-bootstrap'

export default function Section() {
  return (
    <div className="bg-light mt-5 alignment">
      {/* <section className="bg-light division3"> */}
      <div className="container">
        <div className="row mt-4 ">
          <div className="col-md-6 col-12">
            <img className="sectionimg2 mt-4" src={sectionimg2}></img>

            <img className="sectionimg7 m-3" src={sectionimg7}></img>
            <img className="sectionimg6 m-3" src={sectionimg6}></img>
          </div>
          <div className="col-md-6 col-12">
              <div className="align">
            <h2 className=" Tiles">TILES</h2>
            <p className="p2">
              Somany has adorned homes with delight, exuberance and
              vivaciousness resounding with the quality, strength and life of
              its  products for over four decades. A complete solution
              provider in terms of décor solutions with widest product selection
              categories – Ceramic Wall and Floor, Polished Vitrified Tiles,
              Glazed Vitrified Tiles, Outdoor Tiles.
            </p>
            <Button className=" btn btn-light button1 ">SEE MORE</Button>
            <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </section>
  );
}
