import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { HomeShipper, HomeTransporter, PaymentMethod, HomePage, DetailPostShipper, Wallet, ComplaintPage, ControlPage, LoginTransporter, LoginShipper, RatingPage, RegisterTranspotter, RegisterShipper, VechileInformation, DeliveryStatus } from './pages'
import { Provider} from 'react-redux'
import store from './store'
import { CreatePostShipper, EditPostShipper } from './components'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Switch>
          <Route path='/shipper'>
            <HomeShipper/>
          </Route>
          {/* <Route exact path='/shipper/createPost'>
            <CreatePostShipper/>
          </Route> */}
          <Route exact path='/payment/:id'>
            <PaymentMethod/>
          </Route>
          <Route exact path='/transporter'>
            <HomeTransporter/>
          </Route>
          <Route exact path='/'>
            <HomePage/>
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
          <Route exact path='/complaint'>
            <ComplaintPage/>
          </Route>
          <Route exact path='/controlPage/:id'>
            <ControlPage/>
          </Route>
          <Route exact path='/shipper-login'>
            <LoginShipper/>
          </Route>
          <Route exact path='/transporter-login'>
            <LoginTransporter/>
          </Route>
          <Route exact path='/shipper-register'>
            <RegisterShipper/>
          </Route>
          <Route path='/transporter-register'>
            <RegisterTranspotter/>
          </Route>
          <Route path='/ratingPage'>
            <RatingPage/>
          </Route>
          <Route path='/vehicleInformation'>
            <VechileInformation/>
          </Route>
        </Switch>
    </Provider>
  );
}

export default App;
