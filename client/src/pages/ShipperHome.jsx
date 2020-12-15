import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Navbar } from '../components';
import { TableRowShipper, CardPostShipper, CreatePostShipper, EditPostShipper, BidderForShipper} from '../components'
import {fetchShippers, patchShipperPost} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import ShipperCardPost from '../components/ShipperCardPost';
import './ShipperHome.css'


export default function ShipperHome () {

  const dispatch = useDispatch()
    const shippers = useSelector((state) => state.dataShipper)
    const shipperToken = localStorage.getItem("shipper_token")
    let decode = jwt.verify(shipperToken, 'secret')

    let idShipperLoggedIn = decode.id

    let filterPostBidFromShipper = shippers.filter(el => el.ShipperId === idShipperLoggedIn)

    const handleShow = () => dispatch({
        type: 'SET_SHOW',
        payload: true
    });

    useEffect(() => {
        dispatch(fetchShippers())
    },[dispatch])

  return (
    <>
      <Navbar />
      <div className="content" stye={{margin: '0 1%'}}>
        <div className="row">
          <div className="col-3">
            <div class="profile-sidebar">
              <div class="profile-userpic">
                <img 
                src="https://st2.depositphotos.com/4216129/12320/v/950/depositphotos_123208602-stock-illustration-long-distance-truck-driver-portrait.jpg" 
                class="img-responsive" alt="" />
              </div>
              <div class="profile-usertitle">
                <div class="profile-usertitle-name">
                  Aloysius Nanang
                </div>
                <div class="profile-usertitle-job">
                  Vendor
                </div>
              </div>
              <div class="profile-userbuttons">
                <button type="button" class="btn btn-success btn-sm">Profile</button>
                <button type="button" class="btn btn-danger btn-sm">Message</button>
              </div>
              <div class="profile-usermenu">
                <ul className='nav'>
                  <li class="active col-12 mb-2">
                    <a href="#">
                    <i class="glyphicon glyphicon-home"></i>
                    Overview </a>
                  </li>
                  <li className="col-12 mb-2">
                    <a href="#">
                    Account Settings </a>
                  </li>
                  <li className="col-12 mb-2">
                    <a href="#" target="_blank">
                  Tasks </a>
                  </li>
                  <li className="col-12 mb-2">
                    <a href="#">
                  Help </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="card px-4 py-2 mb-4">
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