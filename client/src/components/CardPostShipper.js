import React from 'react'
import {postShipperRemove, fetchShippersById} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function CardPostShipper(props) {
    const dispatch = useDispatch()
    const {shipper} = props
    const showEdit = useSelector((state) => state.showEdit)
    const history = useHistory()

    const filterShipperPost = shipper.Posts.filter(el => el.status === 'accepted')
    console.log(filterShipperPost, 'filter')

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
        <div  className="card" style={{cursor:'pointer'}}>
            <div className="card-body">
                <h4 className="card-title">
                    {shipper.product_name}
                    <span className='float-right'>

                    { filterShipperPost.length !== 0
                       ? <span class="badge badge-success" style={{fontSize: '13px'}}>Deal</span>
                       : <span class="badge badge-warning" style={{fontSize: '13px'}}>Bidder: { shipper.Posts.length}</span>
                    }


                        <div className="btn-group">
                            <i class="fas fa-ellipsis-v  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </i>
                            <div className="dropdown-menu">
                                <a onClick={(e) => handleShow(e, shipper.id)} className="dropdown-item" href="">Edit</a>
                                <a onClick={(e) => removePost(e, shipper.id)} className="dropdown-item" href="">Delete</a>
                            </div>
                        </div>
                    </span>
                </h4>

                <h6 className="card-subtitle mb-2 text-muted">{shipper.items}</h6>
                <div onClick={(e) => toBidder(e, shipper.id)} className="card-text">
                    <table>
                        <tbody>
                            <tr>
                                <td><i className="fas fa-suitcase mr-2 text-center"></i></td>
                                <td>{shipper.from} - {shipper.to}</td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-audio-description text-center"></i></td>
                                <td>{shipper.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <img onClick={(e) => toBidder(e, shipper.id)} class="card-img-bottom" src={shipper.product_picture} alt="Card image cap"></img>
        </div>
    )
}

export default CardPostShipper