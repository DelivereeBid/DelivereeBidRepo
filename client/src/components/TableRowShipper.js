import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function TableRowShipper(props) {
    const {bidder, postId, shipperUser} = props
    const history = useHistory()
    const dispatch = useDispatch()

    console.log(bidder, 'ini bidder dari table row shipper')

    function selectedBid (e, bidder) {
        e.preventDefault()

        if(bidder.status === 'pending') {
            Swal.fire({
                title: `Deal with ${bidder.name}?`,
                text: `Bid: Rp ${bidder.price.toLocaleString(['ban', 'id'])} | Vechile: ${bidder.vehicle}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Deal'
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push(`/payment/${postId}_${bidder.id}_${bidder.TransporterId}`)
                    dispatch({
                        type: 'SET_DEAL',
                        payload: bidder
                    })
                }
              })
        } else if (bidder.status === 'accepted') {
            history.push(`/controlPage/shipper_${shipperUser.username}_${shipperUser.id}_${shipperUser.email}`)
            // history.push('/controlPage')
        }

    }

    if (bidder.status === 'accepted') {
        return (
            <tr onClick={(e) => selectedBid(e, bidder)} style={{cursor:'pointer'}}>
                <th scope="row">{bidder.id}</th>
                <td>{bidder.name}</td>
                <td>{bidder.vehicle}</td>
                <td>Rp {bidder.price.toLocaleString(['ban', 'id'])}</td>
            </tr>
        )
    }

    return (
        <tr onClick={(e) => selectedBid(e, bidder)} style={{cursor:'pointer', display: `${bidder.status === 'rejected' ? 'none' : ''}`}}>
            <th scope="row">{bidder.id}</th>
            <td>{bidder.name}</td>
            <td>{bidder.vehicle}</td>
            <td>Rp {bidder.price.toLocaleString(['ban', 'id'])}</td>
        </tr>
    )
}

export default TableRowShipper