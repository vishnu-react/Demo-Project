import React from 'react'
import "./BathwareCarouse.css"
import {Carousel} from 'react-bootstrap'
import bathcarouse1 from '../../image/bathcarouse1.jpg'
import bathcarouse2 from '../../image/bathcarouse2.jpg'
import bathcarouse3 from '../../image/bathcarouse3.jpg'


function BathwareCarouse() {
    return (
        <div className="bathwarecarouse">
        <Carousel>
<Carousel.Item interval={1000}>
<img
  className="d-block w-100"
  src={bathcarouse1}
  alt="First slide"
/>

</Carousel.Item>
<Carousel.Item interval={1000}>
<img
  className="d-block w-100"
  src={bathcarouse2}
  alt="Second slide"
/>

</Carousel.Item>
<Carousel.Item interval={1000}>
<img
  className="d-block w-100"
  src={bathcarouse3}
  alt="Second slide"
/>

</Carousel.Item>
</Carousel>
    </div>
    )
}

export default BathwareCarouse
