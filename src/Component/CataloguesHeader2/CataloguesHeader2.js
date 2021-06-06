import React from 'react'
import { Link } from 'react-router-dom'
import './CataloguesHeader2.css'

function CataloguesHeader2() {
    return (
        <div className="cata_header2">
            <div className="container">
                <div className="row cata_row1">
                    <div className="col-md-8 col-12">
                        <h2 className="cata_h2">CATALOGUES</h2>
                    </div>
                    <div className="col-md-4 col-12">
                        <Link to="/" className="cata_link"><i className="fas fa-home"></i> CATALOGUES</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CataloguesHeader2
