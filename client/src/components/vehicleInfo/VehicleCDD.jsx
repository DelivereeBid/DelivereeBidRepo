import React from 'react';
import {Nav, Table, Button} from 'react-bootstrap';
import cdd_box from '../../images/cdd_box.jpg';
import cdd_bak from '../../images/cdd_bak.jpg';
import cdd_los_bak from '../../images/cdd_los_bak.jpg';
import { useHistory } from 'react-router-dom';

export default function VehicleCDD () {
  const history = useHistory();
    function handleBackButton () {
      history.push('/shipper')
    }
    return (
      <div className="tronton-content border px-5 py-4">
      <p className="text-right"><Button onClick={handleBackButton} className="mt-2 mb-4" variant="primary">Back to Post</Button></p>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <img src={cdd_box}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
            <thead class="thead-inverse">
            <th colspan="5"><center>Colt Diesel Double (CDD) Box</center></th>
            <tr>
                <th>Ukuran Karoseri</th>
                <th>Berat</th>
                <th>Ukuran Mobil</th>
                <th>Mesin</th>
                <th>Roda dan Ban</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Panjang : 450 cm</td>
                    <td>Berat Kosong : 2,5 Ton</td>
                    <td>Panjang : 670 cm</td>
                    <td>Model : 4D34-2AT7</td>
                    <td>Ukuran Ban: -</td>
                </tr>
                <tr>
                    <td>Lebar : 200 cm</td>
                    <td>Berat Maksimal : 5 Ton</td>
                    <td>Lebar : 200 cm</td>
                    <td>Kapasitas Silinder : 3.908 CC</td>
                    <td>Ukuran Roda: 7.50-16-14PR</td>
                </tr>
                <tr>
                    <td>Tinggi : 200 cm</td>
                    <td></td>
                    <td>Tinggi : 220 cm</td>
                    <td>Kecepatan Maksimum (Km/Jam) : 112</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>Dimensi : 24 CBM</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Tenaga Maksimum (PS/rpm) : 136/2.900</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-3">
          <img src={cdd_bak} 
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
            <thead class="thead-inverse">
            <th colspan="5"><center>Colt Diesel Double (CDD) Bak</center></th>
            <tr>
                <th>Ukuran Karoseri</th>
                <th>Berat</th>
                <th>Ukuran Mobil</th>
                <th>Mesin</th>
                <th>Roda dan Ban</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Panjang : 450 cm</td>
                  <td>Berat Kosong : 2,3 Ton</td>
                  <td>Panjang : 670 cm</td>
                  <td>Model : 4D34-2AT7</td>
                  <td>Ukuran Ban: -</td>
              </tr>
              <tr>
                  <td>Lebar : 200 cm</td>
                  <td>Berat Maksimal : 5 Ton</td>
                  <td>Lebar : 200 cm</td>
                  <td>Kapasitas Silinder : 3.908 CC</td>
                  <td>Ukuran Roda: 7.50-16-14PR</td>
              </tr>
              <tr>
                  <td>Tinggi : 200 cm</td>
                  <td></td>
                  <td>Tinggi : 220 cm</td>
                  <td>Kecepatan Maksimum (Km/Jam) : 112</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Dimensi : 26 CBM</td>
                  <td></td>
                  <td></td>
                  <td>Tenaga Maksimum (PS/rpm) : 136/2.900</td>
                  <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-3">
          <img src={cdd_los_bak} 
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
            <thead class="thead-inverse">
            <th colspan="5"><center>Colt Diesel Double (CDD) Los Bak</center></th>
            <tr>
                <th>Ukuran Karoseri</th>
                <th>Berat</th>
                <th>Ukuran Mobil</th>
                <th>Mesin</th>
                <th>Roda dan Ban</th>
            </tr>
            </thead>
            <tbody>
              <tr>
              </tr>
              <tr>
                  <td>Panjang : 450 cm</td>
                  <td>Berat Kosong : 2,5 Ton</td>
                  <td>Panjang : 670 cm</td>
                  <td>Model : 4D34-2AT8</td>
                  <td>Ukuran Ban: -</td>
              </tr>
              <tr>
                  <td>Lebar : 200 cm</td>
                  <td>Berat Maksimal : 5 Ton</td>
                  <td>Lebar : 200 cm</td>
                  <td>Kapasitas Silinder : 3.908 CC</td>
                  <td>Ukuran Roda: 7.50 - 16 - 14PR</td>
              </tr>
              <tr>
                  <td>Tinggi : 200 cm</td>
                  <td></td>
                  <td>Tinggi : 220 cm</td>
                  <td>Kecepatan Maksimum (Km/Jam) : 112</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Dimensi : -</td>
                  <td></td>
                  <td></td>
                  <td>Tenaga Maksimum (PS/rpm) : 125 / 2.900</td>
                  <td></td>
              </tr>
          </tbody>
          </Table>
        </div>
      </div>
    </div>
    )
}