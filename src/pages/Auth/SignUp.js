import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <>

            <div className="container mt-5 mb-5 boxShadow" style={{ backgroundColor: "white", height: "780px", width: "700px" }}>
                <div className="row">
                    <div className="col">
                        <h1 className='text-center mt-5'>Sign Up</h1>
                        <p className='mt-4 text-center'>Create your account to get full access</p>
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col px-5 py-3">
                        <label className='fw-bold mb-3'>Full Name</label><br />
                        <input type="text" className='form-control w-100 border-1' placeholder='Enter full name' style={{ borderRadius: "0px", height: "50px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col px-5 py-2">
                        <label className='fw-bold mb-3'>Email Address</label><br />
                        <input type="password" className='form-control w-100 border-1' placeholder='Enter email address' style={{ borderRadius: "0px", height: "50px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col px-5 py-2">
                        <label className='fw-bold mb-3'>Password</label><br />
                        <input type="password" className='form-control w-100 border-1' placeholder='Enter Password' style={{ borderRadius: "0px", height: "50px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col px-5 py-2">
                        <label className='fw-bold mb-3'>Confirm Password</label><br />
                        <input type="password" className='form-control w-100 border-1' placeholder='Confirm Password' style={{ borderRadius: "0px", height: "50px" }} />
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-9 px-5 d-flex align-items-center">
                        <p>Don’t have an account? <Link to='/auth/login' style={{color:"red", textDecoration:"none"}}>Login</Link> here</p>
                    </div>


                    <div className="col-3">
                        <button className='btn btn-danger' style={{borderRadius:"0px",height:"60px",width:"110px"}}>Sign Up</button>
                    </div>
                </div>
            </div>

        </>
  )
}
