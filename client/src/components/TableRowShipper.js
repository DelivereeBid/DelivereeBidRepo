import React from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

function TableRowShipper(props) {
    const {bidder} = props
    const history = useHistory()

    function selectedBid (e, bidder) {
        e.preventDefault()

        Swal.fire({
            title: `Deal with ${temp.name}?`,
            text: `Bid: ${temp.bid} | Vechile: ${temp.vechile}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Deal'
          }).then((result) => {
            if (result.isConfirmed) {
                history.push(`/payment/${temp.id}`)
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
        <tr onClick={(e) => selectedBid(e, temp)} style={{cursor:'pointer'}}>
            {/* <th scope="row">{bidder.id}</th>
            <td>{bidder.name}</td>
            <td>{bidder.vechile}</td>
            <td>Rp {bidder.bid.toLocaleString(['ban', 'id'])}</td> */}
            <th  scope="row">1</th>
            <td>Transporter A</td>
            <td>Truck</td>
            <td>Rp 3000000</td>
        </tr>
    )
}

export default TableRowShipper