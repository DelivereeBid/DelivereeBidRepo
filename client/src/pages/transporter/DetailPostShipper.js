import React from 'react'

function DetailPostShipper (props) {

    return (
        <>
           <h1 className="text-center">Detail Post Shipper</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col mt-5">
            <div class="card">
            <h3 className="text-center">Vehicle Information</h3>
            <div class="card-body">
                <h5 class="card-title">Type of Vehicle  : </h5>
                <p class="card-text">Description</p>
            </div>
            </div>
        </div>
        <div class="col mt-5">
            <div class="card">
            <h3 className="text-center">Detail</h3>
            <div class="card-body">
                <h5 class="card-title">Shipper's Information</h5>
                <p class="card-text">Name           : Lala</p>
                <p class="card-text">From           : Jakarta</p>
                <p class="card-text">To             : Bandung</p>
                <p class="card-text">Departure Date : 23/05/2020</p>
                <br></br>
                <p class="card-text">Items          : Food</p>
                <p class="card-text">Weight         : 1 Ton</p>
                <p class="card-text">Volume         : P X L X T</p>
                <div className="input-group">
                <div className="input-group-text">Budget    : Rp 1.000.000.000</div>
                 </div>
                <div class="input-group ">
                <div class="input-group-text">Bid :</div>
                 <input type="number" class="form-control col-sm-5"  placeholder="000000"></input>
             </div>
             <button className="btn btn-success">Submit Bid</button>
            </div>
            </div>
            </div>
        </div>
        <button className="col-sm-1 btn btn-danger">Back</button>
        </>
    )
}

export default DetailPostShipper