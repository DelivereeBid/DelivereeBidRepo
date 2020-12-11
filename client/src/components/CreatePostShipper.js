import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FusoBerat from '../assets/vechile/2.png'
import FusoRingan from '../assets/vechile/3.png'
import FusoCDD from '../assets/vechile/4.png'
import EngkelBox from '../assets/vechile/5.png'
import BoxKecil from '../assets/vechile/6.png'
import Pickup from '../assets/vechile/7.png'
import Van from '../assets/vechile/8.png'
import Ekonomi from '../assets/vechile/9.png'

function CreatePostShippers (props) {

    return (
        <div class="modal" id="exampleModalCentered" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenteredLabel">Request Deliveriee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group row">
                            <label for="inputFrom" class="col-sm-2 col-form-label">From</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputFrom" placeholder="Jl. Pangeran Antasari no.2A"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputTo" class="col-sm-2 col-form-label">To</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputTo" placeholder="Jl. Sangkuriang no.31"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="inputDate"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputItems" class="col-sm-2 col-form-label">Items</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputItems" placeholder="Makanan, Baju"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputVolume" class="col-sm-2 col-form-label">Volume</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputVolume" placeholder="20cm x 30cm x 100cm"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputBudget" class="col-sm-2 col-form-label">Budget</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputBudget" placeholder="Rp. 3000000"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label"><Link to='/vechileInformation'>Vechile</Link></label>
                            <div class="col-sm-10" id="inputEmail3">
                                <select class="custom-select">
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

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Request</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostShippers