import React from 'react'
import {Navbar, TableRowShipper, CardPostShipper, CreatePostShipper} from '../../components'


function HomeShipper (props) {

    return (
        <div>
            <Navbar/>
            <div className='row'>
                <div className='col-3'>
                    <h3>Your Post<i class="fas fa-plus float-right" type='button' data-toggle="modal" data-target="#exampleModalCentered"></i></h3>

                    <div style={{height: '400px', overflowY:'scroll'}}>
                        <CardPostShipper/>
                        <CardPostShipper/>
                        <CardPostShipper/>
                    </div>

                </div>
                <div className='col-9'>
                    <h3>Your Bidder</h3>
                    <div style={{height: '400px', overflowY:'scroll'}}>
                        <table className="table">
                            <thead>
                                <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Vechile</th>
                                <th>Bid</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                                <TableRowShipper/>
                            </tbody>
                        </table>
                    </div>
                    <button className='btn btn-primary float-right mr-5' style={{width: '150px'}}>Deal</button>
                </div>
            </div>
            <CreatePostShipper/>
        </div>
    )
}

export default HomeShipper