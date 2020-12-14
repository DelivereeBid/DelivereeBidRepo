import React from 'react'
import { Switch, Route, Link  } from 'react-router-dom'
import { HomeShipper, HomeTransporter, PaymentMethod, HomePage, DetailPostShipper, Wallet, ComplaintPage, ControlPage, LoginTransporter, LoginShipper, RatingPage, RegisterTranspotter, RegisterShipper, VechileInformation, DeliveryStatus } from './pages'
import { Provider} from 'react-redux'
import store from './store'
import './App.css'
import PrivateRoute from './routers/PrivateRoute'

function App() {
  return (
    <Provider store={store}>
      <Switch>
          <PrivateRoute component={HomeShipper} path='/shipper' redirect='/shipper-login'>
          </PrivateRoute>
          <PrivateRoute component={PaymentMethod} exact path='/payment/:id' redirect='/'>
          </PrivateRoute>
          <PrivateRoute component={HomeTransporter} path='/transporter' redirect='/transporter-login'>
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
          <PrivateRoute component={ComplaintPage} path="/complaint" exact redirect='/'>
          </PrivateRoute>
          <PrivateRoute component={ControlPage} path='/controlPage' redirect='/'>
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
          <PrivateRoute component={RatingPage} path='/ratingPage' redirect='/'>
          </PrivateRoute>
          <PrivateRoute component={VechileInformation} path='/vechileInformation' redirect='/'>
          </PrivateRoute>
        </Switch>
    </Provider>
  );
}

export default App;
