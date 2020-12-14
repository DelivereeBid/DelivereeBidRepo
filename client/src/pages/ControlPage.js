import React, { useState, useEffect, useRef } from 'react'
import {Navbar} from '../components'
import io from "socket.io-client";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {transporterById} from '../store/index.js'
import './controlPage.css'

function ControlPage (props) {
    const dispatch = useDispatch()
    const [rooms, setRooms] = useState([]);
    const [isMyRoom, setIsMyRoom] = useState(false)
    const [roomName, setRoomName] = useState('')
    const [yourID, setYourID] = useState();
    const [usernameId, setUsername] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const {id} = useParams()
    const arrId = id.split('_')
    const role = arrId[0]
    const username = arrId[1]
    const userId = arrId[2]
    const email = arrId[3]
    const transporterId = arrId[4]
    //ALTERNATIVE 2 ==START==
    const [outputMessage, setOutputMessage] = useState('')
    const [outputRoomName, setOutputRoomName] = useState('')
    const [outputUsers, setOutputUsers] = useState('')
    const [arrOutputMessages, setArrMessages] = useState([])
    //ALTERNATIVE 2 ==END==

    console.log(rooms, 'ini rooms')

    const transporter = useSelector((state) => state.transporterId)
    console.log(transporter, 'ini di control')

    const socketRef = useRef();
    console.log(message)
    useEffect(() => {
        if(transporterId) {
            dispatch(transporterById(transporterId))
        }

        socketRef.current = io.connect('http://localhost:3000');




        //ALTERNATIVE 2 ==START=========

        // Join chatroom
        socketRef.current.emit('joinRoom', { username, room: `shipper_${userId}&transporter_${transporterId}` });

        // Get room and users
        socketRef.current.on('roomUsers', ({ room, users }) => {
            setOutputRoomName(room);
            setOutputUsers(users);
        });

        // Message from server
        socketRef.current.on('message', message => {
            console.log(message);
            setOutputMessage(message);
            appendMessage(message)
        })




        //ALTERNATIVE 2 ==END==========

      }, []);


      //ALTERNATIVE 2 ==START=======
        // Message submit
        function sendMessageAlt (e) {
            e.preventDefault();

            // Get message text
            let msg = message;

            msg = msg.trim();

            if (!msg){
                return false;
            }

            // Emit message to server
            socketRef.current.emit('chatMessage', msg);
            setMessage('')
        }

        console.log(outputMessage)

        function appendMessage(message) {
            let div;
            if(username === message.username) {
                 div = document.createElement('div');
                div.classList.add('d-flex');
                div.classList.add('justify-content-start');
                div.classList.add('mb-4');

                const divChild = document.createElement('div');
                divChild.classList.add('msg_cotainer');
                divChild.innerText = `${message.username}: ${message.text}`
                div.appendChild(divChild);
            } else {
                div = document.createElement('div');
                div.classList.add('d-flex');
                div.classList.add('justify-content-end');
                div.classList.add('mb-4');

                const divChildSend = document.createElement('div');
                divChildSend.classList.add('msg_cotainer_send');
                divChildSend.innerText = `${message.username}: ${message.text}`
                div.appendChild(divChildSend);
            }



            document.querySelector('.msg_card_body').appendChild(div);




          }
      //ALTERNATIVE 2 ==END=======



      function handleChange(e) {
        setMessage(e.target.value);
      }

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
                        {/* {   isMyRoom && */}
                            <div className="card card-chat">
                            <div className="card-header-chat msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="user_info">
                                        <span>Chat with {username}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body msg_card_body">


                                {/* <div className="d-flex justify-content-start mb-4">
                                    <div className="msg_cotainer">
                                    {outputMessage.username}: {outputMessage.text}
                                    </div>
                                </div> */}


                                 {/* {messages.map((message, index) => {
                                    if(message.id === yourID ) {
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

                                } */}



                            </div>
                            <div className="card-footer-chat">
                                <form onSubmit={(e) => sendMessageAlt(e)}>
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
                                <div className="card-body">
                                    <h4 className="card-title">Update Location</h4>
                                    <form>
                                        <input type='text' placeholder='Cikarang'/>
                                        <button type='submit' className='btn btn-primary'>Update</button>
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