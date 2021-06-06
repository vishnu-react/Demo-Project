import React from 'react'
import './TileCarouse.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Carousel} from 'react-bootstrap'
import tilecarouse1 from '../../image/tilecarouse1.jpg'
import tilecarouse2 from '../../image/tilecarouse2.jpg'


function TileCarouse() {
    return (
        <div className="carouserow">
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={tilecarouse1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={tilecarouse2}
      alt="Second slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default TileCarouse
