import React from 'react'
// import Sidebar from '../Sidebar/Sidebar'
// import './TileHome.css'
import TileCarouse from '../Tile-carouse/TileCarouse'
import TileMain1 from '../TileMain1/TileMain1'
import TileHeader from '../Tiles/TileHeader'
import TileDropdown from '../Tile_Dropdown/TileDropdown'

function TileHome() {
    return (
        <div>
            <TileHeader />
            <TileCarouse />
            <TileMain1 />
            <TileDropdown />
            {/* <Sidebar /> */}
        </div>
    )
}

export default TileHome
