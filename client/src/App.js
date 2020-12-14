import React from 'react'
import { Switch, Route, Link  } from 'react-router-dom'
import { HomeShipper, HomeTransporter, PaymentMethod, HomePage, DetailPostShipper, Wallet, ComplaintPage, ControlPage, LoginTransporter, LoginShipper, RatingPage, RegisterTranspotter, RegisterShipper, VechileInformation, DeliveryStatus } from './pages'
import { Provider} from 'react-redux'
import store from './store'
import './App.css'
import PrivateRoute from './routers/PrivateRoute'

function App() {
  let shipper_token = localStorage.getItem('shipper_token');
  let transporter_token = localStorage.getItem('transporter_token');

  function credentialsHandler () {
    if(shipper_token) {
      return 'shipper_token'
    } else {
      return 'transporter_token'
    }
  }

  return (
    <Provider store={store}>
      <Switch>
          <PrivateRoute auth="shipper_token" component={HomeShipper} path='/shipper' redirect='/shipper-login'>
          </PrivateRoute>
          <PrivateRoute auth={credentialsHandler()} component={PaymentMethod} exact path='/payment/:id' redirect='/'>
          </PrivateRoute>
          <PrivateRoute auth="transporter_token" component={HomeTransporter} path='/transporter' redirect='/transporter-login'>
          </PrivateRoute>
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
          <PrivateRoute auth={credentialsHandler()} component={ComplaintPage} path="/complaint" exact redirect='/'>
          </PrivateRoute>
          <PrivateRoute auth={credentialsHandler()} component={ControlPage} path='/controlPage' redirect='/'>
          </PrivateRoute>
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
          <PrivateRoute auth={credentialsHandler()} component={RatingPage} path='/ratingPage' redirect='/'>
          </PrivateRoute>
          <PrivateRoute auth={credentialsHandler()} component={VechileInformation} path='/vechileInformation' redirect='/'>
          </PrivateRoute>
        </Switch>
    </Provider>
  );
}

export default App;
