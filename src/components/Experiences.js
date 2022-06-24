import React from 'react'
import imageOne from '../images/w1.jpg'
import imag from '../images/w2.jpg'
import ima from '../images/w3.jpg'
import a from '../images/w4.jpg'
import b from '../images/w5.jpg'
import c from '../images/w6.jpg'
import d from '../images/w7.jpg'
import e from '../images/w8.jpg'

function Experiences() {
    return (

        <div className="card p-3 pt-1">
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100'>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={imageOne} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={imag} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={ima} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={a} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100'>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={b} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={c} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div> 
                </div>
            </div>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={d} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
            <div className='col p-1'>
                <div className='card card-body w-75 m-3 mx-auto shadow'>
                    <img src={e} alt=''/>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mt-2">View More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experiences;