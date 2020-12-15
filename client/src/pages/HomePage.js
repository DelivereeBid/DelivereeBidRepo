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
        <h1 className="text-center mt-5">Welcome to our DelivereeBid</h1>
        <div id="card" className="container mx-auto d-flex align-items-center flex-column">
            <div className="col-4-lg" style={{marginTop:100, marginLeft:800}}>
                <div className="card" style={{width: 250}}>
                    <div className="card-body text-center">
                    
                        <h5>Sign in as a Transporter</h5>
                        <button onClick={() => handleLoginAsTransporter()} className="btn btn-danger">Click Here!</button>
                    </div>
                </div>
            </div>
            <div className="col-4-lg text-center"style={{marginTop: 150, marginLeft:800}}>
                <div className="card shadow" style={{width: 250}}>
                    <div className="card-body">
                        <h5>Sign in as a Shipper</h5>
                        <button onClick={() => handleLoginAsShipper()} className="btn btn-success">Click Here!</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default HomePage