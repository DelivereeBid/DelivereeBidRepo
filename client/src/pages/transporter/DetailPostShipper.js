import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchShippersById, setBid, fetchTransporterById, patchShipperPost } from "../../store/index";
import { NavbarTrans } from '../../components/index'

function DetailPostShipper(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const detail = useSelector((state) => state.shipper);
  const bid = useSelector((state) => state.transporter)
  const [price, setPrice] = useState(0);
  useEffect(() => {
    dispatch(fetchShippersById(id));
    dispatch(fetchTransporterById(id));
    console.log(bid);
  }, [dispatch]);

  const handleBid = (e) => {
    e.preventDefault();
    const payload = {
      BidId: id,
      price,
    };
    console.log(price, id)
    console.log(payload , 'ini DetailPostShipper di 28')
    dispatch(setBid(payload));
    history.push("/transporter");
  };

  return (
    <>
    <NavbarTrans/>
      {/* {JSON.stringify(detail)} */}
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div className="container shadow mb-5" style={{backgroundColor: "#0099ff", borderRadius: '15px'}}>
          <div className="row">
        <div className="col mx-auto d-flex mt-3 justify-content-center align-items-center">
          <img  src={detail.product_picture} style={{  width: '500px', height: '250px', objectFit: 'contain', objectPosition: 'center'}}></img>
        </div>
        <div class="col mt-3 mb-5">
          <div class="card">
            <h3 className="text-center mt-2">Shipping's Detail</h3>
            <div class="card-body">
            <table class="table">
                <tbody>
                  <tr>

                    <th>From</th>
                    <td>{detail.from}</td>


                  </tr>
                  <tr>
                    <th>To</th>
                    <td>{detail.to}</td>
                  </tr>
                  <tr>
                  <th>Product's Name</th>
                  <td>{detail.product_name}</td>

                  </tr>

                  <tr>

                  <th>Product's Description</th>

                    <td>{detail.description}</td>
                  </tr>


                </tbody>
              </table>
              <div class="input-group justify-content-center">
                <div class="input-group-text mb-3 mr-1">Bid :</div>
                <input
                  onChange={(e) => {
                    console.log(bid)
                    setPrice(+e.target.value)}}
                  type="number"
                  class="form-control col-sm-5"
                  placeholder="000000"
                ></input>
              </div>
              <div  class="input-group justify-content-center">
                <button className='justify-content-center' onClick={(e) => handleBid(e)} className="btn btn-success">
                  Submit Bid
                </button>
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default DetailPostShipper;
