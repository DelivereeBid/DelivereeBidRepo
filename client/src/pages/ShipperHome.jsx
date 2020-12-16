import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Navbar } from '../components';
import { TableRowShipper, CardPostShipper, CreatePostShipper, EditPostShipper, BidderForShipper} from '../components'
import {fetchShippers} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import ShipperCardPost from '../components/ShipperCardPost';


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
            <div className="card px-4 py-2 mb-4">
                <h3 className="">Filter Result</h3>
                <Button className="text-left" variant="light" >Price</Button>
                <Button className="text-left" variant="light" >Distance</Button>
                <Button className="text-left" variant="light" >Price</Button>
                <Button className="text-left" variant="light" >Distance</Button>
                <Button className="text-left" variant="light" >Price</Button>
                <Button className="text-left" variant="light" >Distance</Button>
                <Button className="text-left" variant="light" >Price</Button>
                <Button className="text-left" variant="light" >Distance</Button>
            </div>
          </div>
          <div className="col-9">
            <div className="card px-4 py-2 mb-4">
              <span className="row">
              <h3 className="">Your Shipment <i class="fas fa-plus float-right" type='button' onClick={handleShow}></i></h3>
              <Button className="ml-3" variant="light" >Price</Button>
              <Button className="ml-1" variant="light" >Distance</Button>
              </span>
            </div>
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
            <Switch>
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