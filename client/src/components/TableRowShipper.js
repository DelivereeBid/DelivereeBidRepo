import React from 'react'

function TableRowShipper(props) {
    const {bidder} = props
    return (
        <tr style={{cursor:'pointer'}}>
            <th scope="row">{bidder.id}</th>
            <td>{bidder.name}</td>
            <td>{bidder.vechile}</td>
            <td>Rp {bidder.bid.toLocaleString(['ban', 'id'])}</td>
        </tr>
    )
}

export default TableRowShipper