import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setSignUp } from '../store'

function RegisterTranspotter (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [fileee, setFileee] = useState('');
  const [user, setUser] = useState ({
    username : '',
    email : '',
    password : '',
    vehicle: '',
    file: ''
  }) 

  const changeInput = (e) => {
    const newInput = {
      ...user
    }
    newInput[e.target.name] = e.target.value
    setUser(newInput)
  }

  const changeInputFile = (e) => {
    const newInput = {
      ...user
    }
    setFileee(e.target)
    newInput.file = e.target.files[0]
    setUser(newInput)
  }

  const handleRegister = () => {
    dispatch(setSignUp(user))
    history.push('/transporter-login')
  }

    return (
        <>
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3">
            <h3 class="signin-text mb-3">Register</h3>
            <form onSubmit={(e) => handleRegister()}>
              <div class="form-group">
                <label for="email">Email</label>
                <input onChange={(e) => changeInput(e)} type="email" name="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input onChange={(e) => changeInput(e)} type="password" name="password" class="form-control" />
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input onChange={(e) => changeInput(e)} type="text" name="username" class="form-control" />
              </div>
              <div class="form-group">
                <label for="username">Picture</label>
                <input onChange={(e) => changeInputFile(e)} type="file" name="file" class="form-control" />
              </div>
              <div class="form-group">
                <label for="vehicle">Vehicle</label>
                <input onChange={(e) => changeInput(e)} type="text" name="vehicle" class="form-control" />
              </div>
              {/* <div className="form-group">
              <label for="text">Role</label>
              <select class="form-control" aria-label="Default select example">
                <option selected disabled>Choose your role</option>
                <option value="Transpotter">Transpotter</option>
                <option value="Shipper">Shipper</option>
              </select>
              </div> */}
              {/* <div className="form-group">
                <input class="form-check-input-control" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                <label for="text">Vehicle 1</label>
                <br></br>
                <input class="form-check-input-control" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                <label for="text">Vehicle 2</label>
                <br></br>
                <input class="form-check-input-control" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                <label for="text">Vehicle 3</label>
                <br></br>
                <input class="form-check-input-control" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                <label for="text">Vehicle 4</label>
              </div> */}
              <button type="submit" class="btn btn-primary">Register</button>
              <p className="mt-3" role="button" onClick={() => handleRegister()}>Have an account ?</p>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}

export default RegisterTranspotter