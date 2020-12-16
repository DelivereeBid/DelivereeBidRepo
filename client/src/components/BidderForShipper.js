import React, {useEffect} from 'react'
import {TableRowShipper} from './index.js'
import {fetchShippersById} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function BidderForShipper (props) {
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useHistory();

    const shipper = useSelector((state) => state.shipper)
    console.log(shipper, 'ini bidderforshipper')

    useEffect (() => {
        dispatch(fetchShippersById(id))
    }, [id])

    return (
        <div className='col-12'>
            <h3>Your Bidder</h3>
                <div style={{height: '400px', overflowY:'scroll'}}>
                <Button onClick={() => {
                    history.push('/shipper')
                }} className="float-right" variant="warning">Back</Button>
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
                            {shipper.Posts !== undefined &&
                                shipper.Posts.map(post => {
                                    return (
                                        <TableRowShipper key={post.id} bidder={post} postId={id} shipperUser={shipper.Shipper}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* <button className='btn btn-primary float-right mr-5' style={{width: '150px'}}>Deal</button> */}
        </div>
    )

}

export default BidderForShipper