import React from 'react'
import cargoTruck from '../images/cargo-truck.jpg'

function VechileInformation (props) {

    return (
      <>
      <div className="container">
        <h1 className="mt-5 text-center">Vehicle Information</h1>
        <div class="card" style={{width: '500px'}}>
              <div class="row no-gutters">
                  <div class="col-sm-5">
                      <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
                  </div>
                  <div class="col-sm-7">
                      <div class="card-body">
                          <h5 class="card-title">Fuso Berat</h5>
                          <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                      </div>
                  </div>
              </div>
          </div> 
        </div>
      </>
    )
}

export default VechileInformation