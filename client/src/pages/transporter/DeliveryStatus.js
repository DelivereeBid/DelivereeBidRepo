import React from 'react'

function DeliveryStatus (props) {

    return (
        <>
            <h1 className="text-center">Delivery Status</h1>
            <div className="row justify-content-center mt-5">
            <div className="col-sm-5">
            <div class="card border-primary mb-3">
            <div class="card-header">Transaction Information</div>
            <div class="card-body text-primary">
                <h5 class="card-title">Your delivery order</h5>
                <p class="card-text">Jakarta - Bandung</p>
            </div>
            </div>
            </div>
            <div className="col-sm-5">
            <div class="card border-primary mb-3">
            <div class="card-header text-center">Status</div>
            <div class="card-body text-primary text-center">
                <h5 class="card-title">Pick Up</h5>
                <button className="btn btn-info">Submit</button>
            </div>
            <div class="card-body text-primary text-center">
                <h5 class="card-title">On Progress</h5>
                <button className="btn btn-info">Submit</button>
            </div>
            <div class="card-body text-primary text-center">
                <h5 class="card-title">Delivered</h5>
                <button className="btn btn-info">Submit</button>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default DeliveryStatus