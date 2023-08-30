import React, {Component} from 'react';
import img1 from '../../asset/images/h1.jpg'
import img2 from '../../asset/images/h2.jpg'
import img3 from '../../asset/images/h3.jpg'
import img4 from '../../asset/images/h4.webp'
import img5 from '../../asset/images//h5.jpg'
import img6 from '../../asset/images/h6.jpg'
import {ImLocation} from "react-icons/im";
import {AiFillEye} from "react-icons/ai";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
class HotelDetailsPlaceholder extends Component {
   
    render() {
        // let isLoading=this.props.isLoading;
        return (
            // <div className={isLoading}>
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
                                                    <h1>Murray Hill East Suites</h1>
                                             
                                                {/* <div className="ph-picture"/> */}
                                                
                                                <p className='mt-4'> <ImLocation className='text-danger fs-4 me-4 '></ImLocation> 149 East 39th Street, Murray Hill, New York, NY 10016,
                                                     United States – Excellent location - show map – Metro access</p>
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
                                  
                                    <div className='col '>
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
                            <div className="container">
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
                    {/* <Modal size="lg" show={this.state.FaqModal1} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose1}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">Are you Sure Confirm a Room? </p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS ONLY FOR  VISIONAL WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={this.state.FaqModal2} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose2}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">What is Porzotok?</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose2}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={this.state.FaqModal3} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose3}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion"> What is the last time of application?</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose3}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal> */}

                </div>

             </div>
        );
    }
}

export default HotelDetailsPlaceholder;