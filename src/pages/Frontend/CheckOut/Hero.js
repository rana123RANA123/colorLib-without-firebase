import React from 'react'
import '../../../App.scss'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>

            <div className="container">
                <div className="row mb-5">
                    <div className="col hero2 mb-5">
                        <div style={{ marginTop: "140px" }}>
                            <h1 className='text-center text-light fw-bold align-items-center justify-content-center d-flex'>Check Out</h1>
                        </div>
                    </div>
                </div>

                <div className="row mt-5" style={{ backgroundColor: "#edf2f4" }}>
                    <div className="col mt-3">
                        <p>Returning Customer? <Link to='/auth/login' className='text-danger'><u>Click here to login</u></Link></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className='mt-2'>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-3">
                        <input type="text" placeholder='Username or Email' className='form-control border-1' style={{ borderRadius: "0px" }} />
                    </div>
                    <div className="col-3">
                        <input type="password" placeholder='Password' className='form-control border-1' style={{ borderRadius: "0px" }} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col d-flex align-items-center gap-3">
                        <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "35px", paddingRight: "35px", padding: "13px" }}>Login</button>
                        <div class="form-check mt-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "5px" }} />
                            <label class="form-check-label" for="flexCheckDefault">
                                <p className='ms-2' style={{ fontSize: "18px" }}>Create an account?</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mt-3" style={{ backgroundColor: "#edf2f4" }}>
                    <div className="col mt-3">
                        <p>Have a coupon? <Link to='/auth/login' className='text-danger'><u>Click here to enter your code</u></Link></p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-6">
                        <input type="text" placeholder='Enter coupon code' className='form-control border-1' style={{ borderRadius: "0px" }} />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "35px", paddingRight: "35px", padding: "13px" }}>Apply Coupon</button>
                    </div>
                </div>
            </div>


            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-8">
                        <h3>Billing Details</h3>

                        <div className="row mt-4">
                            <div className="col-6">
                                <input type="text" placeholder='First Name' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder='Last Name' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div className="col-12 mt-4">
                                <input type="text" placeholder='Company Name' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div className="col-6 mt-4">
                                <input type="number" placeholder='Phone Number' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>
                            <div className="col-6 mt-4">
                                <input type="text" placeholder='Email Address' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div className="col-12 mt-4">
                                <select class="form-select form-control" aria-label="Default select example">
                                    <option selected disabled>Country</option>
                                    <option value="1">Pakistan</option>
                                    <option value="2">India</option>
                                    <option value="3">England</option>
                                </select>
                            </div>

                            <div className="col-12 mt-4">
                                <input type="text" placeholder='Address line 01' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div className="col-12 mt-4">
                                <input type="text" placeholder='Address line 02' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div className="col-12 mt-4">
                                <input type="text" placeholder='Town/City' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div className="col-12 mt-4">
                                <select class="form-select form-control" aria-label="Default select example">
                                    <option selected disabled>District</option>
                                    <option value="1">Faisalabad</option>
                                    <option value="2">Karachi</option>
                                    <option value="3">Lahore</option>
                                </select>
                            </div>

                            <div className="col-12 mt-4">
                                <input type="text" placeholder='Postcode/ZIP' className='form-control border-1' style={{ borderRadius: "0px" }} />
                            </div>

                            <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "5px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p className='ms-2' style={{ fontSize: "18px" }}>Create an account?</p>
                                </label>
                            </div>

                            <h3>Shipping Details</h3>

                            <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "5px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p className='ms-2' style={{ fontSize: "18px" }}>Ship to a different address?</p>
                                </label>
                            </div>

                            <div className='col-12'>
                                <textarea name="orderNote" id="" placeholder='Order Note' cols="114" style={{ border: "1px solid grey" }} rows="6"></textarea>
                            </div>
                        </div>
                    </div>


                    <div className="col-4" style={{height:"98%", backgroundColor:"#edf2f4"}}>
                        <div className='p-3'>
                            <h3 className='fw-bold'>Your Order</h3>
                            <hr />

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p>Product</p>
                                <p>Total</p>
                            </div>

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p>Fresh Blackberry</p>
                                <p>$720.00</p>
                            </div>

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p>Fresh Tomatoes</p>
                                <p>$720.00</p>
                            </div>

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p>Fresh Brocoli</p>
                                <p>$720.00</p>
                            </div>

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p className='fw-bold'>SUBTOTAL</p>
                                <p>$2160.00</p>
                            </div>

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p className='fw-bold'>SHIPPING</p>
                                <p>Flat Rate: $50.00</p>
                            </div>

                            <div className='d-flex' style={{ justifyContent: "space-between", fontSize: "18px" }}>
                                <p className='fw-bold'>TOTAL</p>
                                <p>$2210.00</p>
                            </div>

                            <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "19px", height: "19px", borderRadius: "25px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p className='ms-2' style={{ fontSize: "16px" }}>CHECK PAYMENTS</p>
                                </label>
                            </div>

                            <div className='p-2 bg-light' >
                                <p className='ps-3 pt-2'>Please send a check to Store Name, Store Street, <br /> Store Town, Store State / County, Store Postcode.</p>
                            </div>

                            <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "19px", height: "19px", borderRadius: "25px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p className='ms-2' style={{ fontSize: "16px" }}>PAYPAL</p>
                                </label>
                            </div>

                            <div className='p-2 bg-light'>
                                <p className='ps-3 pt-2'>Please send a check to Store Name, Store Street, <br /> Store Town, Store State / County, Store Postcode.</p>
                            </div>


                            <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "16px", height: "16px", borderRadius: "5px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p className='ms-2' style={{ fontSize: "13px" }}>I’ve read and accept the <span className='text-danger'> terms & conditions*</span></p>
                                </label>
                            </div>

                            <div>
                                <button className='btn btn-danger w-100' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft: "35px", paddingRight: "35px", padding: "8px" }}>Proceed to Paypal</button> 
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
