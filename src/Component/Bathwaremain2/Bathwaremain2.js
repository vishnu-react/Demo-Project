import React from 'react'
import './Bathwaremain2.css'
import bathbrands1 from "../../image/bathbrands1.svg";
import bathbrands2 from "../../image/bathbrands2.svg";
import bathbrands3 from "../../image/bathbrands3.svg";

function Bathwaremain2() {
    return (
        <div className="bathwaremain2 bg-light">
            <div className="container">
                <div className="row row-margin3 align-items-center">
                    <div className="align_ourbrands align-items-center">
                    <h2 className="bath_brands">OUR BRANDS</h2>
                
                    <div className="col-md-3 col-12">
                    </div>
                    
                    <div className="col-md-2 col-12">
                        <img className="bathbrands1" src={bathbrands1}></img>
                    </div>
                    <div className="col-md-2 col-12">
                        <img className="bathbrands1" src={bathbrands2}></img>
                    </div>
                    <div className="col-md-2 col-12">
                        <img className="bathbrands1" src={bathbrands3}></img>
                    </div>
                    <div className="col-md-3 col-12"></div>
                   


                    </div>
                    <h1></h1>
                </div>
            </div>
            
        </div>
    )
}

export default Bathwaremain2
