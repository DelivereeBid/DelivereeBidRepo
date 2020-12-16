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
      <h1 className="text-center">Detail Post Shipper</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col mt-5">
          <div class="card">
            <h3 className="text-center">Detail</h3>
            <div class="card-body">
              <h5 class="card-title">Shipper's Information</h5>
              {/* <p class="card-text">Name           : {detail.Shipper.username}</p> */}
              {/* <img className="card-img-top" src={detail.Shipper.profile_picture}></img> */}
              <p class="card-text">From : {detail.from}</p>
              <p class="card-text">To : {detail.to}</p>
              <br></br>
              <p class="card-text">Product name : {detail.product_name} </p>
              <img src={detail.product_picture}></img>
              <p className="card-text">Description : {detail.description}</p>
              <div class="input-group ">
                <div class="input-group-text">Bid :</div>
                <input
                  onChange={(e) => {
                    console.log(bid)
                    setPrice(+e.target.value)}}
                  type="number"
                  class="form-control col-sm-5"
                  placeholder="000000"
                ></input>
              </div>
              <button onClick={(e) => handleBid(e)} className="btn btn-success">
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="col-sm-1 btn btn-danger">Back</button>
    </>
  );
}

export default DetailPostShipper;
