import React from 'react'
import imageOne from '../images/u1.jpg'
import imag from '../images/u2.jpg'
import ima from '../images/u3.jpg'
import b from '../images/u4.jpg'
import c from '../images/u5.jpg'
import d from '../images/u6.jpg'
import {Outlet,Link} from 'react-router-dom'

function Up() {
    return (
        <div className="card p-3 pt-1">
             <h1><center>Most Beautiful Places in Uttarpradesh</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imageOne} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Varanasi</center></h4>
                        <p>Kashi Vishwanath Temple is one of the most famous Hindu temples and is dedicated to Lord Shiva. This is one of the most worshiped Shiva temple in Hinduism and has been mentioned in the Puranas including the Kashi Khanda (section) of Skanda Purana</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Mathura</center></h4>
                        <p>Mathura is one of the most famous pilgrimage centers in India and marks the birthplace of the ancient Hindu deity, Lord Krishna. The town is one of the oldest in India and extremely popular for its ancient culture and tradition. </p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Sarnath</center></h4>
                        <p>Sarnath is a small village in Uttar Pradesh, situated about 13 km north-east of the holy city of Varanasi. Formerly known as Isipatana, it is famous as the site where Gautama Buddha first taught the Dharma, or where Buddha preached his first sermon.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={b} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Shravasti</center></h4>
                        <p>The most popular tourist attraction in this ancient city is Miracle Stupa, where Lord Buddha is said to have spent his time after attaining enlightenment. His sermons and teachings made Sravasti an important centre for Buddhist learnings.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Ayodhya</center></h4>
                        <p>Ayodhya, also known as Saket, is an ancient city of India, is the birthplace of Rama and setting of the great epic Ramayana. Ayodhya used to be the capital of the ancient Kosala Kingdom.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div> 
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Hastinapur</center></h4>
                        <p>Hastinapur is an ancient town which was the centre to the glorious tales of the epic Mahabharata. Situated on the banks of Ganga near Meerut in UP, Hastinapur is also the birth place of three Jain Teerthankara, and it has become an important centre of pilgrimage for the Jains.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Up;