import React from 'react'
import cargoTruck from '../images/cargo-truck.jpg'
import './vehicleInfo.css'

function VechileInformation (props) {

    return (
      <>
      <div className="container">
        {/* <h1 className="mt-5 text-center">Vehicle Information</h1> */}
          <div className="container">
            <div className="row">
              <div class="card col-sm-2 col-md-2 col-2">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
              </div>
              <div class="card col-sm-2 col-md-2 col-2">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
              </div>
              <div class="card col-sm-2 col-md-2 col-2">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
              </div>
              <div class="card col-sm-2 col-md-2 col-2">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
              </div>
              <div class="card col-sm-2 col-md-2 col-2">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
              </div>
              <div class="card col-sm-2 col-md-2 col-2">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
              </div>
            </div>
          </div>
        <div class="card" style={{height: '100vh'}}>
          <div class="row no-gutters mb-5">
            <div class="col-sm-5">
                <img class="card-img" src={cargoTruck} alt="Suresh Dasari Card" />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                  <h1 class="card-title">Fuso Berat</h1>
                  <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                  <div className="row d-flex">
                    <div className="justify-content-start col-md-6">
                      <div className="card" style={{width: '100%', height: '10rem'}}>
                        <div className="container">
                          <h2 className="">L : 960cm</h2>
                          <h2 className="">W : 240cm</h2>
                          <h2 className="">H : 240cm</h2>
                        </div>
                      </div>
                    </div>
                    <div className="justify-content-end col-md-6">
                    <div className="card" style={{ height: '10rem'}}>
                        <div className="container">
                          <h1>Review</h1>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="card" style={{width: '100%', height: '100%'}}></div>
          </div>
        </div>
      </>
    )
}

export default VechileInformation