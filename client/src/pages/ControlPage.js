import React, { useState, useEffect, useRef } from 'react'
import {Navbar} from '../components'
import io from "socket.io-client";
import { useHistory, useParams } from 'react-router-dom'
import {transporterById} from '../store/index.js'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
import './controlPage.css'
import { Button } from 'react-bootstrap';

function ControlPage (props) {
    const [yourID, setYourID] = useState();
    const [usernameId, setUsername] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const {id} = useParams()
    console.log(id, 'id')
    const arrId = id.split('_')
    const role = arrId[0]
    const username = arrId[1]
    const userId = arrId[2]
    const email = arrId[3]
    let [address, setAddress] = useState('')

    const socketRef = useRef();
    console.log(message)

    useEffect(() => {
        socketRef.current = io.connect('http://localhost:3000');
        
        socketRef.current.emit("your id", id);
        
        socketRef.current.on("your id", id => {
            console.log(id, 'iniId')
            setYourID(id);
        })
        
        socketRef.current.emit("your username", username);
        socketRef.current.on("your username", username => {
            console.log(username, 'iniUsername')
            setUsername(username);
        })
        
        
        socketRef.current.on("message", (message) => {
            console.log("here");
            receivedMessage(message);
        })
    }, []);
    
    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }
    
    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: message,
            id: yourID,
            username: usernameId
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
    }
    
    function handleChange(e) {
        setMessage(e.target.value);
    }

    //G MAPS
    
    const [latitude, setLatitude] = useState(-6.2087634)
    const [longitude, setLongitude] = useState(106.845599)

    const handleSearchChange = address => {
        setAddress(address)
    };
    
    const handleSelect = address => {
        setAddress(address)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng)
                setLatitude(latLng.lat);
                setLongitude(latLng.lng);
            })
            .catch(error => console.error('Error', error));
    };

    return (
        <>
            <Navbar/>
            <h3>Control Page</h3>
            <div className="container-fluid h-100">
                <div className="stepwizard">
                    {   role === 'shipper' &&
                        <div className="stepwizard-row setup-panel">
                            <div className="stepwizard-step">
                                <a href="" type="button" className="btn btn-secondary btn-circle" disabled="disabled">
                                    <span className="glyphicon glyphicon-envelope"></span>
                                </a>
                                <p>Bandung</p>
                            </div>
                            <div className="stepwizard-step">
                                <a href="" type="button" className="btn btn-secondary btn-circle" id="ProfileSetup-step-2">
                                    <span className="glyphicon glyphicon-user"></span>
                                </a>
                                <p>Cikarang</p>
                            </div>
                            <div className="stepwizard-step">
                                <a href="" type="button"  className="btn btn-secondary btn-circle"  disabled="disabled" id="Security-Setup-step-3">
                                    <span className="glyphicon glyphicon-ok"></span>
                                </a>
                                <p>Jakarta</p>
                            </div>
                        </div>
                    }


                </div>
                <div className="row justify-content-center h-100">
                    <div className="col-md-8 col-xl-8 chat">
                        <div className="card card-chat">
                            <div className="card-header-chat msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="user_info">
                                        <span>Chat with {usernameId}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body msg_card_body">
                                {messages.map((message, index) => {
                                    if(message.id === yourID) {
                                        return (
                                            <div className="d-flex justify-content-start mb-4" key={index}>
                                                <div className="msg_cotainer">
                                                    {message.body}
                                                </div>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div className="d-flex justify-content-end mb-4" key={index}>
                                    <div className="msg_cotainer_send">
                                        {message.body}
                                    </div>
                                </div>
                                    )
                                })

                                }



                            </div>
                            <div className="card-footer-chat">
                            <form onSubmit={sendMessage}>
                                    <div className="input-group">

                                        <textarea name="" className="form-control type_msg" value={message} onChange={handleChange} placeholder="Say something..."></textarea>
                                        <button type='submit' className="btn">
                                            <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                                        </button>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Contact</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{usernameId}</h6>
                                <div className="card-text">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fas fa-clock mr-2 text-center"></i></td>
                                                <td>{email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {   role === 'transporter' &&
                            <div className="card">
                                    {
                                        // let latlon = position.coords.latitude + "," + position.coords.longitude;
                                        latitude && longitude ?
                                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude +','+longitude}
                                        &zoom=14&size=400x400&sensor=false&markers=color:red%7C${latitude + ',' + longitude}
                                        &key=AIzaSyAaoKpi0CH9Ur9s7sVNfyHMN8ANlLa6JIw`} alt=''></img> : null
                                    }
                                <div className="card-body">
                                    <h4 className="card-title">Update Location</h4>
                                    <form>
                                        <div className="row">

                                                <PlacesAutocomplete
                                                value={address}
                                                onChange={handleSearchChange}
                                                onSelect={handleSelect}
                                                >
                                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                    <div>
                                                        <input
                                                        {...getInputProps({
                                                            placeholder: 'Search Places ...',
                                                            className: 'location-search-input',
                                                        })}
                                                        />
                                                        <div className="autocomplete-dropdown-container">
                                                        {loading && <div>Loading...</div>}
                                                        {suggestions.map(suggestion => {
                                                            const className = suggestion.active
                                                            ? 'suggestion-item--active'
                                                            : 'suggestion-item';
                                                            // inline style for demonstration purpose
                                                            const style = suggestion.active
                                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                            return (
                                                            <div
                                                                {...getSuggestionItemProps(suggestion, {
                                                                className,
                                                                style,
                                                                })}
                                                            >
                                                                <span>{suggestion.description}</span>
                                                            </div>
                                                            );
                                                        })}
                                                        </div>
                                                    </div>
                                                    )}
                                            </PlacesAutocomplete>
                                            <Button className="px-1 p-0 ml-1" style={{height: '30px'}} variant="primary">Update Location</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                        {/* <div class="btn-group btn-block" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">Complaint</button>
                            <button type="button" class="btn btn-success">Send Money</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ControlPage