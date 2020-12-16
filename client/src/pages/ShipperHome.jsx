import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Navbar } from '../components';
import { TableRowShipper, CardPostShipper, CreatePostShipper, EditPostShipper, BidderForShipper} from '../components'
import {fetchShippers, patchShipperPost, fetchProfileShipper} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import ShipperCardPost from '../components/ShipperCardPost';
import './ShipperHome.css'
import wave from '../assets/wave.svg'
import wave2 from '../assets/wave2.svg'


export default function ShipperHome () {
  const shipperId = localStorage.getItem("shipperId");
  const dispatch = useDispatch()
  const shippers = useSelector((state) => state.dataShipper)
  const profile_shipper = useSelector((state) => state.profile_shipper)
  const shipperToken = localStorage.getItem("shipper_token")
  let decode = jwt.verify(shipperToken, 'secret')
  console.log(decode, 'ini decode di shipperHome 19')
  let idShipperLoggedIn = decode.id

  let filterPostBidFromShipper = shippers.filter(el => el.ShipperId === idShipperLoggedIn)


  const handleShow = () => dispatch({
      type: 'SET_SHOW',
      payload: true
  });

  useEffect(() => {
      dispatch(fetchShippers())
      dispatch(fetchProfileShipper(shipperId))
  },[dispatch])

  return (
    <>
      <Navbar />
      <img style={{top: '10px', zIndex: '-1', position: 'fixed'}} width= '100%' src={wave}/>
      <div className="content" stye={{margin: '0 1%'}}>
        <div className="row">
          <div className="col-3">
            <div class="card shadow-sm profile-sidebar " style={{borderRadius: '15px'}}>

              <div class="profile-userpic">
                { !profile_shipper.profile_picture
                    ? <img
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    class="img-responsive" alt="" />
                    : <img
                    src={profile_shipper.profile_picture}
                    class="img-responsive" alt="" />

                }

              </div>
              <div class="profile-usertitle">
                <div class="profile-usertitle-job">
                  {profile_shipper.username}
                </div>
                <div class="profile-usertitle-name">
                  <i class="fas fa-envelope"></i> {profile_shipper.email}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="card px-4 py-2 mb-4 text-white" style={{border: '0px', backgroundColor: 'transparent'}}>
              <span className="row">
                <h3 className="mt-1 ml-1">Your Shipment </h3>
                <i class="fas fa-plus ml-auto fa-2x mt-1 mr-1" type='button' onClick={handleShow}></i>
              </span>
            </div>
            <Switch>
              <Route exact path='/shipper'>
                {
                  filterPostBidFromShipper.map(shipper => {
                    return (
                      <ShipperCardPost
                        key={shipper.id}
                        shipper={shipper}
                      />

                    )
                  })
                }
              </Route>
              <Route path='/shipper/bidder/:id'>
                <BidderForShipper />
              </Route>
              <Route path='/shipper/editPost/:id'>
                  <EditPostShipper/>
              </Route>
          </Switch>
          <CreatePostShipper/>

          </div>
        </div>
      </div>
    </>
  )
}