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
    <div className="card mb-4 shadow" style={{borderRadius: '15px', borderColor: '#0099ff'}}>
      <div class="row no-gutters">
        <div className='col-4 d-flex justify-content-center align-items-center'>
          {/* <div style={{ width: '250px', height: '250px'}}> */}
            <img className='img-fluid' src={shipper.product_picture} alt='' style={{  width: '250px', height: '250px', objectFit: 'cover', objectPosition: 'center'}}></img>
          {/* </div> */}

        </div>
        <div className='col-8  justify-content-end align-items-center'>
          {/* <div class="col-md-8 col-12"> */}
            <div class="card-body mt-3">
              <div className="mx-1 my-0  card-test">
                <div className='row mb-3'>

                  <div className='col-8'>
                    <h5 class="card-title text-left text-blueish" style={{marginBottom:'0rem', textTransform: 'capitalize'}}>{shipper.product_name}</h5>

                  </div>

                  <div className='col-4 d-flex justify-content-end align-items-center'>
                    { filterShipperPost.length !== 0
                        ? <span class="badge badge-success" style={{fontSize: '13px'}}>Deal</span>
                        : <span class="badge badge-warning mr-1" style={{fontSize: '13px'}}>Bidder: { shipper.Posts.length}</span>
                    }
                    <div className='d-flex align-items-center'>
                      {shipper.Posts.length === 0
                          ? (
                              <div className="btn-group">
                                  <i type='button' class="fas fa-ellipsis-v  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                  <i type='button' class="fas fa-ellipsis-v  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <span className="sr-only">Toggle Dropdown</span>
                                  </i>
                                  <div className="dropdown-menu">
                                      {/* <a onClick={(e) => handleShow(e, shipper.id)} className="dropdown-item" href="">Edit</a> */}
                                      <a onClick={(e) => removePost(e, shipper.id)} className="dropdown-item" href="">Delete</a>
                                  </div>
                              </div>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p> */}
              <div class="input-group mt-1 mb-3">
                <span class="input-group-text" id="basic-addon1" style={{width: '70px'}}>From</span>
                <div className="input-group-text" style={{backgroundColor: 'transparent', width: '85%'}}>
                  {shipper.from}
                </div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1" style={{width: '70px'}}>To</span>
                <div className="input-group-text" style={{backgroundColor: 'transparent', width: '85%'}}>
                  {shipper.to}
                </div>
              </div>
              <p className='float-right mr-1'>
                  <Button onClick={(e) => toBidder(e, shipper.id)} variant="primary" style={{width:'100px', borderRadius: '10px'}}>Bidder</Button>
              </p>
            </div>
          {/* </div> */}
        </div>


      </div>
    </div>
    </>
  )
}