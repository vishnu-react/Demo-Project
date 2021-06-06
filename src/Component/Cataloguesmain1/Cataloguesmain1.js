import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";
import { Nav, Pagination } from "react-bootstrap";

import "./Cataloguesmain1.css";
import cataimg1 from "../../image/cataimg1.jpg";
import cataimg2 from "../../image/cataimg2.jpg";
import cataimg3 from "../../image/cataimg3.jpg";
import cataimg4 from "../../image/cataimg4.jpg";
import cataimg5 from "../../image/cataimg5.jpg";
import cataimg6 from "../../image/cataimg6.jpg";

function Cataloguesmain1() {
  return (
    <div className="cata_main1">
      <div className="container  cata_contain">
        <div className="row pt-5 ">
          <div className="col-md-3 col-12">
            <div className="aside">
              {/* <div className="row"> */}
              <div className="sidebar1">
                <div className="side-title">
                  <span className="cata-span">SOMANY TILES CATALOGUES</span>
                </div>
                <div className="sub-list">
                  <ul className="category-list">
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Ceramic Wall & Floor
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Vitro Floor
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Duragres/GVT Wall & Floor
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Durastone Wall & Floor
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="side-title">
                  <span className="cata-span">SOMANY BATHWARE CATALOGUES</span>
                </div>
                <div className="sub-list">
                  <ul className="category-list">
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Sanitaryware
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Bathfittings
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Water Heater
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Smartsense
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Somany Surface Disinfectant Cleaner
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="side-title">
                  <span className="cata-span">OTHER CATALOGUES</span>
                </div>
                <div className="sub-list">
                  <ul className="category-list">
                    <li className="listing">
                      <Link to="#" className="list_link">
                        Other Catalogues
                      </Link>
                    </li>
                    <li className="listing">
                      <Link to="#" className="list_link">
                        E - Newsletter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="col-md-9 col-12">
            <div className="row">
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg1} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg2} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres Unit1 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">East/North India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg3} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres valor Unit 3 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">West India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg4} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg5} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg6} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg1} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg2} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres Unit1 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">East/North India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg3} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres valor Unit 3 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">West India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg4} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg5} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg6} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg1} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg2} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres Unit1 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">East/North India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg3} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres valor Unit 3 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">West India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg4} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg5} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg6} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>

              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg1} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Somany Newsletter | May 2021
                        </Link>
                        <br />
                        <br />
                        <span className="font12">All India</span>
                        <br /> <br />
                        <span className="font12">
                          28/05/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg2} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres Unit1 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">East/North India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="col-md-4 col-12">
                <CardGroup>
                  <Card className="m-2">
                    <Card.Img variant="top" src={cataimg3} />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                    </Card.Body>
                    <Card.Footer className="bg-light p-3">
                      <large className="text-grey">
                        <Link to="#" className="ziet">
                          Duragres valor Unit 3 | 600x1200mm
                        </Link>
                        <br />
                        <br />
                        <span className="font12">West India</span>
                        <br /> <br />
                        <span className="font12">
                          10/03/2021 <i className="fas fa-download downld"></i>
                        </span>
                      </large>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="row">
                <div className="col-md-4 col-12">
                  <h3 className="itm pt-5">Items 1 to 21 of 105 total</h3>
                </div>
                <div className="col-md-4 col-12">
                  <Pagination>
                    <Pagination.Item active>{1}</Pagination.Item>

                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cataloguesmain1;
