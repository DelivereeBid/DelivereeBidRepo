import React, {useEffect, useState} from 'react'
import {Navbar, TableRowShipper, CardPostShipper, CreatePostShipper, EditPostShipper, BidderForShipper} from '../../components'
import {fetchShippers} from '../../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'


function HomeShipper (props) {
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
        <div>
            <Navbar/>
            <div className='row'>
                <div className='col-3'>
                    <h3>Your Post<i class="fas fa-plus float-right" type='button' onClick={handleShow}></i></h3>

                    {/* <h3>Your Post<i class="fas fa-plus float-right" type='button' data-toggle="modal" data-target="#exampleModalCentered"></i></h3> */}

                    <div style={{height: '400px', overflowY:'scroll'}}>
                        {
                            filterPostBidFromShipper.map(shipper => {
                                return (
                                    <CardPostShipper
                                        key={shipper.id}
                                        shipper={shipper}
                                    />
                                )
                            })
                        }
                    </div>

                </div>

                <Switch>
                    <Route path='/shipper/bidder/:id'>
                        <BidderForShipper/>
                    </Route>
                    <Route path='/shipper/editPost/:id'>
                        <EditPostShipper/>
                    </Route>
                </Switch>


            </div>
            <CreatePostShipper/>
        </div>
    )
}

export default HomeShipper