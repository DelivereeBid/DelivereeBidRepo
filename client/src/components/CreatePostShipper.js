import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import { createPostShipper } from '../store/index'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';
import FusoBerat from '../assets/vechile/2.png'
import FusoRingan from '../assets/vechile/3.png'
import FusoCDD from '../assets/vechile/4.png'
import EngkelBox from '../assets/vechile/5.png'
import BoxKecil from '../assets/vechile/6.png'
import Pickup from '../assets/vechile/7.png'
import Van from '../assets/vechile/8.png'
import Ekonomi from '../assets/vechile/9.png'

function CreatePostShippers (props) {
    const [product_name, setName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [description, setDescription] = useState('')
    // const [product_picture, setPicture] = useState(0)
    const [filename, setFilename] = useState('')
    const [file, setFile] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const show = useSelector((state) => state.show)

    function onName (e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function onFrom (e) {
        e.preventDefault()

        setFrom(e.target.value)
    }

    function onTo (e) {
        e.preventDefault()
        setTo(e.target.value)
    }

    function onDescription (e) {
        e.preventDefault()
        setDescription(e.target.value)
    }


    function submitPost (e) {
        e.preventDefault()
        const arrFrom = [ ...from]
        arrFrom[0] = arrFrom[0].toUpperCase()

        const arrTo = [ ...to]
        arrTo[0] = arrTo[0].toUpperCase()

        const payload = {
            product_name,
            from : arrFrom.join(''),
            to: arrTo.join(''),
            file,
            description
        }
        // console.log(arrFrom.join(''))
        console.log(file)
        dispatch(createPostShipper(payload))
        history.push('/shipper')
        // $('#close-modal').trigger('click')
    }

    const handleClose = () => dispatch({
        type: 'SET_SHOW',
        payload: false
    });

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };


    return (

        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Deliveriee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <form onSubmit={(e) => submitPost(e)} method="post" encType="multipart/form-data">
                        <div class="form-group row">
                            <label for="inputTitle" class="col-sm-2 col-form-label">Product Name</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onName(e)} type="text" class="form-control" id="inputTitle" placeholder="Laptop"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputFrom" class="col-sm-2 col-form-label">From</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onFrom(e)} type="text" class="form-control" id="inputFrom" placeholder="Jl. Pangeran Antasari no.2A"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputTo" class="col-sm-2 col-form-label">To</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onTo(e)}  type="text" class="form-control" id="inputTo" placeholder="Jl. Sangkuriang no.31"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputDescription" class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onDescription(e)}  type="text" class="form-control" id="inputDescription" placeholder="Ada 5 laptop, tolong hati-hati"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="customFile" class="col-sm-2 col-form-label">Product Picture</label>
                            <div className='custom-file col-sm-10'>
                                <input
                                    type='file'
                                    className='custom-file-input'
                                    id='customFile'
                                    onChange={onChange}
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    {filename}
                                </label>
                            </div>

                            {/* <Progress percentage={uploadPercentage} /> */}

                        </div>
                        <Button  type="submit"  onClick={handleClose}>Request</Button>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </form>

                </Modal.Body>
            </Modal>
      </>
    )
}

export default CreatePostShippers