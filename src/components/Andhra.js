import React from 'react'
import imageOne from '../images/a1.jpg'
import imag from '../images/a2.jpg'
import ima from '../images/a3.jpg'
import b from '../images/a4.jpg'
import c from '../images/a5.jpg'
import d from '../images/a6.jpg'

function Andhra() {
    return (
        <div className="card p-3 pt-1">
             <h1><center>Most Beautiful Places in Andhra Pradesh</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={imageOne} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Trupathi</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Indrakeeladri</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Vontimitta</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={b} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Amaravathi Stupa</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>St.Joseph Catholic Church</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div> 
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>RCM Church</center></h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Andhra;