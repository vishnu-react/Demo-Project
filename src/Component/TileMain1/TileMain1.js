import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import "./Tilemain1.css";
// import tilemainsection from '../../image/tilemainsection.jpg'

function TileMain1() {
  return (
    <div className="main-section">
      <div className="container">
        <div className="row">
          <div className="header-tag">
            <h3 className="head-tag1">TILES</h3>
            <h3 className="head-tag2">
              <Link to="#" className="home1">
                HOME
              </Link>
              /
              <Link to="#" className="tiles1">
                TILES
              </Link>
            </h3>
            {/* <h3 className="head-tag2"><Link to="#">TILES</Link></h3> */}
          </div>
        </div>
        <div className="row pt-5 mt-4 align-items-center head_para">
          <div className="col-md-12 col-12">
            <h3 className="tile-header-tag">
              Choose The Right Tiles, every time!
            </h3>
            <p className="para-tile1">
              Whether you want to restore the beauty of your home or add a new
              look to your space, tiles are a promising solution. Every room,
              every surface, and even walls can have a dazzling look with just a
              small addition of tiles. From vitrified, ceramics, wooden, rustic,
              glazed, non-glazed, to porcelain, mosaic and other tiles, you can
              choose from a plethora of options.
            </p>
            <p className="para-tile1">
              If you are looking for the best collection but don't want to break
              the bank, then Somany is the only destination. Somany Ceramics is
              one of the best tiles companies in India, helping customers create
              beautiful spaces with tiles for many years. Check the latest
              trends, colour, styles, textures, and designs in tiles here.
              Somany Ceramics has something for everyone!
            </p>
            <p className="para-tile1">
              Uncover the possibilities of sophisticated tiles available in
              multiple finishes and colours.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-12">

            </div>
        </div>
      </div>
    </div>
  );
}

export default TileMain1;
