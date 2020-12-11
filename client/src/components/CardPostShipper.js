import React from 'react'

function CardPostShipper(props) {

    return (
        <div class="card" style={{cursor:'pointer'}}>
            <div class="card-body">
                <h4 class="card-title">Kirim Barang</h4>
                <h6 class="card-subtitle mb-2 text-muted">Makanan</h6>
                <div class="card-text">
                    <table>
                        <tbody>
                            <tr>
                                <td><i class="fas fa-suitcase mr-2 text-center"></i></td>
                                <td>Bandung - Jakarta</td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-clock mr-2 text-center"></i></td>
                                <td>12/12/2020</td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-balance-scale-right mr-2 text-center"></i></td>
                                <td>25kg</td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-box mr-2 text-center"></i></td>
                                <td>20cm x 100cm x 30cm</td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-dollar-sign mr-2 text-center"></i></td>
                                <td>Rp. 3000000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CardPostShipper