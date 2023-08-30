import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
// import img3 from "../../asset/images/img3.svg";
import img2 from '../../asset/images/d.jpg'
import img3 from '../../asset/images/d1.webp'
import img4 from '../../asset/images/d3.jpg'
import img5 from '../../asset/images/d4.jpg'
import img6 from '../../asset/images/d5.jpg'
import img7 from '../../asset/images/d6.jpg'
import { MdLocationOn} from 'react-icons/md';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class HotelPerCityPlaceholder extends Component {
    render() {
        // let isLoading = this.props.isLoading;
        return (
            // <div className={isLoading}>
                <Container fluid={true} className="p-5">
                    <Row className="mt-5">
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img2} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Dhaka</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img7} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Chattogram</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img5} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>	Sylhet</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Rajshahi</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img4} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Mymensingh</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Cumilla</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img3} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Barisal</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Dhaka</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img2} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Dhaka</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img7} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Dhaka</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img2} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Dhaka</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className="mt-2">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img7} alt=""/>
                                <div className="ph-col-12">
                                    <div className="bodyCard ">
                                        <h3>Dhaka</h3>
                                        <p><MdLocationOn  className='text-danger  mr-2 fs-4'></MdLocationOn>149 East 39th Street</p>
                                        <Link to='/roomDetails/:room_id' className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Read More</Button></Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
        //     </div>
        );
    }
}

export default HotelPerCityPlaceholder;