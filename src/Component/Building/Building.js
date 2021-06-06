import React from "react";
import { Link } from "react-router-dom";
import "./Building.css";

function Building() {
  return (
    
      <div className="main-div">
        <div className="container">
          <div className="row pt-5">
              <div className="col-md-3 col-xs-6">
            <Link className="build1" to="#">
              <i className="far fa-building"></i>
              <hr className="line" />
            <p className="paras-one">
              COMPANY
              <br />
              OVERVIEW
            </p>
            </Link>
            </div>

            <div className="col-md-3 col-xs-6">
            <Link className="build1" to="#">
              <i class="fas fa-map-marker-alt"></i>

              <hr className="line" />
            <p className="paras-one">
            EXPERIENCE
              <br />
              CENTER
            </p>
            </Link>
            </div>
            <div className="col-md-3 col-xs-6">

            <Link className="build1" to="#">
            <i class="fas fa-tv"></i>
              <hr className="line" />
            <p className="paras-one">
            3D TILE <br />
              VISUALIZER
            </p>
            </Link>
            </div>
            <div className="col-md-3 col-xs-6">

            <Link className="build1" to="#">
            <i class="fas fa-th"></i>
              
              <hr className="line" />
            <p className="paras-one">
            TILE <br />
              MASTER
            </p>
            </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Building;
