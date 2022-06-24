import React from 'react'
import imageOne from '../images/t1.png'
import imag from '../images/t2.jpg'
import ima from '../images/t3.jpg'
import b from '../images/t4.jpg'
import c from '../images/t5.jpg'
import d from '../images/t6.jpg'

function Telangana() {
    return (
  
        <div className="card p-3 pt-1">
                  <h1><center>Most Beautiful Places in Telangana</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imageOne} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Bhadrachalam</center></h4>
                        <p>Bhadrachalam is a key town of Pilgrimage importance located in the Khammam District of Telangana. The temple town of Bhadrachalam is situated on the banks of Godavari River</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid h-50  " alt="Responsive image"/>
                        <h4><center>Yadigirigutta</center></h4>
                        <p>Sri Lakshminarasimha Swamy Temple or Yadagirigutta is a popular Hindu Temple devoted to Lord Narasimha Swamy, an incarnation of Lord Vishnu.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Alampur</center></h4>
                        <p>Alampur is a sleepy town situated on the banks Tungabhadra River, in the state of Telangana. Alampur is considered as the western gateway of Srisailam.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={b} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Medak church</center></h4>
                        <p>Medak Cathedral is one of the most visited churches in South India, which was built by Charles Walker Fasnet of British Wesleyan Methodists and consecrated on 25 December 1924. It is the single largest diocese in Asia and the second-largest in the world after the Vatican located in Medak town.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Kaleshwaram</center></h4>
                        <p>Kaleshwaram is a town lying on the border of Telangana and Maharashtra. The town is popularly known for its ancient and famous Kaleshwara Mukteshwara Swamy Temple. </p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div> 
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Kolanupaka</center></h4>
                        <p>Kulpakji also Kolanupaka Temple is a 2,000 year-old Jain temple at the village of Kolanupaka in Aler City, Yadadri district, Telangana, India. The temple houses three idols: one each of Lord Rishabhanatha, Lord Neminatha, and Lord Mahavira.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Telangana;