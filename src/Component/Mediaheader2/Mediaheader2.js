import React from 'react'
import './Mediaheader2.css'
import { Link } from 'react-router-dom'


function Mediaheader2() {
    return (
        <div className="media_header2">
        <div className="container">
            <div className="row media_row1">
                <div className="col-md-8 col-12">
                    <h2 className="media_h2">MEDIA GALLERY</h2>
                </div>
                <div className="col-md-4 col-12">
                    <Link to="/" className="media_link"><i className="fas fa-home"></i> MEDIA GALLERY</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Mediaheader2
