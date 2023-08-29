import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
// import { redirect } from "react-router-dom";
// import img from "../../asset/images/img.svg";
import img1 from '../../asset/images/h1.jpg'
import img2 from '../../asset/images/h2.jpg'
import img3 from '../../asset/images/h3.jpg'
import img4 from '../../asset/images/h4.webp'
import img5 from '../../asset/images//h5.jpg'
import img6 from '../../asset/images/h6.jpg'
import { Link } from 'react-router-dom';

class RecommendedHotelPlaceholder extends Component {
    constructor(props) {
        super(props);
        
        // You can access the history object through the props
        this.history = props.history;
      }
    
      navigateToAnotherPage = () => {
        // Use the history object to push a new route
        this.history.push('/another-route');
      }  
   
    render() {
        let isLoading=this.props.isLoading;
        
        return (
            <div className={isLoading}>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title mt-4 text-center">Recommended Hotel</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Porzotok, 1st ever complete online hotel reservation system in Bangladesh.</h6>
                    <Row className="p-0">
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6} alt=""/>
                                <div className="ph-col-12">
                                      <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                        <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
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
                                         <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
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
                                         <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
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
                                         <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
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
                                         <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img1} alt=""/>
                                <div className="ph-col-12">
                                      <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Holiday Inn Express</h4>
                                        <p>
                                        Some quick example text to build on the card .
                                        </p>
                                         <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RecommendedHotelPlaceholder;