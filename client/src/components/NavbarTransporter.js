import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchTransporterById } from '../store/index'

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

    return (
        <>
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src={profile.profile_picture} width="30" height="30" class="d-inline-block align-top" alt=""></img>
            Bootstrap
        </a>
        <a className="navbar-brand">
            <p>Welcome {profile.username}</p>
        </a>
        <button onClick={() => signOut()} className="btn btn-danger">Sign Out</button>
        </nav>
        {/* {JSON.stringify(profile)} */}
        </>
    )
}

export default NavbarTrans
