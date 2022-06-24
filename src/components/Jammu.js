import React from'react'
import imageOne from'../images/jammu1.jpg'
import imag from'../images/jammu2.jpg'
import ima from'../images/jammu3.jpg'
import b from'../images/jammu4.jpg'
import c from'../images/jammu5.jpg'
import d from'../images/jammu6.jpg'

function Jammu() {
    return (
        <div className="card p-3 pt-1">
             <h1><center>Most Beautiful Places in Jammu and Kashmir</center></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={imageOne} class="img-fluid" alt="Responsive image"/>
                        <h4><center>Vaishno Devi</center></h4>
                        <p>The Vaishno Devi Temple is an important Hindu temple dedicated to Vaishno Devi located in Katra at the Trikuta Mountains which 
                            is one of the 108 Shakti Peethas dedicated to Durga, who is worshipped as Vaishno Devi. </p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={imag} class="img-fluid"alt="Responsive image"/>
                        <h4><center>Amarnath Cave</center></h4>
                        <p>One of the most sacred Hindu pilgrimages, Amarnath is worldwide famous for the natural formation of Shiva Linga from snow which is opened only in the months of Shravan i.e. July and August </p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={ima} class="img-fluid"alt="Responsive image"/>
                        <h4><center>Jama Masjid-Srinagar</center></h4>
                        <p>Located in Nowhatta also called as Downtown, Jama Masjid is the biggest mosque in Kashmir Valley. The mosque's prime location,impressive architecture, large size, as well as historical and religious importance makes it quite a popular place to see in Srinagar.</p>
                        <div className="text-center">
                            <button type="button"className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 w-100'>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={b}class="img-fluid"alt="Responsive image"/>
                        <h4><center>Hazratbal Shrine</center></h4>
                        <p> The Hazratbal Shrine (Kashmiri: درگاهحَضْرَتبل), popularly called Dargah Sharif ("the Holy Shrine"), is a Muslim shrine located in Hazratbal.is considered to be Kashmir's holiest Muslim shrine. </p>
                        <div className="text-center">
                            <button type="button"className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={c} class="img-fluid"alt="Responsive image"/>
                        <h4><center>Gurudwara Mattan</center></h4>
                        <p>Mattan was site famous for the ruins of temples.</p>
                        <div className="text-center">
                            <button type="button"className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-75 h-100 m-3 mx-auto shadow'>
                        <img src={d} class="img-fluid"alt="Responsive image"/>
                        <h4><center>Chatthi Padshashi Gurudwara - Sringar</center></h4>
                        <p>Situated right out the Hari Parbat's southern gate in Srinagar, Chatti Padshahi Gurudwara is the most important and probably the largest Sikh gurudwara in all of Kashmir valley. 
                            The shrine has a sanctum sanctorum in middle of a large rectangular hall.</p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mt-2">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jammu;
