import React from "react";
import "./BathwareHeader.css";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo1 from "../../image/bathwarelogo.png";

function BathwareHeader() {
  return (
    <div className="bathware-header">
      <div className="container">
        <div className="row">
          <Navbar bg="white" expand="lg">
            <div className="col-md-4 col-8 col-lg-2 ">
              <img className="logo1" src={logo1}></img>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="hamburg_bathware"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <div className="sub-menu">
                <Link to="/">
                  <Button className="home-button">
                    <i className="fas fa-home"></i> Home
                  </Button>
                </Link>
                <Link to="/tilehome">
                  <Button
                    className="bathware-button2"
                    style={{ width: "100px" }}
                  >
                    <i className="fas fa-th-large"></i> Tiles
                  </Button>
                </Link>
              </div>

              <Nav className="mr-auto menus1">
                <NavDropdown title="SANITARYWARE" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="drop-list">
                    Toilets
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="drop-list">
                    Basins
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" className="drop-list">
                    Vanity Cabinets
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Cisterns
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Urinals
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Toilet Seats
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BATH FITTINGS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="drop-list">
                    Faucets
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="drop-list">
                    Showers
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" className="drop-list">
                    Bathfitting <br />
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Allied Products
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="COLLECTIONS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="drop-list">
                    FLOOR
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="drop-list">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" className="drop-list">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Separated link
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="SMART BATHROOM" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="drop-list">
                    FLOOR
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="drop-list">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" className="drop-list">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Separated link
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Link to="/tiles" className="m-3 link">
                  WATERHEATER
                </Link>
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default BathwareHeader;
