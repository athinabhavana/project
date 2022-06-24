import React from 'react'
import imageOne from '../images/d1.jpg'
import imag from '../images/d2.jpg'
import ima from '../images/up.jpg'
//import a from '../images/.jpg'
import b from '../images/d4.jpg'
import c from '../images/d5.jpg'
import d from '../images/d6.jpg'
import {Outlet,Link} from 'react-router-dom'
//import e from '../images/men8.jpg'


function Destination() {
    return (
        <div className="card p-3 pt-1">
            <div className="container">
                <Outlet />
            </div>
            <h1> <center>Visit Your Favourite Place</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-80 m-3 mx-auto shadow'>
                        <img src={imageOne} class="img-fluid h-75" alt="Responsive image"/>
                        <h4><center>Telangana</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2"><Link className="nav-link text-center text-light" to="Telangana">View More</Link></button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-80 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid h-75" alt="Responsive image"/>
                        <h4><center>Maharasthra</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2"><Link className="nav-link text-center text-light" to="Maha">View More</Link></button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-80 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid h-75" alt="Responsive image"/>
                        <h4><center>Uttarpradesh</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2"><Link className="nav-link text-center text-light" to="up">View More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-80 m-3 mx-auto shadow'>
                        <img src={b} class="img-fluid h-75" alt="Responsive image"/>
                        <h4><center>Tamilnadu</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2"><Link className="nav-link text-center text-light"to="tamil">View More</Link></button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-80 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid h-75" alt="Responsive image"/>
                        <h4><center>Jammu and Kashmir</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2"><Link className="nav-link text-center text-light"to="Jammu">View More</Link></button>
                        </div> 
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-80 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid h-75" alt="Responsive image"/>
                        <h4><center>Andhra pradesh</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2"><Link className="nav-link text-center text-light"to="andhra">View More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;