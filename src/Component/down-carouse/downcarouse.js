import React from "react";
import "./downcarouse.css";
import { Link } from "react-router-dom";

function Downcarouse() {
  return (
//     <div className="main-div mt-2">
//     <div className="container">
//       <div className="row pt-5">
//           <div className="col-md-3 col-xs-6">
//         <a className="buildings1" href="#">
//           <i className="far fa-building"></i>
//           <hr className="line1" />
//         <p className="para-one1">
//           COMPANY
//           <br />
//           OVERVIEW
//         </p>
//         </a>
//         </div>

//         <div className="col-md-3 col-xs-6">
//         <a className="buildings1" href="#">
//           <i class="fas fa-map-marker-alt"></i>

//           <hr className="line1" />
//         <p className="para-one1">
//         EXPERIENCE
//           <br />
//           CENTER
//         </p>
//         </a>
//         </div>
//         <div className="col-md-3 col-xs-6">

//         <a className="buildings1" href="#">
//         <i class="fas fa-tv"></i>
//           <hr className="lin1e" />
//         <p className="para-one1">
//         3D TILE <br />
//           VISUALIZER
//         </p>
//         </a>
//         </div>
//         <div className="col-md-3 col-xs-6">

//         <a className="buildings1" href="#">
//         <i class="fas fa-th"></i>
          
//           <hr className="line1" />
//         <p className="para-one1">
//         TILE <br />
//           MASTER
//         </p>
//         </a>
//         </div>
//       </div>
//     </div>
//   </div>

       <section className="division2 pt-3">
    <div className="container">
      <div className="row">
        
        <div className="col-md-3 col-6">
          <span className="under">
            <a className="buildings" href="#">
              <i className="far fa-building"></i>
            </a>
          </span>
          <hr className="line3" />
          <p className="para-one">
            COMPANY
            <br />
            OVERVIEW
          </p>
        </div>
        <div className="col-md-3 col-6">
          <span>
            <a className="buildings" href="#">
              <i class="fas fa-map-marker-alt"></i>
            </a>
          </span>
          <hr className="line3" />
          <p className="para-one">
            <a href="#">
              EXPERIENCE
              <br />
              CENTER
            </a>
          </p>
        </div>
        <div className="col-md-3 col-6 ">
          <span>
            <a className="buildings" href="#">
              <i class="fas fa-tv"></i>
            </a>
          </span>
          <hr className="line3"></hr>
          <p className="para-one">
            <a href="#">
              3D TILE <br />
              VISUALIZER
            </a>
          </p>
        </div>
        <div className="col-md-3 col-6 ">
          <span>
            <a className="buildings" href="#">
              <i class="fas fa-th"></i>
            </a>
          </span>
          <hr className="line3"></hr>
          <p className="para-one">
            <a href="#">
              TILE <br />
              MASTER
            </a>
          </p>
        </div>
      
      </div>
    </div>
     </section>
  );
}

export default Downcarouse;
