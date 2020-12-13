import React from 'react'
import cargoTruck from '../images/cargo-truck.jpg'
import {Nav, Table, Button} from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import './vehicleInfo.css'
import { Navbar } from '../components';
import VehicleCDD from '../components/vehicleInfo/VehicleCDD';

function VechileInformation (props) {
  const { path, url } = useRouteMatch();
    return (
      <>
      <Navbar />
      <h1 className="mt-5 text-center mb-5 text-primary">Vehicle Information</h1>
      <div className="content">
        <div className="tablecontent">
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home" className="bg-warning mr-1">Colt Diesel Double</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" className="bg-warning mr-1">Van</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">Pickup</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">Tronton</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">Colt Diesel Engine</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">Fuso</Nav.Link>
            </Nav.Item>
          </Nav>
          <VehicleCDD />
          <Switch>
            <Route path={`${path}/`}>

            </Route>
          </Switch>
        </div>
      </div>
      </>
    )
}

export default VechileInformation