import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import { createPostShipper, fetchShippersById, updateShipperPost } from '../store/index'
import { useHistory, useParams } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';

function EditPostShipper (props) {
    const [filename, setFilename] = useState('')
    const [file, setFile] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()
    const showEdit = useSelector((state) => state.showEdit)
    const shipper = useSelector((state) => state.shipper)
    let product_name = shipper.product_name
    let from = shipper.from
    let to = shipper.to
    let description = shipper.description
    let product_picture = shipper.product_picture



    // console.log(shipper)
    useEffect(() => {
        dispatch(fetchShippersById(id))
    },[])

    function onName (e) {
        e.preventDefault()
        // setTitle(e.target.value)
        product_name = e.target.value
    }

    function onFrom (e) {
        e.preventDefault()
        from = e.target.value
    }

    function onTo (e) {
        e.preventDefault()
        to = e.target.value
    }

    function onDescription (e) {
        e.preventDefault()
        description = e.target.value
    }

    function submitPost (e) {
        e.preventDefault()
        const arrFrom = [ ...from]
        arrFrom[0] = arrFrom[0].toUpperCase()

        const arrTo = [ ...to]
        arrTo[0] = arrTo[0].toUpperCase()
        const payload = {
            product_name,
            from: arrFrom.join(''),
            to: arrTo.join(''),
            description,
            product_picture: file ? file : product_picture,
            file
        }
        console.log(payload)
        dispatch(updateShipperPost(id, payload))
        history.push('/shipper')
        dispatch({
            type: 'SET_SHOW_EDIT',
            payload: false
        })
    }

    const handleClose = () =>{
        dispatch({
            type: 'SET_SHOW_EDIT',
            payload: false
        })
        history.push('/shipper')
    };

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    return (

        <>

            <Modal dialogClassName="modal-100w"  show={showEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <form onSubmit={(e) => submitPost(e)} method="post" encType="multipart/form-data">
                        <div class="form-group row">
                            <label for="inputTitle" class="col-sm-3 col-form-label">Product Name</label>
                            <div class="col-sm-9">
                                <input defaultValue={product_name} onChange={(e) => onName(e)} type="text" class="form-control" id="inputTitle" placeholder="Laptop"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputFrom" class="col-sm-3 col-form-label">From</label>
                            <div class="col-sm-9">
                                <input defaultValue={from} onChange={(e) => onFrom(e)} type="text" class="form-control" id="inputFrom" placeholder="Jl. Pangeran Antasari no.2A"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputTo" class="col-sm-3 col-form-label">To</label>
                            <div class="col-sm-9">
                                <input defaultValue={to} onChange={(e) => onTo(e)}  type="text" class="form-control" id="inputTo" placeholder="Jl. Sangkuriang no.31"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputDate" class="col-sm-3 col-form-label">Description</label>
                            <div class="col-sm-9">
                                <input defaultValue={description} onChange={(e) => onDescription(e)}  type="text" class="form-control" id="inputDate" placeholder="Ada 5 laptop, tolong hati-hati"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="customFile" class="col-sm-3 col-form-label">Product Picture</label>
                            <div className='custom-file col-sm-9'>
                                <input
                                    type='file'
                                    className='custom-file-input'
                                    id='customFile'
                                    onChange={onChange}
                                />
                                <label className='custom-file-label' htmlFor='customFile' style={{right: '15px', left: '15px'}}>
                                    {filename}
                                </label>
                            </div>

                            {/* <Progress percentage={uploadPercentage} /> */}

                        </div>
                        <Button className='btn-block' type="submit">Edit Request</Button>
                    </form>

                </Modal.Body>
            </Modal>
      </>
    )
}

export default EditPostShipper