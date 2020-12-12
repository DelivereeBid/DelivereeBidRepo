import React, {useEffect} from 'react'
import {TableRowShipper} from './index.js'
import {fetchShippersById} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function BidderForShipper (props) {
    const dispatch = useDispatch()
    const {id} = useParams()
    const shipper = useSelector((state) => state.shipper)
    // console.log(shipper.Transporters)

    useEffect (() => {
        dispatch(fetchShippersById(id))
    }, [id])

    return (
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
                        {shipper.Transporters !== undefined &&
                            shipper.Transporters.map(bidder => {
                                return (
                                    <TableRowShipper key={bidder.id} bidder={bidder}/>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <button className='btn btn-primary float-right mr-5' style={{width: '150px'}}>Deal</button>
        </div>
    )

}

export default BidderForShipper