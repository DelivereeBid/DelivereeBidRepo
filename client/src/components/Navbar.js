import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { fetchProfileShipper } from '../../src/store/index'
import wave from '../assets/wave.svg'

const role = 'shipper'

function Navbar (props) {
  const history = useHistory()
  const id = localStorage.getItem('shipperId')
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile_shipper)

  function jalan () {
    console.log('jalan kaga ya')
  }

  useEffect(() => {
    dispatch(fetchProfileShipper(id))
  }, [])



  const signOut = () => {
    localStorage.clear()
    history.push('/')
  }
  console.log(id, 'idd')
  console.log(profile, 'profilz')

    return (
      <>
      {/* {JSON.stringify(profile)} */}
    <nav className="navbar navbar-expand-lg navbar-light  mb-4 sticky-top nav-back-color px-4" >

        <div className="navbar-brand text-decoration-none font-weight-bolder" ><Link className='text-decoration-none text-white' to={role === 'shipper' ? '/shipper' : '/transporter'}>Delivery Jobbers</Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* { role === 'shipper' &&
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to='/shipper/createPost'>Request</Link></a>
              </li>
            } */}

            {/* { role === 'transporter' &&
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to='/transporter/wallet'>Wallet</Link></a>
              </li>
            }

            { role === 'transporter' &&
              <li className="nav-item">
                <a className="nav-link" href="#">Delivery Status</a>
              </li>
            } */}

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
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
      </>
    )
}

export default Navbar