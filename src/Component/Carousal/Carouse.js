import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import logo1 from '../../image/img1.jpg'
import logo2 from '../../image/img2.jpg'
import logo3 from '../../image/img3.jpg'
import logo4 from '../../image/morocco.jpg'
import logo5 from '../../image/img5.jpg'
import './Carouse.css'
export default function Carouse() {
    return (
      // <section className="division1">
      <div className="home_carouse">
       <div className="row">
         <div className="col-md-12 col-12">
            
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo1}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo2}
            alt="Second slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo3}
            alt="Third slide"
          />
      
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo4}
            alt="Third slide"
          />
      
        
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo5}
            alt="Third slide"
          />
      
        
        </Carousel.Item>
      </Carousel>
			
         </div>
         </div>
         
       </div>


       /* <div className="container">

       <div className="row">

       <div className="col-md-2  ">
        
         </div>

         <div className="col-md-2 col-6 ">
         <a className="building" href="#"><i className="far fa-building "></i></a>
         <hr className="hr1"></hr>
         <a className="para-one" href="#">COMPANY<br/>OVERVIEW</a>

         </div>

         <div className="col-md-2 col-6 ">
         <a className="building" href="#"><i class="fas fa-map-marker-alt"></i></a>
         <hr></hr>
         <a className="para-one" href="#">EXPERIENCE<br/>CENTER</a>

         </div>

         <div className="col-md-2 col-6 ">
         <a className="building" href="#"><i class="fas fa-tv"></i></a>
         <hr></hr>
         <a className="para-one" href="#">3D TILE <br/>VISUALIZER</a>

         </div>

         <div className="col-md-2 col-6 ">
         <a className="building" href="#"><i class="fas fa-th"></i></a>
         <hr></hr>
         <a className="para-one" href="#">TILE <br/>MASTER</a>

         </div>

         <div className="col-md-2  ">
         </div>

       </div>
       </div> */

      

       
      //  </div>
      //   </section>
        
    )
}
