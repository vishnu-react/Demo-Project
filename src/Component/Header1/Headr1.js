import React from "react";
import "./Header1.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import logo from "../../image/SomanyLogo2.svg";
function Headr1() {
  return (
    <div className="Head2">
      <div className="container">
        <div className="row">
          <Navbar bg="white" expand="lg" className="pt-3 mb-2">
            <div className="col-md-4 col-8 col-lg-2 ">
              <img className="logo" src={logo}></img>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="hamburg"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto menus">
                <Link to="/tilehome" className="links">
                  <i className="fas fa-th-large"></i> Tiles |
                </Link>
                <Link to="/bathwarehome" className="links">
                  <i className="fas fa-bath"></i> Bathware |
                </Link>
                <Link to="/catalogueshome" className="links">
                  <i className="fas fa-download"></i> Catalogues |
                </Link>
                <Link to="/wtbhome" className="links">
                  <i className="fas fa-map-marker-alt"></i> Where to buy |
                </Link>
                <Link to="/mediahome" className="links">
                  <i className="fas fa-images"></i> Media Gallery |
                </Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                {/* <Button variant="outline-success" className="search_btn btn btn-center">Search</Button> */}
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Headr1;
