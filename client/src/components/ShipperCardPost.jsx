import React from 'react';
import { Button } from 'react-bootstrap';
import cdd_box from '../images/cdd_box.jpg';
import {postShipperRemove, fetchShippersById} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function ShipperCardPost (props) {
  const dispatch = useDispatch()
    const {shipper, isDetail} = props
    const showEdit = useSelector((state) => state.showEdit)
    const history = useHistory()
    


    const filterShipperPost = shipper.Posts.filter(el => el.status === 'accepted')

    console.log(shipper.Posts, 'sfai');

    const handleShow = (e, id) => {
        e.preventDefault()
        dispatch({
            type: 'SET_SHOW_EDIT',
            payload: true
        })
        // dispatch(fetchShippersById(id))
        history.push(`/shipper/editPost/${id}`)
    };

    function removePost (e, id) {
        e.preventDefault()
        dispatch(postShipperRemove(+id))
    }

    function toBidder (e, id) {
        e.preventDefault()
        history.push(`/shipper/bidder/${id}`)
    }
  return (
    <>
    <div className="card p-3 mb-4">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={shipper.product_picture} alt='' height='200'></img>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div className="mx-1 my-0 row card-test">
              <div className="col-md-10 p-0">
              <h5 class="card-title text-left">{shipper.product_name}</h5>
              { filterShipperPost.length !== 0
                  ? <span class="badge badge-success" style={{fontSize: '13px'}}>Deal</span>
                  : <span class="badge badge-warning" style={{fontSize: '13px'}}>Bidder: { shipper.Posts.length}</span>
              }
              </div>
              <p 
                className='col-md-2'><Button onClick={(e) => toBidder(e, shipper.id)} variant="warning">Detail</Button>
                {shipper.Posts.length === 0
                            ? (
                                <div className="btn-group">
                                    <i class="fas fa-ellipsis-v  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </i>
                                    <div className="dropdown-menu">
                                        <a onClick={(e) => handleShow(e, shipper.id)} className="dropdown-item" href="">Edit</a>
                                        <a onClick={(e) => removePost(e, shipper.id)} className="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="btn-group"  style={{display: `${filterShipperPost.length !== 0 ? 'none' : ''}`}}>
                                    <i class="fas fa-ellipsis-v  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </i>
                                    <div className="dropdown-menu">
                                        {/* <a onClick={(e) => handleShow(e, shipper.id)} className="dropdown-item" href="">Edit</a> */}
                                        <a onClick={(e) => removePost(e, shipper.id)} className="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            )
                        }
              </p>
            </div>
              <p class="card-text text-muted">Kelas Ekonomi</p>
            {/* <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p> */}
            <div class="input-group mt-1 mb-3">
              <span class="input-group-text" id="basic-addon1">From</span>
              <input type="text" class="form-control" value={shipper.from} 
              aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">To....</span>
              <input type="text" class="form-control" value={shipper.to} 
              aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}