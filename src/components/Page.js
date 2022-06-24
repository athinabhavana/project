import React from 'react'
import imag from '../images/gokarna.jpg'
import ima from '../images/madurai.jpg'
import a from '../images/varanasi.jpg'
import b from '../images/temple.jpg'
import c from '../images/main.jpeg'
import d from '../images/bhadrinath.jpg'
import e from '../images/church.jpg'
import f from '../images/main1.jpg'
import g from '../images/main2.jpg'

function Page() {
    return (

        <div className="card p-3 pt-1">
            <div className="card mx-auto mt-5 p-2 bg-light shadow p-2 ">
                <div className="row text-center">
                    <h1>"One’s destination is never a place, but a new way of seeing things."</h1>
                    <p>India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve</p>
                    <img src="c" alt=""/>

                </div>
            <div className="row text-center"> 
                <h1>Must visit Destinations </h1>
                <p>From historical cities to natural splendours, come see the best of India</p>
            </div>
            <div className='row  w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-75 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid h-75" alt="Responsive image"/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-75 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid h-75" alt="Responsive image"/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-75 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid h-75" alt="Responsive image"/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center"> 
                <h1>Explore Before You Visit</h1>
                <p>Dive deeper into India's rich culture and heritage</p>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-1 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-75m-3 mx-auto shadow'>
                        <img src={a} class="img-fluid h-75" alt="Responsive image"/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-75 m-3 mx-auto shadow'>
                        <img src={e} class="img-fluid h-75" alt="Responsive image"/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-75 m-3 mx-auto shadow'>
                        <img src={b} class="img-fluid h-75" alt="Responsive image"/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Page;