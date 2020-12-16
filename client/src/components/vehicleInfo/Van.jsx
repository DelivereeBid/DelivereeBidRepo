import React from 'react';
import {Nav, Table, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import van from '../../images/van_blind_van.jpg';

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
          <img src={van}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
            <thead class="thead-inverse">
            <th colspan="4" class="text-center">Grand Max Blind Van</th>
            <tr>
                <th>Berat</th>
                <th>Ukuran Mobil</th>
                <th>Mesin</th>
                <th>Roda dan Ban</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Berat Kosong : 2 Ton</td>
                    <td>Panjang : 220 cm</td>
                    <td>Model : K3 - DE, DOHC</td>
                    <td>Ukuran Ban : 165 R13 - C</td>
                </tr>
                <tr>
                    <td>Berat Maksimal : 0,73 Ton</td>
                    <td>Lebar : 135 cm</td>
                    <td>Kapasitas Silinder : 1298 cc</td>
                    <td>Ukuran Roda : -</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Tinggi : 130 cm</td>
                    <td>Kecepatan Maksimum (Km/Jam) : -</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Dimensi : 1 CBM</td>
                    <td>Tenaga Maksimum (PS/rpm) : 88/6000</td>
                    <td></td>
                </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    )
}