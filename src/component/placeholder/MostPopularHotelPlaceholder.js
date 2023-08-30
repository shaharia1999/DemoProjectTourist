import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

import img1 from '../../asset/images/h1.jpg'
import img2 from '../../asset/images/h2.jpg'
import img3 from '../../asset/images/h3.jpg'
import img4 from '../../asset/images/h4.webp'
import img5 from '../../asset/images//h5.jpg'
import img6 from '../../asset/images/h6.jpg'
import { Button } from 'react-rainbow-components';
import { Link } from 'react-router-dom';


class MostPopularHotelPlaceholder extends Component {
    render() {
        // let isLoading=this.props.isLoading;
        return (
            // <div className={isLoading}>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title mt-4 text-center">Most Popular Hotel</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Find your best hotel from our Most Popular Hotel</h6>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100 "  src={img1} alt=""/>
                                <div className="ph-col-12">
                                    <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                        <Link to="/all-most-popular-hotels" className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Explore </Button></Link>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img2} alt=""/>
                                <div className="ph-col-12">
                                     <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                  <Link to="/all-most-popular-hotels" className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Explore </Button></Link>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img3} alt=""/>
                                <div className="ph-col-12">
                                     <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                  <Link to="/all-most-popular-hotels" className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Explore </Button></Link>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img4} alt=""/>
                                <div className="ph-col-12">
                                     <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                               
                                 <Link to="/all-most-popular-hotels" className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Explore </Button></Link>

                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img5} alt=""/>
                                <div className="ph-col-12">
                                     <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                  <Link to="/all-most-popular-hotels" className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Explore </Button></Link>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6} alt=""/>
                                <div className="ph-col-12">
                                     <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                  <Link to="/all-most-popular-hotels" className='text-decoration-none text-white'><Button className='bg-white rounded-pill'>Explore </Button></Link>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            // </div>
        );
    }
}

export default MostPopularHotelPlaceholder;