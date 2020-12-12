import React from 'react'
import {postShipperRemove} from '../store/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function CardPostShipper(props) {
    const dispatch = useDispatch()
    const {shipper} = props
    const showEdit = useSelector((state) => state.showEdit)
    const history = useHistory()

    const handleShow = (e, id) => {
        e.preventDefault()
        dispatch({
            type: 'SET_SHOW_EDIT',
            payload: true
        })
        history.push(`/shipper/editPost/${id}`)
    };

    function removePost (e, id) {
        e.preventDefault()
        dispatch(postShipperRemove(+id))
    }


    return (
        <div className="card" style={{cursor:'pointer'}}>
            <div className="card-body">
                <h4 className="card-title">
                    {shipper.title}
                    <span className='float-right'>
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
                <div className="card-text">
                    <table>
                        <tbody>
                            <tr>
                                <td><i className="fas fa-suitcase mr-2 text-center"></i></td>
                                <td>{shipper.from} - {shipper.to}</td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-clock mr-2 text-center"></i></td>
                                <td>{shipper.date}</td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-balance-scale-right mr-2 text-center"></i></td>
                                <td>{shipper.weight}</td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-box mr-2 text-center"></i></td>
                                <td>{shipper.volume}</td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-truck"></i></td>
                                <td>{shipper.vechile}</td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-dollar-sign mr-2 text-center"></i></td>
                                <td>Rp {shipper.budget.toLocaleString(['ban', 'id'])}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CardPostShipper