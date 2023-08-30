import React, {Component} from 'react';
import { ImLocation } from 'react-icons/im';
import img2 from '../../asset/images/c0.png'
import img3 from '../../asset/images/c8.jpg'
import img4 from '../../asset/images/c2.jpg'
import img5 from '../../asset/images//c6.jpg'
import img6 from '../../asset/images/c4.webp'
import img7 from '../../asset/images/c5.jpg'
import {Link, Redirect} from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';

class RoomDetailsPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <div className="container-fluid bg-light">
                    {/* <div className="row p-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row shadow-sm bg-white">

                                <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="ph-picture PreviewImgLarge"/>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                    <div className="ph-item p-0">
                                        <div className="ph-col-12 p-0">
                                            <div className="ph-row">
                                                <div className="ph-col-8 big"/>
                                                <div className="ph-col-6"/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-100"/>
                                    <div className="ph-item p-0">
                                        <div className="ph-col-12 p-0">
                                            <div className="ph-row">
                                                <div className="ph-col-6 big"/>
                                                <div className="ph-col-8"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                        <div className="ph-item p-0">
                                            <div className="ph-col-12 p-0">
                                                <div className="ph-row p-0">
                                                    <div className="ph-col-6 big"/>
                                                </div>
                                                <div className="ph-picture"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white">
                            <div className="container">
                                <div className="row shadow-sm p-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="ph-item p-0">
                                            <div className="ph-col-12 p-0">
                                                <div className="ph-row">
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                </div>
                                                <div className="ph-row mt-4">
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left bg-white p-5">
                                <div className="ph-picture PreviewImgLarge"/>
                        </div>
                    </div> */}
                       <div className="container-fluid bg-light">
                    <div className="row p-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 bg-primary">
                            <div className="row shadow-sm bg-white">

                                <div className="p-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                  <img src={img6} className='w-100 h-100'></img>
                                </div>

                                <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pl-4">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                        <div className="ph-item p-0">
                                            <div className="ph-col-12 p-0">
                                                <div className="ph-row p-0 bodyCard">
                                                    {/* <div className="ph-col-6 big"/> */}
                                                    <h1>Dhaka</h1>
                                             
                                                {/* <div className="ph-picture"/> */}
                                                
                                                <p className='mt-4'> <ImLocation className='text-danger fs-4 me-4 '></ImLocation>Dhaka (/ˈdɑːkə/ DAH-kə or /ˈdækə/ DAK-ə; Bengali: ঢাকা, romanized: Ḍhākā, IPA: [ˈɖʱaka]), formerly known as Dacca,[15] is the capital and largest city of Bangladesh. It is the ninth-largest and seventh-most densely populated city in the world. Dhaka is a megacity, and has a population of 10.2 million residents as of 2022, and a population of over 22.4 million residents in Greater Dhaka.[16][17][18] It is widely considered to be the most densely populated built-up urban area in the world.[19][20] Dhaka is the most important cultural, economic, and scientific hub of Eastern South Asia, as well as a major Muslim-majority city. Dhaka ranks third in South Asia and 39th in the world in terms of GDP. Lying on the Ganges Delta, it is bounded by the Buriganga, Turag, Dhaleshwari and Shitalakshya rivers. Dhaka is also the largest Bengali-speaking city in the world.</p>
                                                     </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ph-item p-0">
                                        <div className="ph-col-12 p-0">
                                            <div className=" bg-primary h-100">
                                                {/* <div className="ph-col-8 "/> */}
                                         
                                                <div className='lg:w-50 map'>
                                                                        <iframe className='border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4921053577773!2d90.42471487599451!3d23.76548448819581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1685432813512!5m2!1sen!2sbd" title='map' height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                                        </div>
                                                {/* <div className="ph-col-6"/> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <hr className="w-100"/>
                                    <div className="ph-item p-0">
                                        <div className="ph-col-12 p-0">
                                            <div className="ph-row">
                                                <div className="ph-col-6 big"/>
                                                <div className="ph-col-8"/>
                                            </div>
                                        </div>
                                    </div> */}
                                 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white">
                            <div className="container">
                                <div className='row row-cols-2 row-cols-lg-4 l-g-2 g-lg-3'>
                                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="ph-item p-0">
                                            <div className="ph-col-12 p-0">
                                                <div className="ph-row">
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                </div>
                                                <div className="ph-row mt-4">
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                    <div className="ph-col-12"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                  
                                    {/* <div className='col '>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Apartments</div> 
                                    </div>
                                    <div className='col '>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Kitchen</div> 
                                    </div>
                                    <div className='col '>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Free WiFi</div> 
                                    </div>
                                    <div className='col '>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Bath</div> 
                                    </div>
                                    <div className='col mt-3'>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Air conditioning</div> 
                                    </div>
                                    <div className='col mt-3'>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye>Non-smoking rooms</div> 
                                    </div>
                                    <div className='col mt-3'>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye>Safety deposit box</div> 
                                    </div>
                                    <div className='col mt-3 '>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye>Luggage storage</div> 
                                    </div>
                                    <div className='col mt-3'>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Safety deposit box</div> 
                                    </div>
                                    <div className='col mt-3'>
                                        <div className='fs-3 border border-dark d-flex justify-content-center align-items-center py-2'><AiFillEye  className='text-danger  mr-2 fs-4'></AiFillEye> Heating</div> 
                                    </div>
                                
                  */}
                                
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left bg-white">
                            <div className="p-5">
                                <div className="ph-item p-0">
                                    <div className="ph-col-12 p-0">
                                        <div className="ph-row">
                                            <div className="ph-col-4 big"/>
                                        </div>
                                        <div className="ph-row mt-4">
                                            <div className="ph-col-4 big"/>
                                            <div className="ph-col-12"/>
                                            <div className="ph-col-8"/>
                                        </div>
                                        <div className="ph-row mt-3">
                                            <div className="ph-col-4 big"/>
                                            <div className="ph-col-12"/>
                                            <div className="ph-col-8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white">
                            {/* <div className="container">
                                <div className='row bg-danger '>
                                <div class="card text-center w-100">
                                        <div class="card-header font-weight-bold">
                                        Special title treatment
                                        </div>
                                        <div class="card-body bodyCard">
                                            <h5 class="card-title"></h5>
                                            <p class="card-text">Per Day <span className='font-weight-bold'>$50</span></p>
                                            <Link to='/room-booking'> <button onClick={this.handleOpen1} class="btn btn-primary px-4">Book Now</button></Link>
                                           
                                        </div>
                                        <div class="card-footer text-muted">
                                            2 days ago
                                        </div>
                                        </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12 float-left bg-white">
                            <div className="p-5">
                                <div className="ph-item p-0">
                                    <div className="ph-col-12 p-0">
                                        <div className="ph-row">
                                            <div className="ph-col-4 big"/>
                                        </div>
                                        <div className="ph-row mt-4">
                                            <div className="ph-col-4 big"/>
                                            <div className="ph-col-12"/>
                                            <div className="ph-col-8"/>
                                        </div>
                                        <div className="ph-row mt-3">
                                            <div className="ph-col-4 big"/>
                                            <div className="ph-col-12"/>
                                            <div className="ph-col-8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                

                </div>

             </div>
                </div>

            </div>
        );
    }
}

export default RoomDetailsPlaceholder;