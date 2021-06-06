import React from 'react'
import BathwareCarouse from '../BathwareCarouse/BathwareCarouse'
import BathwareHeader from '../BathwareHeader/BathwareHeader'
import Bathwaremain1 from '../Bathwaremain1/Bathwaremain1'
import Bathwaremain2 from '../Bathwaremain2/Bathwaremain2'

function BathwareHome() {
    return (
        <div>
            <BathwareHeader />
            <BathwareCarouse />
            <Bathwaremain1 />
            <Bathwaremain2 />
        </div>
    )
}

export default BathwareHome
