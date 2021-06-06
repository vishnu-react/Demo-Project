import React from "react";
import { Link } from "react-router-dom";
import "./Mediamain1.css";
import { Card, CardGroup } from "react-bootstrap";
import YouTube from "react-youtube";

import media1 from "../../image/media1.jpg";

function Mediamain1() {
  return (
    <div className="mediamain1">
      <div className="container">
        <div className="row pt-5 pb-3">
          <div className="col-md-3 col-12  ">
            <div className="aside1 mt-4">
              <div className="sidebar-block ">
                <div className=" block-title active ">
                  <Link to="#" className="sub-titles">
                    CORPORATE VIDEO
                  </Link>
                </div>
                <div className="block-title">
                  <Link to="#" className="sub-titles1">
                    TVC
                  </Link>
                </div>
                <div className="block-title">
                  <Link to="#" className="sub-titles1">
                    PRINT
                  </Link>
                </div>
                <div className="block-title">
                  <Link to="#" className="sub-titles1">
                    DIGITAL VIDEO
                  </Link>
                </div>
                <div className="block-title">
                  <Link to="#" className="sub-titles1">
                    PRESS RELEASE
                  </Link>
                </div>
                <div className="block-title">
                  <Link to="#" className="sub-titles1">
                    EDITORIALS
                  </Link>
                </div>
                <div className="block-title">
                  <Link to="#" className="sub-titles1">
                    CORPORATE INTERVIEWS
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="row pt-3">
              <div className="col-md-3 col-12">
                <div className="navigation">
                  <div className="links-dropdown">
                    <div className="lists">
                      <Link to="#" className="filter-button active">
                        Tiles
                      </Link>
                      <Link to="#" className="filter-button">
                        Bathware
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Body>
                      <iframe
                        width="100%"
                        height="250px"
                        src="https://www.youtube.com/embed/tQnUHtaN9kc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <div className="product-details">
                          <div className="product-name maxhight">
                            Somany Ceramics Corporate Film | 2021
                          </div>
                        </div>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mediamain1;
