import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./TileHeader.css";
import logo from "../../image/SomanyLogo2.svg";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function TileHeader() {
  return (
    <header className="tile-header">
      <div className="container">
        <div className="row">
          <Navbar bg="white" expand="lg">
            <div className="col-md-4 col-8 col-lg-2 ">
              <img className="logo" src={logo}></img>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="hamburg"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <div className="sub-menu">
                <Link to="/">
                  <Button className="home-button">
                    <i className="fas fa-home"></i> Home
                  </Button>
                </Link>
                <Link to="/bathwarehome">
                  <Button className="bathware-button">
                    <i className="fas fa-bath"></i> Bathware
                  </Button>
                </Link>
              </div>

              <Nav className="mr-auto menus1">
                <NavDropdown title="WALL" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="drop-list">
                    Categories
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="drop-list">
                    Colour
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" className="drop-list">
                    Pattern
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                   Shape
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                  Application Space
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="FLOOR" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="drop-list">
                  Categories
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2" className="drop-list">
                  Colour
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3" className="drop-list">
                  Pattern
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                  Shape
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="drop-list">
                  Application Space
                  </NavDropdown.Item>
                </NavDropdown>

                <Link to="/tiles" className="m-3 link">
                  BATHROOM
                </Link>
                <Link to="#link" className="m-3 link">
                  KITCHEN
                </Link>
                <NavDropdown title="ALL ROOMS" id="basic-nav-dropdown">
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

                <NavDropdown title="GET INSPIRED" id="basic-nav-dropdown">
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
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
}

export default TileHeader;
