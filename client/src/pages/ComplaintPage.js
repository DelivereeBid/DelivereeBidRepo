import React from 'react'

function ComplaintPage (props) {

    return (
        <>
            <h1 className="mt-5 text-center">Share your experience</h1>
            <div className="row justify-content-center mt-5">
            <div className="col-sm-5">
            <div class="card border-primary mb-3">
            <div class="card-header">Message</div>
            <div class="card-body text-primary">
                <label type="text"> Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <p class="card-text">Jakarta - Bandung</p>
            </div>
            <div className="card-body text-primary">
            <label>Image 1</label>
                <input type="url"></input>
            </div>
            <div className="card-body text-primary">
            <label>Image 2</label>
                <input type="url"></input>
            </div>
            <div className="card-body text-primary">
                <label>Review</label>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ComplaintPage