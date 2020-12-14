import React, {useEffect} from 'react'
import {Navbar} from '../../components'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {fetchShippersById, fetchPostById, transporterById, patchWalletTransporter, updateWalletShipper, patchPostById} from '../../store/index.js'

function PaymentMethod (props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()
    const arrId = id.split('_')
    // console.log(arrId, 'id di payment')
    // const deal = useSelector((state) => state.deal)
    // console.log(deal, 'ini deal')

    const shipper = useSelector((state) => state.shipper)
    console.log(shipper, 'ini shipper payment')

    const post = useSelector((state) => state.post)
    console.log(post[0], 'ini post payment')

    const transporterId = useSelector((state) => state.transporterId)
    console.log(transporterId, 'ini transporterId payment')

    useEffect (() => {
        dispatch(fetchShippersById(+arrId[0]))
        dispatch(fetchPostById(+arrId[1]))
        dispatch(transporterById(+arrId[2]))
    }, [])

    function toControlPage (e, total) {
        e.preventDefault()
        const updatedWallet = transporterId.wallet + total
        const payload = {
            wallet: updatedWallet
        }
        console.log(payload)
        dispatch(patchWalletTransporter(+arrId[2], payload))

        const updatedWalletShipper = shipper.Shipper.wallet - total
        const payloadShipper = {
            wallet: updatedWalletShipper
        }
        console.log(payloadShipper)

        dispatch(updateWalletShipper(shipper.Shipper.id, payloadShipper))

        const payloadUpdatePost = {
            status: 'accepted'
        }


        dispatch(patchPostById(+arrId[1], payloadUpdatePost))


        history.push(`/controlPage/shipper_${shipper.Shipper.username}_${shipper.Shipper.id}_${shipper.Shipper.email}_${+arrId[2]}`)

    }


    return (
        <div>
            <Navbar/>
            <div className='row'>
                <div className='col-7'>
                    <div class="card panel-default plain" id="dash_0">
                        <div class="card-body p30">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="invoice-details mt25">
                                        <div class="well">
                                            <ul class="list-unstyled mb0">
                                                {/* <li><strong>Invoice</strong> #936988</li>
                                                <li><strong>Invoice Date:</strong> Monday, October 10th, 2015</li>
                                                <li><strong>Due Date:</strong> Thursday, December 1th, 2015</li> */}
                                                <li>
                                                    <strong>Status:</strong>
                                                    <span class="label label-danger">
                                                        { post[0] &&
                                                            <td class="text-center">{post[0].status}</td>
                                                        }
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="invoice-to mt25">
                                        <ul class="list-unstyled">
                                            <li><strong>Invoiced To</strong></li>
                                            {
                                                shipper.Shipper &&
                                                <li>{shipper.Shipper.username}</li>
                                            }

                                             {
                                                shipper.Shipper &&
                                                <li>{shipper.Shipper.email}</li>
                                            }


                                        </ul>
                                    </div>
                                    <div class="invoice-items">
                                        <div class="table-responsive" style={{overflow: 'hidden', outline: 'none', tabindex:"0"}}>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="per70 text-center">Description</th>
                                                        <th class="per25 text-center">Bid</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{shipper.product_name} | {shipper.from} - {shipper.to}</td>
                                                        { post[0] &&
                                                            <td class="text-center">Rp {post[0].price.toLocaleString(['ban', 'id'])}</td>
                                                        }

                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colspan="1" class="text-right">Total:</th>
                                                        { post[0] &&
                                                            <td class="text-center">Rp {post[0].price.toLocaleString(['ban', 'id'])}</td>
                                                        }
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <article className="card">
                        <div className="card-body p-5">

                            <ul className="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#nav-tab-card">
                                    <i className="fa fa-credit-card"></i> Credit Card</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                                    <i class="fas fa-wallet"></i>  Wallet</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                    <i className="fa fa-university"></i>  Bank Transfer</a></li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="nav-tab-card">
                                    <p className="alert alert-success">Some text success or error</p>
                                    <form role="form">
                                        <div className="form-group">
                                            <label for="username">Full name (on the card)</label>
                                            <input type="text" className="form-control" name="username" placeholder="" required=""/>
                                        </div>

                                        <div className="form-group">
                                            <label for="cardNumber">Card number</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="cardNumber" placeholder=""/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text text-muted">
                                                        <i className="fab fa-cc-visa"></i>   <i className="fab fa-cc-amex"></i>  
                                                        <i className="fab fa-cc-mastercard"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div className="form-group">
                                                    <label><span className="hidden-xs">Expiration</span> </label>
                                                    <div className="input-group">
                                                        <input type="number" className="form-control" placeholder="MM" name=""/>
                                                        <input type="number" className="form-control" placeholder="YY" name=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                                                    <input type="number" className="form-control" required=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
                                    </form>
                                </div>
                                <div className="tab-pane fade text-center justify-content-center align-items-center" id="nav-tab-paypal">
                                    <p>Wallet is easiest way to pay online</p>
                                    {
                                        shipper.Shipper &&
                                        <h3>Saldo: Rp. {shipper.Shipper.wallet.toLocaleString(['ban', 'id'])}</h3>
                                    }

                                    <p>
                                        <button onClick={(e) => toControlPage(e, post[0].price)} type="button" className="btn btn-primary"> <i class="fas fa-wallet"></i> Pay with Wallet </button>
                                    </p>
                                    <p><strong>Note:</strong> Your paid will be automatically received to the bidder. </p>
                                    </div>
                                <div className="tab-pane fade" id="nav-tab-bank">
                                    <p>Bank accaunt details</p>
                                    <dl className="param">
                                        <dt>BANK: </dt>
                                        <dd> THE WORLD BANK</dd>
                                    </dl>
                                    <dl className="param">
                                        <dt>Accaunt number: </dt>
                                        <dd> 12345678912345</dd>
                                    </dl>
                                    <dl className="param">
                                        <dt>IBAN: </dt>
                                        <dd> 123456789</dd>
                                    </dl>
                                    <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod