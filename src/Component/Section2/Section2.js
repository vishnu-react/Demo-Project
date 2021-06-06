import React from "react";
import "./Section2.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardGroup } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import card1 from "../../image/card1.jpg";
import card2 from "../../image/card2.jpg";
// import card3 from "../../image/card3.jpg"
import card4 from "../../image/card4.jpg";
import card5 from "../../image/card5.jpg";

export default function Section2() {
  return (
    //  <section className="bg-light mt-5 division5">
    <div className="bg-light mt-5 alignment2">
      <div className="container">
        <div className="row align-items-center">
          <div className="align3">
            <h2 className="new-product">NEW PRODUCTS</h2>
            <div className="col-md-6 col-12">
              <h4 className="tiles_align">TILES</h4>

              <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={card1} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-dark">
                    <large className="text-white">
                      Grande Imp Chimera Wood Ash imp
                    </large>
                  </Card.Footer>
                </Card>
                <Card className="m-2">
                  <Card.Img variant="top" src={card2} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-dark">
                    <large className="text-white">
                      Grande Velvet Inedita Nero Décor
                    </large>
                  </Card.Footer>
                </Card>
                {/* <Card>
  
    <Card.Img variant="top" src={card3} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    
  </Card> */}
              </CardGroup>
            </div>
            <div className="col-md-6 col-12">
              <h4 className=" bathware_align">BATHWARE</h4>
              <CardGroup>
                <Card className="m-2">
                  <Card.Img variant="top" src={card4} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                  </Card.Body>
                  <Card.Footer className="bg-dark">
                    <large className="text-white">
                      Neo Pillar Tap with pillar tap sink imp
                    </large>
                  </Card.Footer>
                </Card>
                <Card className="m-2">
                  <Card.Img variant="top" src={card5} />
                  <Card.Body>{/* <Card.Title></Card.Title> */}</Card.Body>
                  <Card.Footer className="bg-dark">
                    <large className="text-white">
                      Neo Sink Tap With Spout Tap sink
                    </large>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  </section>
  );
}
