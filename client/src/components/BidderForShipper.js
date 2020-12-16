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
            <div className='row justify-content-between px-3 mb-2'>
                <h4 className='text-white'>Your Bidder</h4>
                <Button  onClick={() => {
                history.push('/shipper')
                }} className="float-right text-white" variant="light" style={{backgroundColor: 'transparent', border: 0}}><i class="fas fa-arrow-left" ></i> Back</Button>
            </div>

                <div id='style-3' style={{height: '400px', overflowY:'scroll'}}>

                    <table className="table bg-white shadow" >
                        <thead>
                            <tr className='text-center'>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Vechile</th>
                            <th>Bid</th>
                            <th>Action</th>
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