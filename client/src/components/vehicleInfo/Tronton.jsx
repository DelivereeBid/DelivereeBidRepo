import React from 'react';
import {Nav, Table, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import van from '../../images/van_blind_van.jpg';
import pickup_bak from '../../images/pickup_bak.jpg'
import tronton_bak from '../../images/tronton_bak.jpg'
import tronton_box from '../../images/tronton_box.jpg'
import tronton_car_carrier from '../../images/tronton_car-carrier.jpg'

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
          <img src={tronton_bak}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
          <tbody>
              <tr>
                  <th colspan="5" class="text-center">Tronton Bak</th>
              </tr>
              <tr>
                  <th>Ukuran Karoseri</th>
                  <th>Berat</th>
                  <th>Ukuran Mobil</th>
                  <th>Mesin</th>
                  <th>Roda dan Ban</th>
              </tr>
              <tr>
                  <td>Panjang : 940 cm</td>
                  <td>Berat Kosong : 7,2 Ton</td>
                  <td>Panjang : 1190 cm</td>
                  <td>Model : 6S20</td>
                  <td>Ukuran Ban: -</td>
              </tr>
              <tr>
                  <td>Lebar : 220 cm</td>
                  <td>Berat Maksimal : 20 Ton</td>
                  <td>Lebar : 250 cm</td>
                  <td>Kapasitas Silinder : -</td>
                  <td>Ukuran Roda: -</td>
              </tr>
              <tr>
                  <td>Tinggi : 230 cm</td>
                  <td></td>
                  <td>Tinggi : 290 cm</td>
                  <td>Kecepatan Maksimum (Km/Jam) : 90</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Dimensi : 30 CBM</td>
                  <td></td>
                  <td></td>
                  <td>Tenaga Maksimum (PS/rpm) : 230/2.200</td>
                  <td></td>
              </tr>
          </tbody>
          </Table>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <img src={tronton_box}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
          <tbody><tr>
                                    <th colspan="5" class="text-center">Tronton Box</th>
                                </tr>
                                <tr>
                                    <th>Ukuran Karoseri</th>
                                    <th>Berat</th>
                                    <th>Ukuran Mobil</th>
                                    <th>Mesin</th>
                                    <th>Roda dan Ban</th>
                                </tr>
                                <tr>
                                    <td>Panjang : 940 cm</td>
                                    <td>Berat Kosong : 7,2 Ton</td>
                                    <td>Panjang : 1190 cm</td>
                                    <td>Model : 6S20</td>
                                    <td>Ukuran Ban: -</td>
                                </tr>
                                <tr>
                                    <td>Lebar : 220 cm</td>
                                    <td>Berat Maksimal : 20 Ton</td>
                                    <td>Lebar : 250 cm</td>
                                    <td>Kapasitas Silinder : -</td>
                                    <td>Ukuran Roda: -</td>
                                </tr>
                                <tr>
                                    <td>Tinggi : 230 cm</td>
                                    <td></td>
                                    <td>Tinggi : 290 cm</td>
                                    <td>Kecepatan Maksimum (Km/Jam) : 90</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Dimensi : 30 CBM</td>
                                    <td></td>
                                    <td></td>
                                    <td>Tenaga Maksimum (PS/rpm) : 230/2.200</td>
                                    <td></td>
                                </tr>
                            </tbody>
          </Table>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <img src={tronton_car_carrier}
        alt="" height="200px"></img>
        </div>
        <div className="col-md-9">
          <Table striped bordered hover>
          <tbody><tr>
                                    <th colspan="5" class="text-center">Tronton Car Carrier</th>
                                </tr>
                                <tr>
                                    <th>Ukuran Karoseri</th>
                                    <th>Berat</th>
                                    <th>Ukuran Mobil</th>
                                    <th>Mesin</th>
                                    <th>Roda dan Ban</th>
                                </tr>
                                <tr>
                                    <td>Panjang : 630 cm</td>
                                    <td>Berat Kosong : 7,2 Ton</td>
                                    <td>Panjang : 1190 cm</td>
                                    <td>Model : 6S20</td>
                                    <td>Ukuran Ban: -</td>
                                </tr>
                                <tr>
                                    <td>Lebar : 220 cm</td>
                                    <td>Berat Maksimal : 15 Ton</td>
                                    <td>Lebar : 250 cm</td>
                                    <td>Kapasitas Silinder : -</td>
                                    <td>Ukuran Roda: -</td>
                                </tr>
                                <tr>
                                    <td>Tinggi : 230 cm</td>
                                    <td></td>
                                    <td>Tinggi : 290 cm</td>
                                    <td>Kecepatan Maksimum (Km/Jam) : 90</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Dimensi : 30 CBM</td>
                                    <td></td>
                                    <td></td>
                                    <td>Tenaga Maksimum (PS/rpm) : 230/2.200</td>
                                    <td></td>
                                </tr>
                            </tbody>
          </Table>
        </div>
      </div>
    </div>
    )
}