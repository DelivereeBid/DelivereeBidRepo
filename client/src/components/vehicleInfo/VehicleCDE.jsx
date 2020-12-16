import React from 'react';
import {Nav, Table, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import van from '../../images/van_blind_van.jpg';
import pickup_bak from '../../images/pickup_bak.jpg'
import cde_bak from '../../images/cde_bak.jpg'

export default function VehicleCDD () {

    const history = useHistory();

    function handleBackButton () {
        history.push('/shipper')
    }

    return (
      <div className="tronton-content border px-5 py-4" style={{backgroundColor: '#ffffff'}}>
      <p className="text-right"><Button onClick={handleBackButton} className="mt-2 mb-4" variant="primary">Back to Post</Button></p>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <img src={cde_bak}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
          <tbody><tr>
                                    <th colspan="5"><center>Colt Diesel Engkel (CDE) Bak</center></th>
                                </tr>
                                <tr>
                                    <th>Ukuran Karoseri</th>
                                    <th>Berat</th>
                                    <th>Ukuran Mobil</th>
                                    <th>Mesin</th>
                                    <th>Roda dan Ban</th>
                                </tr>
                                <tr>
                                    <td>Panjang : 300 cm</td>
                                    <td>Berat Kosong : 1,5 Ton</td>
                                    <td>Panjang : 459 cm</td>
                                    <td>Model : 4JB1-TC</td>
                                    <td>Ukuran Ban: 7.50 - 15 - 10PR</td>
                                </tr>
                                <tr>
                                    <td>Lebar : 160 cm</td>
                                    <td>Berat Maksimal : 2,5 Ton</td>
                                    <td>Lebar : 169 cm</td>
                                    <td>Kapasitas Silinder : 2,771</td>
                                    <td>Ukuran Roda: -</td>
                                </tr>
                                <tr>
                                    <td>Tinggi : 80 cm</td>
                                    <td></td>
                                    <td>Tinggi : 212 cm</td>
                                    <td>Kecepatan Maksimum (Km/Jam) : -</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Dimensi : 10 CBM</td>
                                    <td></td>
                                    <td></td>
                                    <td>Tenaga Maksimum (PS/rpm) : 100 / 3,400</td>
                                    <td></td>
                                </tr>
                            </tbody>
          </Table>
        </div>
      </div>
    </div>
    )
}