import React from 'react'

export default () => {
    return (
        <>
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3">
            <h3 class="signin-text mb-3">Login</h3>
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" />
              </div>
              <button class="btn btn-primary">Sign In</button>
              <p role="button">Don't have any account yet?</p>
            </form>
          </div>
        </div>
      </div>
      </>
    )
}