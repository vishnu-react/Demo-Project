import React from 'react'
import './Wtbheader2.css'
import {Link} from 'react-router-dom'

function Wtbheader2() {
    return (
        <div className="wtb_header2">
        <div className="container">
            <div className="row wtb_row1">
                <div className="col-md-8 col-12">
                    <h2 className="wtb_h2">DEALER NETWORK</h2>
                </div>
                <div className="col-md-4 col-12">
                    <Link to="/" className="wtb_link"><i className="fas fa-home"></i> DEALER NETWORK</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Wtbheader2
