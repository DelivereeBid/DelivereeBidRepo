import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import {
  HomeShipper,
  HomeTransporter,
  PaymentMethod,
  HomePage,
  DetailPostShipper,
  Wallet,
  ComplaintPage,
  ControlPage,
  LoginTransporter,
  LoginShipper,
  RatingPage,
  RegisterTranspotter,
  RegisterShipper,
  VechileInformation,
  DeliveryStatus,
} from "./pages";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  const history = useHistory();
  let shipper_token = localStorage.getItem("shipper_token");
  let transporter_token = localStorage.getItem("transporter_token");

  function credentialsHandler() {
    if (shipper_token) {
      return "shipper_token";
    } else {
      return "transporter_token";
    }
  }

  function homePageHandler() {
    let redirect = false;
    if (shipper_token || transporter_token) {
      redirect = true;
    }
    return redirect;
  }

  function homePageRedirectHandler() {
    if (shipper_token) {
      history.push("/shipper");
    } else if (transporter_token) {
      history.push("/transporter");
    } else {
      return "";
    }
  }

  return (
    <Provider store={store}>
      <Switch>
<<<<<<< HEAD
        <PrivateRoute
          auth="shipper_token"
          component={HomeShipper}
          path="/shipper"
          redirect="/shipper-login"
        ></PrivateRoute>
        <PrivateRoute
          auth={credentialsHandler()}
          component={PaymentMethod}
          path="/payment/:id"
          redirect="/"
        ></PrivateRoute>
        <PrivateRoute
          auth="transporter_token"
          exact
          component={HomeTransporter}
          path="/transporter"
          redirect="/transporter-login"
        ></PrivateRoute>
        <Route exact path="/">
          {homePageRedirectHandler()}
          <HomePage />
        </Route>
        <PrivateRoute
          auth="transporter_token"
          redirect="/transporter-login"
          path="/transporter/:id"
          component={DetailPostShipper}
        ></PrivateRoute>
        <Route exact path="/transporter/wallet">
          <Wallet />
        </Route>
        <Route exact path="/transporter/deliveryStatus">
          <DeliveryStatus />
        </Route>

        <Route exact path="/complaint">
          <ComplaintPage />
        </Route>
        <Route exact path="/controlPage/:id">
          <ControlPage />
        </Route>

        <Route exact path="/shipper-login">
          <LoginShipper />
        </Route>
        <Route exact path="/transporter-login">
          <LoginTransporter />
        </Route>
        <Route exact path="/shipper-register">
          <RegisterShipper />
        </Route>
        <Route path="/transporter-register">
          <RegisterTranspotter />
        </Route>
        <PrivateRoute
          auth={credentialsHandler()}
          component={RatingPage}
          path="/ratingPage"
          redirect="/"
        ></PrivateRoute>
        <PrivateRoute
          auth={credentialsHandler()}
          component={VechileInformation}
          path="/vechileInformation"
          redirect="/"
        ></PrivateRoute>
      </Switch>
=======
          <PrivateRoute auth="shipper_token" component={HomeShipper} path='/shipper' redirect='/shipper-login'>
          </PrivateRoute>
          <PrivateRoute auth={credentialsHandler()} component={PaymentMethod} exact path='/payment/:id' redirect='/'>
          </PrivateRoute>
          <PrivateRoute auth="transporter_token" exact component={HomeTransporter} path='/transporter' redirect='/transporter-login'>
          </PrivateRoute>
          <Route exact path='/'>
            {
              homePageRedirectHandler()
            }
            <HomePage/>
          </Route>
          <PrivateRoute auth="transporter_token" redirect='/transporter-login' path='/transporter/:id' component={DetailPostShipper}>
          </PrivateRoute>
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
          <PrivateRoute auth={credentialsHandler()} component={RatingPage} path='/ratingPage' redirect='/'>
          </PrivateRoute>
          <PrivateRoute auth={credentialsHandler()} component={VechileInformation} path='/vechileInformation' redirect='/'>
          </PrivateRoute>
        </Switch>
>>>>>>> b8c8629cdcb4a873d1985460a1455db0bbd93ce3
    </Provider>
  );
}

export default App;
