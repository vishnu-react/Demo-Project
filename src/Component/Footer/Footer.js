import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import whitelogo from "../../image/somanywhite-logo.png";
import recog1 from "../../image/recog1.jpg";
import recog2 from "../../image/recog2.jpg";
import recog3 from "../../image/recog3.jpg";
import recog4 from "../../image/recog4.jpg";
import recog5 from "../../image/recog5.jpg";
import recog6 from "../../image/recog6.jpg";
import recog7 from "../../image/recog7.jpg";
import recog8 from "../../image/recog8.jpg";
import recog9 from "../../image/recog9.jpg";
import recog10 from "../../image/recog10.jpg";
import { Carousel } from "react-responsive-carousel";
import { InputGroup, FormControl, Button } from "react-bootstrap";
function Footer() {
  return (
    <footer className="bg-dark footer1">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-8">
            <img className="whitelogo mt-3" src={whitelogo} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className="paras">
              With 49 years of redefining the Indian interior décor and tiles
              industry, Somany Ceramics is your ideal destination for an
              extensive range of products including ceramic tile, floor tiles,
              polished vitrified tiles, digital tiles, wall tiles, wall
              claddings, sanitary ware, bathroom fittings, and state-of-the-art
              tile laying solutions. We are a complete décor solutions provider
              and understand the evolving needs of customers and the dynamic
              trends in the market. Our high quality craftsmanship,
              ground-breaking style and focus on innovation remains unparalleled
              in the industry. This is testified by our expertise in everything
              encompassing the domain of floor tiles design, bathroom tiles
              design, wall tiles design, kitchen tiles design, marble tiles,
              wooden floor tiles design, and bathroom fittings. We also offer
              world class tile laying solutions with our Tile Master training
              program, waterproof and chemical-resistant Ezy Grout, and Ezy Fix
              adhesive which makes us a one-stop shop for all your tiling needs.
              Build your dream spaces and experience limitless décor
              possibilities, only with Somany Ceramics.
              <span>&nbsp;Know More</span>
            </p>
            {/* <hr className="second-line"></hr> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-12">
            <InputGroup className="mb-3">
              <FormControl
                className="formcontrol"
                placeholder="Enter your email address and subscribe to our newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" className="buttn1">
                  SUBSCRIBE
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <hr></hr>
          </div>
        </div>
        <div className="row pb-5">
          <h5 className="our-recognition">Our Recognition</h5>
          <div className="col-md-1 col-5 m-2">
            <img className="recog1" src={recog1} />
          </div>
          <div className="col-md-1 col-5 m-2 ">
            <img className="recog2" src={recog2} />
          </div>
          <div className="col-md-1 col-5 m-2 ">
            <img className="recog3" src={recog3} />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog4" src={recog4} />
          </div>
          <div className="col-md-1 col-5 m-2 ">
            <img className="recog5" src={recog5} />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog6" src={recog6} />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog7" src={recog7} />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog8" src={recog8} />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog9" src={recog9} />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog10" src={recog10} />
          </div>
        </div>


        {/* <div className="mt-4">
        <div className="row">
          <div className="col-md-2 col-xs-6">
            <h6>Products</h6>
            <div className="footer1_list">
              <li>
                <a href="#">Floor Tiles</a>
              </li>
              <li>
                <a href="#">Wall Tiles</a>
              </li>
              <li>
                <a href="#">Sanitaryware</a>
              </li>
              <li>
                <a href="#">Bath Fittings</a>
              </li>
              <li>
                <a href="#">Catalogues</a>
              </li>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6>About Us</h6>
            <div className="footer1_list">
              <li>
                <a href="#">Corporate Videos</a>
              </li>
              <li>
                <a href="#">Company Overview</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amalgamation</a>
              </li>
              <li>
                <a href="#">International Business</a>
              </li>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6>Activities</h6>
            <div className="footer1_list">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Media Gallery</a>
              </li>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6>Get In Touch</h6>
            <div className="footer1_list">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Dealer Network</a>
              </li>
              <li>
                <a href="#">Dealer Login</a>
              </li>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6>Quick Links</h6>
            <div className="footer1_list">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Tile Laying Solutions</a>
              </li>
              <li>
                <a href="#">Payment By QR Code</a>
              </li>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6>Social Media</h6>
            <div className="footer1_social">
              <li>
                <a href="https://www.facebook.com/SomanyCeramic">
                  <i className="fab fa-facebook-f m-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter m-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram m-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in m-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube m-2"></i>
                </a>
              </li>
              <li>
                <a href="#" className="m-2">
                  Download App
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-android m-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-apple m-2"></i>
                </a>
              </li>
            </div>
          </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-12 col-12">
              <hr className="hr_last"></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <p className="para2">
                © Somany Ceramics. All Rights Reserved.
                <span className="span1">
                  <a href="#"> Employee login | Disclaimer</a>
                </span>
              </p>
            </div>

            <div className="col-md-4 col-12">
              <p className="para2">
                <span className="span2">
                  Toll Free:
                  <a href="#">
                    <i class="fas fa-phone-alt"></i>1800-1030-004
                  </a>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p className="para2">
                International Business Enquiries:
                <span className="span1">
                  <a href="#">export@somanyceramics.com</a>
                </span>
              </p>
            </div>
          </div> */}
        {/* </div>
        </div> */}
      </div>
      {/* <footer className="footer1 mt-4">
        <div className="container"> */}
      {/* <div className="row">
            <div className="col-md-2 col-6">
              <h6>Products</h6>
              <ul className="footer1_list">
                <li>
                  <a href="#">Floor Tiles</a>
                </li>
                <li>
                  <a href="#">Wall Tiles</a>
                </li>
                <li>
                  <a href="#">Sanitaryware</a>
                </li>
                <li>
                  <a href="#">Bath Fittings</a>
                </li>
                <li>
                  <a href="#">Catalogues</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h6>About Us</h6>
              <ul className="footer1_list">
                <li>
                  <a href="#">Corporate Videos</a>
                </li>
                <li>
                  <a href="#">Company Overview</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Amalgamation</a>
                </li>
                <li>
                  <a href="#">International Business</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h6>Activities</h6>
              <ul className="footer1_list">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Media Gallery</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h6>Get In Touch</h6>
              <ul className="footer1_list">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Dealer Network</a>
                </li>
                <li>
                  <a href="#">Dealer Login</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h6>Quick Links</h6>
              <ul className="footer1_list">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Tile Laying Solutions</a>
                </li>
                <li>
                  <a href="#">Payment By QR Code</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h6>Social Media</h6>
              <ul className="footer1_social">
                <li>
                  <a href="https://www.facebook.com/SomanyCeramic">
                    <i className="fab fa-facebook-f m-1"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter m-1"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram m-1"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in m-1"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube m-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="m-1">
                    Download App
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-android m-1"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-apple m-1"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12 col-12">
                <hr className="hr_last"></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <p className="para2">© Somany Ceramics. All Rights Reserved.<span className="span1"><a href="#"> Employee login  |   Disclaimer</a></span></p>
              </div>

              <div className="col-md-4 col-12">
                <p className="para2"><span className="span2">Toll Free:<a href="#"><i class="fas fa-phone-alt"></i>1800-1030-004</a></span></p>
              </div>
              <div className="col-md-4 col-12">
                <p className="para2">International Business Enquiries:<span className="span1"><a href="#">export@somanyceramics.com</a></span></p>
              </div>
            </div>
          </div> */}
      {/* </div>
      </footer> */}
    </footer>
  );
}

export default Footer;
