import React from 'react'
import imageOne from '../images/m1.jpg'
import imag from '../images/m2.jpg'
import ima from '../images/m3.png'
import b from '../images/m4.png'
import c from '../images/m5.jpg'
import d from '../images/m6.jpg'

function Maha() {
    return (
        <div className="card p-3 pt-1">
             <h1><center>Most Beautiful Places in Maharashtra</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imageOne} class="h-50 img-fluid" alt="Responsive image"/>
                        <h4><center>Shiridi</center></h4>
                        <p>Traditionally, known as the site housing the holy temple of Lord Khandoba, an avatar of the Hindu God Shiva, Shirdi rose to fame and glory as a treasure trove of divine vibrations due to its strog association with the famous saint Shri Sai Baba.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-1">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imag} class="h-50 img-fluid" alt="Responsive image"/>
                        <h4><center>Nasik</center></h4>
                        <p>Nashik is well known for being one of the Hindu pilgrimage sites of the Kumbh Mela, which is held every 12 years. Nashik is located about 190 km north of state capital Mumbai. The city is called the "Wine Capital of India" as more than half of India's vineyards and wineries are located here.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-1">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={ima} class="h-50 img-fluid" alt="Responsive image"/>
                        <h4><center>Kolhapur</center></h4>
                        <p>Mahalakshmi Temple is an important Hindu temple dedicated to Goddess Lakshmi, who resides here as Mahalakshmi and is worshipped by locals as Ambabai. Goddess Mahalakshmi is the consort of Lord Vishnu.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-1">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={b} class="h-50" alt=""/>
                        <h4><center>Harihareshwar</center></h4>
                        <p>Harihareshwar is a village in Shrivardhan taluka of Raigad district in the Konkan region of Maharashtra. The place is famous for its clean and sandy beaches. It is most popularly known for Shiva and Kalbhairava temple. Due to the temple dedicated to Lord Shiva, this place is also known as Dakshin Kashi.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-1">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Trimbakeshwar</center></h4>
                        <p>Trimbakeshwar is a religious center having one of the twelve Jyotirlingas. The extraordinary feature of the Jyotirlinga located here is its three faces embodying Lord Brahma, Lord Vishnu, and Lord Rudra. Due to the excessive use of water, the linga has started to erode.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-1">Learn More</button>
                        </div> 
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Kopeshwar</center></h4>
                        <p>Kopeshwar Temple is at Khidrapur, Kolhapur district, Maharashtra. It is at the border of Maharashtra and Karnataka. It is also accessible from Sangli as well. It was built in the 12th century by Shilahara king Gandaraditya between 1109 and 1178 CE</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-1">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maha;