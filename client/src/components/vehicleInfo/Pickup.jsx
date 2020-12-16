import React from 'react';
import {Nav, Table, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import van from '../../images/van_blind_van.jpg';
import pickup_bak from '../../images/pickup_bak.jpg'
import pickup_box from '../../images/pickup_box.jpg'
import pickup_reefer from '../../images/pickup_reefer.jpg'

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
          <img src={pickup_bak}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
            <tbody>
              <tr>
                  <th colspan="5"><center>Pick Up L300 Bak</center></th>
              </tr>
              <tr>
                  <th>Ukuran Karoseri</th>
                  <th>Berat</th>
                  <th>Ukuran Mobil</th>
                  <th>Mesin</th>
                  <th>Roda dan Ban</th>
              </tr>
              <tr>
                  <td>Panjang : 230 cm</td>
                  <td>Berat Kosong : 800 Kg</td>
                  <td>Panjang : 372 cm</td>
                  <td>Model : G15A</td>
                  <td>Ukuran Ban: 165R 13C 94/92R 8PR</td>
              </tr>
              <tr>
                  <td>Lebar : 140 cm</td>
                  <td>Berat Maksimal : 1 Ton</td>
                  <td>Lebar : 183 cm</td>
                  <td>Kapasitas Silinder : 1493 cc</td>
                  <td>Ukuran Roda: -</td>
              </tr>
              <tr>
                  <td>Tinggi : 30 cm</td>
                  <td></td>
                  <td>Tinggi : 182 cm</td>
                  <td>Kecepatan Maksimum (Km/Jam) : -</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Dimensi : 6 CBM</td>
                  <td></td>
                  <td></td>
                  <td>Tenaga Maksimum (PS/rpm) : 78,8/5500</td>
                  <td></td>
              </tr>
          </tbody>
          </Table>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <img src={pickup_box}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
          <tbody>
              <tr>
                  <th colspan="5"><center>Pick Up Box</center></th>
              </tr>
              <tr>
                  <th>Ukuran Karoseri</th>
                  <th>Berat</th>
                  <th>Ukuran Mobil</th>
                  <th>Mesin</th>
                  <th>Roda dan Ban</th>
              </tr>
              <tr>
                  <td>Panjang : 230 cm</td>
                  <td>Berat Kosong : 1 Ton</td>
                  <td>Panjang : 428 cm</td>
                  <td>Model : 3SZ - VE, DOHC VVTi berpendingin air</td>
                  <td>Ukuran Ban: 175 R13 - 8PR</td>
              </tr>
              <tr>
                  <td>Lebar : 140 cm</td>
                  <td>Berat Maksimal : 1 Ton</td>
                  <td>Lebar : 167 cm</td>
                  <td>Kapasitas Silinder : 1298 cc</td>
                  <td>Ukuran Roda: -</td>
              </tr>
              <tr>
                  <td>Tinggi : 190 cm</td>
                  <td></td>
                  <td>Tinggi : 207 cm</td>
                  <td>Kecepatan Maksimum (Km/Jam) : -</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Dimensi : 4 CBM</td>
                  <td></td>
                  <td></td>
                  <td>Tenaga Maksimum (PS/rpm) : 88/6000</td>
                  <td></td>
              </tr>
          </tbody>
          </Table>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <img src={pickup_reefer}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
          <tbody>
              <tr>
                <th colspan="5"><center>Pick Up Reefer</center></th>
              </tr>
              <tr>
                  <th>Ukuran Karoseri</th>
                  <th>Berat</th>
                  <th>Ukuran Mobil</th>
                  <th>Mesin</th>
                  <th>Roda dan Ban</th>
              </tr>
              <tr>
                  <td>Panjang : 200 cm</td>
                  <td>Berat Kosong : 1 Ton</td>
                  <td>Panjang : 428 cm</td>
                  <td>Model : 3SZ - VE, DOHC VVTi berpendingin air</td>
                  <td>Ukuran Ban: 175 R13 - 8PR</td>
              </tr>
              <tr>
                  <td>Lebar : 170 cm</td>
                  <td>Berat Maksimal : 1 Ton</td>
                  <td>Lebar : 167 cm</td>
                  <td>Kapasitas Silinder : 1298 cc</td>
                  <td>Ukuran Roda: -</td>
              </tr>
              <tr>
                  <td>Tinggi : 150 cm</td>
                  <td></td>
                  <td>Tinggi : 207 cm</td>
                  <td>Kecepatan Maksimum (Km/Jam) : -</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Dimensi : 4 CBM</td>
                  <td></td>
                  <td></td>
                  <td>Tenaga Maksimum (PS/rpm) : 88/6000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Suhu Maksimum : -20 Derajat</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </tbody>
          </Table>
        </div>
      </div>
    </div>
    )
}