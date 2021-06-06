import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Header1.css";
import { Link } from "react-router-dom";
// import Tiles from "../Tiles/TileHeader";

import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import logo from "../../image/SomanyLogo2.svg";

export default function Header1() {
  return (
    <header className="head2">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-12 col-12"> */}
          <Navbar bg="white" expand="lg">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="hamburg"
            />
            {/* <div className="col-md-1 col-1"></div> */}
            <div className="col-md-4 col-8 col-lg-2 ">
              <img className="logo" src={logo}></img>
            </div>
            <div className="col-md-8 col-4">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto menus ">
                  {/* <Route exact path="/tiles" component={Tiles}/> */}
                  <Link to="/tilehome" className="links">
                    <i className="fas fa-th-large"></i> Tiles |
                  </Link>
                  <Link to="#link" className="links">
                    <i className="fas fa-bath"></i> Bathware |
                  </Link>
                  <Link to="#link" className="links">
                    <i className="fas fa-download"></i> Catalogues |
                  </Link>
                  <Link to="#link" className="links">
                    <i className="fas fa-map-marker-alt"></i> Where to buy |
                  </Link>
                  <Link to="#link" className="links">
                    <i className="fas fa-images"></i> Media Gallery |
                  </Link>
                </Nav>
                {/* <Form inline>
     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     <Button variant="outline-success">Search</Button>
    
   </Form> */}
              </Navbar.Collapse>
            </div>
          </Navbar>
          {/* </div> */}
        </div>
      </div>
    </header>

    //       <header className="main-header">
    //         <div className="container">
    //           <div className="row">

    //              <Navbar bg="white" expand="lg">
    //              <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    //              <div className="small-logo col-lg-2">
    //              <img className="nulogo" src={logo}></img>

    //               </div>
    //               <Navbar.Collapse id="basic-navbar-nav " >

    //    <Nav className="mr-auto menus">

    //      <Nav.Link to="#home"><i className="fas fa-th-large"></i> Tiles |</Nav.Link>
    //      <Nav.Link to="#link"><i className="fas fa-bath"></i> Bathware |</Nav.Link>
    //      <Nav.Link to="#link"><i className="fas fa-download"></i> Catalogues |</Nav.Link>
    //      <Nav.Link to="#link"><i className="fas fa-map-marker-alt"></i> Where to buy |</Nav.Link>
    //      <Nav.Link to="#link"><i className="fas fa-images"></i> Media Gallery |</Nav.Link>

    //    </Nav>
    //    <Form inline>
    //      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //      <Button variant="outline-success">Search</Button>

    //    </Form>
    //  </Navbar.Collapse>
    //              </Navbar>
    //           </div>
    //         </div>
    //       </header>
  );
}
