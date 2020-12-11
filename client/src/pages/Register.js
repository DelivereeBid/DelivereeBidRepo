import React from 'react'

function Register (props) {

    return (
        <>
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3">
            <h3 class="signin-text mb-3">Register</h3>
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" />
              </div>
              <div className="form-group">
              <label for="text">Role</label>
              <select class="form-control" aria-label="Default select example">
                <option selected disabled>Choose your role</option>
                <option value="Transpotter">Transpotter</option>
                <option value="Shipper">Shipper</option>
              </select>
              </div>
              <div className="form-group">
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
              </div>
              <button class="btn btn-primary">Register</button>
              <p className="mt-3" role="button">Have an account ?</p>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}

export default Register