import React from 'react'
import {useHistory} from 'react-router-dom'
import  Pogo  from '../holding.jpg'
import Del from '../delivery.jpg'

function HomePage (props) {
    const history = useHistory()

    const handleLoginAsShipper = () => {
        history.push('/shipper-login')
    }

    const handleLoginAsTransporter = () => {
        history.push('/transporter-login')
    }

    return (
        <>
        <div id="homepage">
        <div className="d-flex align-items-center flex-column"  style={{marginTop: 250}}> 
        <h1 style={{color:"white"}}>Deliver Jobbers</h1>
        <h3 style={{color:"white"}}>We set the standards others try to live up to.</h3>
        </div>
        <div className="d-flex justify-content-center">
        <button type="button" id="btn-landing" onClick={() => handleLoginAsShipper()} className="btn btn-info mr-3">Sign as Shipper</button>
        <button id="btn-landing" onClick={() => handleLoginAsTransporter()} className="btn btn-dark">Sign as Transporter</button>
        </div>
        </div>
        </>
    )
}

export default HomePage