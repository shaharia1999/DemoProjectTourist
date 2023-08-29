import React, {Component} from 'react';
// import img from "../../asset/images/img.svg"
import {Button, Card, Container} from "react-bootstrap";
import img from '../../asset/images/c.jpg'
import img2 from '../../asset/images/c0.png'
import img3 from '../../asset/images/c8.jpg'
import img4 from '../../asset/images/c2.jpg'
import img5 from '../../asset/images//c6.jpg'
import img6 from '../../asset/images/c4.webp'
import img7 from '../../asset/images/c5.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class TwentyFourHourDealPlaceholder extends Component {
    render() {
        // let isLoading=this.props.isLoading;
        return (
            // <div className={isLoading}>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title mt-4 text-center">24 Hours Deal</h5>
                    <h6 className="sectionSubTitle text-center mb-5">This offer is for a limited time, book an instant hotel now</h6>
                    <div className="row p-0">
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img6}/>
                                <div className="ph-col-12">
                                <Card.Body className='p-0 m-0 bodyCard'>
                                        <h4>Take your longest holiday yet</h4>
                                        <p>
                                        Browse properties offering long-term stays, many at reduced monthly rates.
                                        </p>
                                    <Button className='bg-white rounded-pill'><Link to='/hotel-search/dhaka' className='text-decoration-none text-white'>Explore</Link></Button>
                               
                                    </Card.Body>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
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
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
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
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
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
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
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
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={img7} alt=""/>
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
                        </div>
                    </div>
                </Container>
            // </div>
        );
    }
}

export default TwentyFourHourDealPlaceholder;