import React, {useEffect, useState} from 'react'
import {Navbar, TableRowShipper, CardPostShipper, CreatePostShipper, EditPostShipper, BidderForShipper} from '../../components'
import {fetchShippers} from '../../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'


function HomeShipper (props) {
    const dispatch = useDispatch()
    const shippers = useSelector((state) => state.dataShipper)
    const show = useSelector((state) => state.show)

    console.log(shippers)
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
                            shippers.map(shipper => {
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

                {/* <Switch>
                    <Route path='/shipper/bidder/:id'>
                        <BidderForShipper/>
                    </Route>
                    <Route path='/shipper/editPost/:id'>
                        <EditPostShipper/>
                    </Route>
                </Switch> */}


            </div>
            <CreatePostShipper/>
        </div>
    )
}

export default HomeShipper