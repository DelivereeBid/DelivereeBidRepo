import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

function TableRowShipper(props) {
    const {bidder} = props
    const history = useHistory()

    console.log(bidder, 'ini bidder dari table row shipper')

    function selectedBid (e, bidder) {
        e.preventDefault()

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
    return (
        <tr onClick={(e) => selectedBid(e, bidder)} style={{cursor:'pointer'}}>
            <th scope="row">{bidder.id}</th>
            <td>{bidder.name}</td>
            <td>{bidder.vehicle}</td>
            <td>Rp {bidder.price.toLocaleString(['ban', 'id'])}</td>
        </tr>
    )
}

export default TableRowShipper