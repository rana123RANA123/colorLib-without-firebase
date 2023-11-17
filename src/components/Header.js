import React from 'react'
import '../App.scss'
import logo1 from '../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined} from '@ant-design/icons'

export default function Header() {
    return (
        <>

            <div className="container-fluid" style={{paddingBottom:"22px", backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-8 offset-1 mt-4 d-flex">
                        <img src={logo1} alt="" />
                        <div className='ms-4'>
                            <input type="text" className='' name="Search" placeholder="Search book by author or publisher" style={{ width: "400px", padding: "12px",border:"1px solid black", borderRadius: "25px" }} />
                        </div>
                    </div>


                    <div className="col-3 d-flex mt-4 align-items-center">
                        <div>
                            <Link to='/faq' className=' ' style={{textDecoration:"none",fontSize:"17px", color:"black"}}>FAQ</Link>
                        </div>
                        {/* <div>
                            <Link to='/trackOrder' className='ms-3' style={{textDecoration:"none",fontSize:"17px", color:"black"}}>Track Order</Link>
                        </div> */}
                        <div>
                        <ShoppingCartOutlined className='ms-4' style={{fontSize:"40px"}} />
                        </div>
                        <div>
                            <Link to='/auth/login' className='bg-danger btn text-light' style={{width:'130px', padding:"10px",paddingTop:"13px" ,paddingLeft:"30px", paddingRight:"30px" , paddingBottom:"13px" ,textDecoration:"none", border:"0", marginLeft:"40px", borderRadius:"25px"}}>Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
