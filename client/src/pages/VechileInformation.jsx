import React from 'react'
import cargoTruck from '../images/cargo-truck.jpg'
import {Nav, Table, Button} from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch, useHistory } from 'react-router-dom'
import './vehicleInfo.css'
import { Navbar } from '../components';
import VehicleCDD from '../components/vehicleInfo/VehicleCDD';
import Van from '../components/vehicleInfo/Van';
import Pickup from '../components/vehicleInfo/Pickup'
import Tronton from '../components/vehicleInfo/Tronton'
import VehicleCDE from '../components/vehicleInfo/VehicleCDE'


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
              <Nav.Link className="bg-warning mr-1">
                <Link to={`${path}`}>
                Colt Diesel Double
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" className="bg-warning mr-1">
                <Link to={`${path}/van`}>
                  Van
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">
                <Link to={`${path}/pickup`}>
                  Pickup
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">
                <Link to={`${path}/tronton`}>
                  Tronton
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="mr-1 bg-warning">
                <Link to={`${path}/cde`}>
                    Colt Diesel Engine
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Switch>
            <Route exact path={`${path}`}>
              <VehicleCDD />
            </Route>
            <Route path={`${path}/van`}>
              <Van />
            </Route>
            <Route path={`${path}/pickup`}>
              <Pickup />
            </Route>
            <Route path={`${path}/tronton`}>
              <Tronton />
            </Route>
            <Route path={`${path}/cde`}>
              <VehicleCDE />
            </Route>
          </Switch>
        </div>
      </div>
      </>
    )
}

export default VechileInformation