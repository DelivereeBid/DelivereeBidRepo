import React from 'react'
import {Navbar} from '../../components'

function PaymentMethod (props) {

    return (
        <div>
            <Navbar/>
            <div className='row'>
                <div className='col-7'>
                    <div class="card panel-default plain" id="dash_0">
                        <div class="card-body p30">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="invoice-logo"><img width="100" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Invoice logo"/></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="invoice-from">
                                        <ul class="list-unstyled text-right">
                                            <li>Dash LLC</li>
                                            <li>2500 Ridgepoint Dr, Suite 105-C</li>
                                            <li>Austin TX 78754</li>
                                            <li>VAT Number EU826113958</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="invoice-details mt25">
                                        <div class="well">
                                            <ul class="list-unstyled mb0">
                                                <li><strong>Invoice</strong> #936988</li>
                                                <li><strong>Invoice Date:</strong> Monday, October 10th, 2015</li>
                                                <li><strong>Due Date:</strong> Thursday, December 1th, 2015</li>
                                                <li><strong>Status:</strong> <span class="label label-danger">UNPAID</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="invoice-to mt25">
                                        <ul class="list-unstyled">
                                            <li><strong>Invoiced To</strong></li>
                                            <li>Jakob Smith</li>
                                            <li>Roupark 37</li>
                                            <li>New York, NY, 2014</li>
                                            <li>USA</li>
                                        </ul>
                                    </div>
                                    <div class="invoice-items">
                                        <div class="table-responsive" style={{overflow: 'hidden', outline: 'none', tabindex:"0"}}>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="per70 text-center">Description</th>
                                                        <th class="per5 text-center">Qty</th>
                                                        <th class="per25 text-center">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1024MB Cloud 2.0 Server - elisium.dynamic.com (12/04/2014 - 01/03/2015)</td>
                                                        <td class="text-center">1</td>
                                                        <td class="text-center">$25.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo design</td>
                                                        <td class="text-center">1</td>
                                                        <td class="text-center">$200.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Backup - 1024MB Cloud 2.0 Server - elisium.dynamic.com</td>
                                                        <td class="text-center">12</td>
                                                        <td class="text-center">$12.00 USD</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colspan="2" class="text-right">Sub Total:</th>
                                                        <th class="text-center">$237.00 USD</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2" class="text-right">20% VAT:</th>
                                                        <th class="text-center">$47.40 USD</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2" class="text-right">Credit:</th>
                                                        <th class="text-center">$00.00 USD</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2" class="text-right">Total:</th>
                                                        <th class="text-center">$284.4.40 USD</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="invoice-footer mt25">
                                        <p class="text-center">Generated on Monday, October 08th, 2015 <a href="#" class="btn btn-default ml15"><i class="fa fa-print mr5"></i> Print</a></p>
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
                                    <i className="fab fa-paypal"></i>  Paypal</a></li>
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
                                <div className="tab-pane fade" id="nav-tab-paypal">
                                    <p>Paypal is easiest way to pay online</p>
                                    <p>
                                        <button type="button" className="btn btn-primary"> <i className="fab fa-paypal"></i> Log in my Paypal </button>
                                    </p>
                                    <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. </p>
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