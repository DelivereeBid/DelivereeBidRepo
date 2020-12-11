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
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')
    const [items, setItems] = useState('')
    const [volume, setVolume] = useState('')
    const [budget, setBudget] = useState(0)
    const [vechile, setVechile] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const show = useSelector((state) => state.show)

    function onFrom (e) {
        e.preventDefault()
        setFrom(e.target.value)
    }

    function onTo (e) {
        e.preventDefault()
        setTo(e.target.value)
    }

    function onDate (e) {
        e.preventDefault()
        setDate(e.target.value)
    }

    function onItems (e) {
        e.preventDefault()
        setItems(e.target.value)
    }

    function onVolume (e) {
        e.preventDefault()
        setVolume(e.target.value)
    }

    function onBudget (e) {
        e.preventDefault()
        setBudget(e.target.value)
    }

    function onVechile (e) {
        e.preventDefault()
        setVechile(e.target.value)
    }

    function submitPost (e) {
        e.preventDefault()
        const payload = {
            from,
            to,
            date,
            items,
            volume,
            budget: +budget,
            vechile
        }
        dispatch(createPostShipper(payload))
        history.push('/shipper')
        // $('#close-modal').trigger('click')
    }

    const handleClose = () => dispatch({
        type: 'SET_SHOW',
        payload: false
    });



    return (

        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Deliveriee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <form onSubmit={(e) => submitPost(e)}>
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
                            <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onDate(e)}  type="date" class="form-control" id="inputDate"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputItems" class="col-sm-2 col-form-label">Items</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onItems(e)}  type="text" class="form-control" id="inputItems" placeholder="Makanan, Baju"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputVolume" class="col-sm-2 col-form-label">Volume</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onVolume(e)}  type="text" class="form-control" id="inputVolume" placeholder="20cm x 30cm x 100cm"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputBudget" class="col-sm-2 col-form-label">Budget</label>
                            <div class="col-sm-10">
                                <input onChange={(e) => onBudget(e)}  type="number" class="form-control" id="inputBudget" placeholder="Rp. 3000000"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label"><Link to='/vechileInformation'>Vechile</Link></label>
                            <div class="col-sm-10" id="inputEmail3">
                                <select onChange={(e) => onVechile(e)}  class="custom-select">
                                    <option> Fuso Berat</option>
                                    <option> Fuso Ringan</option>
                                    <option> Fuso CDD</option>
                                    <option> Engkel Box</option>
                                    <option> Box Kecil</option>
                                    <option> Pickup</option>
                                    <option> Van</option>
                                    <option> Ekonomi</option>
                                </select >
                            </div>
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