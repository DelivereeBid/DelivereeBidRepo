import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchTransporterById } from "../store/index";
import { Link } from "react-router-dom";

const NavbarTrans = (props) => {
  const id = localStorage.getItem("transporterId");
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.transporter);

  useEffect(() => {
    dispatch(fetchTransporterById(id));
  }, [dispatch]);

  const signOut = () => {
    localStorage.clear();
    history.push("/");
  };

  // if (!profile) {
  //   return <h1>loading</h1>;
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-4 sticky-top nav-back-color px-4">
        <div className="navbar-brand text-decoration-none font-weight-bolder" ><Link className='text-decoration-none text-white' to='/transporter'>Delivery Jobbers</Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><Link to='/vechileInformation'></Link>Vehicle</a>
            </li>
          </ul>
          <ul className="navbar-nav mr-4">
            <li className="nav-item">
                <div className="nav-item text-decoration-none text-white mr-4" style={{textTransform: 'capitalize'}}><i class="fas fa-wallet"></i>
                {profile.wallet?.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</div>
              </li>
              <li className="nav-item">
              <div className="nav-item text-decoration-none text-white" style={{textTransform: 'capitalize'}}><i class="fas fa-user-circle"></i> {profile.username}</div>
              </li>
          </ul>
          <div type='button' className="nav-item" onClick={() => signOut()} className="font-weight-bold text-white">Sign Out</div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTrans;
