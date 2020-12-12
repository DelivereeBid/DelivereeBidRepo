import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { fetchPostById } from '../store/index'
import {useSelector, useDispatch } from 'react-redux'

function TableRowShipper(props) {
    const {bidder} = props
    const history = useHistory()
    const dispatch = useDispatch()
    const post = useSelector((state) => state.post)
    console.log(post)
    useEffect (() => {
        dispatch(fetchPostById(bidder.id))
    },[])

    function selectedBid (e, bidder) {
        e.preventDefault()

        Swal.fire({
            title: `Deal with ${post.Transporter.username}?`,
            text: `Bid: ${bidder.price.toLocaleString(['ban', 'id'])} | Vechile: ${temp.vechile}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Deal'
          }).then((result) => {
            if (result.isConfirmed) {
                history.push(`/payment/${bidder.id}`)
            }
          })
    }

    const temp = {
        name: 'Robert',
        vechile: 'Truck',
        bid: 3000,
        id: 5
    }
    if(!post.Transporter) {
        return <h1>loading</h1>
    }
    return (
        <tr onClick={(e) => selectedBid(e, bidder)} style={{cursor:'pointer'}}>
            <th scope="row">{bidder.id}</th>
            <td>{post.Transporter.username}</td>
            <td>{bidder.vechile}</td>
            <td>Rp {bidder.price.toLocaleString(['ban', 'id'])}</td>
        </tr>
    )
}

export default TableRowShipper