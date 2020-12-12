import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { HomeShipper, HomeTransporter, PaymentMethod, DetailPostShipper, Wallet, ComplaintPage, ControlPage, Login, RatingPage, Register, VechileInformation } from './pages'
import { Provider} from 'react-redux'
import store from './store'
import { CreatePostShipper, EditPostShipper } from './components'

function App() {
  return (
    <Provider store={store}>
      <form action="/upload-single" method="post" enctype="multipart/form-data">
        <input type="file" name="file" />
      </form>
      <Switch>
          <Route exact path='/shipper'>
            <HomeShipper/>
          </Route>
          <Route exact path='/shipper/createPost'>
            <CreatePostShipper/>
          </Route>
          <Route exact path='/shipper/payment'>
            <PaymentMethod/>
          </Route>
          <Route  path='/shipper/editPost/:id'>
            <EditPostShipper/>
          </Route>
          <Route exact path='/transporter'>
            <HomeTransporter/>
          </Route>
          <Route exact path='/transporter'>
            <HomeTransporter/>
          </Route>
          <Route exact path='/transporter/detailPost'>
            <DetailPostShipper/>
          </Route>
          <Route exact path='/transporter/wallet'>
            <Wallet/>
          </Route>
          <Route exact path="/transporter/deliveryStatus">
            <DeliveryStatus />
          </Route>
          <Route path='/complaint'>
            <ComplaintPage/>
          </Route>
          <Route path='/controlPage'>
            <ControlPage/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/ratingPage'>
            <RatingPage/>
          </Route>
          <Route path='/vechileInformation'>
            <VechileInformation/>
          </Route>
        </Switch>
    </Provider>
  );
}

export default App;
