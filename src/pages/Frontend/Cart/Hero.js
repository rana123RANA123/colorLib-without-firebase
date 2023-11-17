import React from 'react'
import '../../../App.scss'
import img1 from '../../../assets/img/gallery/best_selling1.jpg'
import img2 from '../../../assets/img/gallery/best_selling4.jpg'
export default function Hero() {
    return (
        <>

            <div className="container">
                <div className="row mb-5">
                    <div className="col hero2">
                        <div style={{ marginTop: "140px" }}>
                            <h1 className='text-center text-light fw-bold align-items-center justify-content-center d-flex'>Cart</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h4>Product</h4>
                        <div className='d-flex mt-4'>
                            <img src={img1} alt="img1" style={{ height: "230px" }} />
                            <p className='ms-3 d-flex align-items-center'>Minimalistic shop for multipurpose use</p>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className='d-flex' style={{ justifyContent: "space-around" }}>
                            <h5>Price</h5>
                            <h5>Quantity</h5>
                            <h5>Total</h5>
                        </div>

                        <div className="col d-flex" style={{ justifyContent: "space-around", marginTop: "100px" }}>
                            <p>$360.00</p>
                            <p>1</p>
                            <p>$720.00</p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className='d-flex mt-4'>
                            <img src={img2} alt="img1" style={{ height: "230px" }} />
                            <p className='ms-3 d-flex align-items-center'>Minimalistic shop for multipurpose use</p>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="col d-flex" style={{ justifyContent: "space-around", marginTop: "100px" }}>
                            <p>$360.00</p>
                            <p>1</p>
                            <p>$720.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mt-4">
                    <div className="col-8">
                        <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft:"19px" ,paddingRight:"20px", padding: "13px" }}>Update Cart</button>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-danger' style={{ marginLeft: "15px", borderRadius: "25px", paddingLeft:"19px" ,paddingRight:"20px", padding: "13px" }}>Close Coupon</button>
                    </div>
                </div>
            </div>

        </>
    )
}
