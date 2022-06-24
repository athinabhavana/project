import React from'react'
import imageOne from'../images/madurai.jpg'
import imag from'../images/tamil2.jpg'
import ima from'../images/tamil4.jpg'
import b from'../images/tamil5.jpg'
import c from'../images/tamil6.jpg'
import d from'../images/tamil7.jpg'


function Tamil() {
    return (
        <div className="card p-3 pt-1">
             <h1><center>Most Beautiful Places in Tamilnadu</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imageOne} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Madurai</center></h4>
                        <p>ArulmiguMeenakshiSundareshwarar Temple is a historic Hindu temple located in Madurai.
                             It is dedicated to the goddess Meenakshi, a form of Parvati, and her consort, Sundareshwarar, a form of Shiva.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Rameshwaram</center></h4>
                        <p>Located in the centre of town, Ramanathaswamy Temple is a famous Hindu temple dedicated to the god Shiva. The temple is one of the 12 Jyotirlinga
                             shrines, where Shiva is worshipped in the form of a Jyotirlinga meaning "pillar of light".</p>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Tanjavur</center></h4>
                        <p>The temple has a massive colonnaded corridor and one of the largest Shiva lingas in India. It is also famed for the quality of its sculpture, as well as being the location that
                             commissioned the brass Nataraja Shiva as the lord of dance, in 11th century.</p>

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
                        <h4><center>Mahabalipuram</center></h4>
                        <p>Mahabalipuram is a place that is famous for its temples and monuments, especially the very famous Shore Temple. It consists of three temples built in one single complex, that was constructed way back in the 8th century.</p>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Chidambaram</center></h4>
                        <p>Located around 250 kilometres from Chennai, this small town is known as the ‘temple town’ of South India. Owing to its magnificent architecture, Chidambaram is one of the most prominent pilgrimage destinations in India.</p>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div> 
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid h-50" alt="Responsive image"/>
                        <h4><center>Kanyakumari</center></h4>
                        <p>Kumari Amman Temple i.e. Kanyakumari kaMandir has great religious significance. This temple in Kanyakumari was built to worship Devi Kanyakumari who is the reincarnation of goddess Parvati.</p>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tamil;