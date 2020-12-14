import React from 'react'
import { Link } from 'react-router-dom'

const role = 'shipper'

function Navbar (props) {

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#"><Link to={role === 'shipper' ? '/shipper' : '/transporter'}>DeliverieeBid</Link></a>
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

            { role === 'transporter' &&
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to='/transporter/wallet'>Wallet</Link></a>
              </li>
            }

            { role === 'transporter' &&
              <li className="nav-item">
                <a className="nav-link" href="#">Delivery Status</a>
              </li>
            }

            <li className="nav-item">
              <a className="nav-link" href="#"><Link to='/vechileInformation'></Link>Vechile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inbox</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

export default Navbar