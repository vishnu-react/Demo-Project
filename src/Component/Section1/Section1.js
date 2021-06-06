import React from "react";
import "./Section1.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap";
import bath3 from "../../image/bath3.jpg";
import bath2 from "../../image/bath2.jpg";
import bath1 from "../../image/bath1.jpg";

export default function Section1() {
  return (
    // <section className="division4">
    <div className="alignment1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="align1">
              <h3 className="Bathware">BATHWARE</h3>
              <p className="p3">
                Somany ventured into Sanitaryware & Bath fittings vertical which
                deals in imported and domestic products under the brand name
                'Somany Signature' and 'French Collection' respectively. Crafted
                to perfection our wide range of sanitaryware, faucets, fittings
                and accessories cater to those who appreciate the finer
                things in life.
              </p>
              <Button className="btn btn-light button2 ">SEE MORE</Button>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <img className="bath3 mt-5 " src={bath3}></img>
            <img className="bath1 mt-5" src={bath1}></img>
            <img className="bath2 mt-3 " src={bath2}></img>
          </div>
        </div>
      </div>
      </div>
    // </section>
  );
}
