// import { Pagination}  from "@material-ui/core";
import React from "react";
import { Nav,Pagination } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import carddrop1 from "../../image/carddrop1.jpg";
import carddrop2 from "../../image/carddrop2.jpg";
import carddrop3 from "../../image/carddrop3.jpg";
import carddrop4 from "../../image/carddrop4.jpg";
import carddrop5 from "../../image/carddrop5.jpg";
import carddrop6 from "../../image/carddrop6.jpg";
// import PaginationRounded from "../Pagination/PaginationRounded";
import "./TileDropdown.css";
function TileDropdown() {
  return (
    <div className="tiledropdown">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <Nav className="nav mt-2">
              <label for="btn" className="lab">
                FILTER BY <i className="fas fa-caret-down but"></i>
              </label>
              <input type="checkbox" id="btn" />

              <ul className="menu">
                <li>
                  <label for="btn-1" className="first">
                    APPLICATION
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-1" />

                  <ul>
                    <li>
                      <a href="#">Wall</a>
                    </li>
                    <li>
                      <a href="#">Floor</a>
                    </li>
                    <li>
                      <a href="#">Step</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-2" className="third">
                    TILE SIZE
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-2" />

                  <ul>
                    <li>
                      <a href="#">148.5*600mm</a>
                    </li>
                    <li>
                      <a href="#">148.5*600mm</a>
                    </li>
                    <li>
                      <a href="#">196*200mm</a>
                    </li>
                    <li>
                      <a href="#">148.5*600mm</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-3" className="third">
                    FINISH
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-3" />

                  <ul>
                    <li>
                      <a href="#">Dazzle</a>
                    </li>
                    <li>
                      <a href="#">Durastone</a>
                    </li>
                    <li>
                      <a href="#">Digital Durastone</a>
                    </li>
                    <li>
                      <a href="#">Diamond Polish</a>
                    </li>
                    <li>
                      <a href="#">Full Polished</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-4" className="second">
                    BRAND/SERIES
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-4" />
                  <ul>
                    <li>
                      <a href="#">Ceramic</a>
                    </li>
                    <li>
                      <a href="#">Duragres</a>
                    </li>
                    <li>
                      <a href="#">Duragres Steps</a>
                    </li>
                    <li>
                      <a href="#">Polished Vitrified</a>
                    </li>
                    <li>
                      <a href="#">Durastone</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-5" className="third">
                    COLOUR
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-5" />

                  <ul>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-6" className="third">
                    PATTERN
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-6" />

                  <ul>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-7" className="third">
                    SHAPE
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-7" />

                  <ul>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="btn-8" className="third">
                    USAGE AREA
                    <i className="fas fa-caret-down but"></i>
                  </label>
                  <input type="checkbox" id="btn-8" />

                  <ul>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                    <li>
                      <a href="#">Finish</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Nav>
            
           
          </div>
          <div className="col-md-8 col-12">
            <div className="row align-items-center rowtwo">
            {/* <hr /> */}

              <div className="col-md-4 col-12">
                {/* <p className="para-drop">Sort By</p> */}
                <span className="span_drop">Sort By</span>
                <select className="listbox">
                  <option>Position</option>
                  <option>Product Name</option>
                  <option>New Arrival</option>
                </select>
              </div>
              <div className="col-md-3 col-12">
                <span className="span_drop"> Items 1-21 of 3440</span>
              </div>
              <div className="col-md-5 col-12">
               {/* <PaginationRounded /> */}
               <Pagination>
  <Pagination.Item active>{1}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  {/* <Pagination.Item active>{4}</Pagination.Item> */}
  <Pagination.Ellipsis />

  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{160}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
              </div>
            </div>
            {/* <hr/> */}
            <div className="row">
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop1} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop2} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop3} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
    
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop4} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop5} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop6} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>

                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop1} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop2} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop3} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
    
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop4} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop5} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop6} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop1} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop2} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop3} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                  <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
    
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop4} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop5} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop6} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop4} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop5} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                <div className="col-md-4 col-6">
                <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={carddrop6} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-light">
                    <large className="text-grey">
                     <Link to="#" className="ziet">ZIET LIGHT</Link>
                     <br/>
                     <span className="font12">SIZE:
                     1000x1000mm</span>
                     <br/>
                     <span className="font12">ULTRA LARGE</span>

                    </large>
                  </Card.Footer>
                </Card>
               
                </CardGroup>
                </div>
                
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-md-4 col-12">
                {/* <p className="para-drop">Sort By</p> */}
                <span className="span_drop">Sort By</span>
                <select className="listbox">
                  <option>Position</option>
                  <option>Product Name</option>
                  <option>New Arrival</option>
                </select>
              </div>
              <div className="col-md-3 col-12">
                <span className="span_drop"> Items 1-21 of 3440</span>
              </div>
              <div className="col-md-5 col-12">
               {/* <PaginationRounded /> */}
               <Pagination>
  <Pagination.Item>{1}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item active>{3}</Pagination.Item>
  {/* <Pagination.Item active>{4}</Pagination.Item> */}
  <Pagination.Ellipsis />

  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{160}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileDropdown;
