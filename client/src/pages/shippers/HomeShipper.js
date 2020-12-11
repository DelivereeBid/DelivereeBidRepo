import React, {useEffect, useState} from 'react'
import {Navbar, TableRowShipper, CardPostShipper, CreatePostShipper} from '../../components'
import {fetchShippers} from '../../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';


function HomeShipper (props) {
    const dispatch = useDispatch()
    const shippers = useSelector((state) => state.dataShipper)
    const show = useSelector((state) => state.show)


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
                        <CardPostShipper/>
                        <CardPostShipper/>
                        <CardPostShipper/>
                    </div>

                </div>
                <div className='col-9'>
                    <h3>Your Bidder</h3>
                    <div style={{height: '400px', overflowY:'scroll'}}>
                        <table className="table">
                            <thead>
                                <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Vechile</th>
                                <th>Bid</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                            </tbody>
                        </table>
                    </div>
                    <button className='btn btn-primary float-right mr-5' style={{width: '150px'}}>Deal</button>
                </div>
            </div>
            <CreatePostShipper/>
        </div>
    )
}

export default HomeShipper