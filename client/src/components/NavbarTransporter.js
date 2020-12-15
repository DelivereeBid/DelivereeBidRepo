import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchTransporterById } from '../store/index'
import { Link } from 'react-router-dom'

const NavbarTrans = (props) => {
    const id = localStorage.getItem('transporterId')
    const history = useHistory()
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.transporter)

    useEffect(() => {
        dispatch(fetchTransporterById(id))
    }, [dispatch])

    const signOut = () => {
        localStorage.clear()
        history.push('/')
      }

    if (!profile) {
      return <h1>loading</h1>
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">DeliverieeBid</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to='/transporter/wallet'>Wallet</Link></a>
              </li>
            <li className="nav-item">

                <a className="nav-link" >Your Balance : {profile.wallet}</a>


            </li>
          </ul>
          <ul className="navbar-nav mr-2">
              <li className="nav-item">
              <a className="nav-item">Welcome, {profile.username}</a>
              </li>
          </ul>

          <button className="nav-item" onClick={() => signOut()} className="btn btn-danger">Sign Out</button>
        </div>
      </nav>
        </>
    )
}

export default NavbarTrans
