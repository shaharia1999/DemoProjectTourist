import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
// import img from "../../asset/images/img.svg";
import img2 from '../../asset/images/d.jpg'
import img3 from '../../asset/images/d1.webp'
import img4 from '../../asset/images/d3.jpg'
import img5 from '../../asset/images/d4.jpg'
import img6 from '../../asset/images/d5.jpg'
import img7 from '../../asset/images/d6.jpg'
import {Link, Redirect} from "react-router-dom";
class PopularCityPlaceholder extends Component {
    render() {
        // let isLoading=this.props.isLoading;
        return (
            // <div className={isLoading}>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title mt-4 text-center">Popular City</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Find your popular city around the bangladesh</h6>
                    <Row className="p-0">
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="PopularCityCardPH ph-item h-100 w-100">
                            <Link to='/hotel-per-city/:city_id/:city_name'> <img className="w-100 h-100" src={img6} alt=""/></Link>
                               {/* <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>*/}
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="PopularCityCardPH ph-item h-100 w-100">
                            <Link to='/hotel-per-city/:city_id/:city_name'> <img className="w-100 h-100" src={img2} alt=""/></Link>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="PopularCityCardPH ph-item h-100 w-100">
                                <Link to='/hotel-per-city/:city_id/:city_name'> <img className="w-100 h-100" src={img4} alt=""/></Link>
                               
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="PopularCityCardPH ph-item h-100 w-100">
                           <Link to='/hotel-per-city/:city_id/:city_name'> <img className="w-100 h-100" src={img5} alt=""/></Link>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="PopularCityCardPH ph-item h-100 w-100">
                       <Link to='/hotel-per-city/:city_id/:city_name'> <img className="w-100 h-100" src={img6} alt=""/></Link>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="PopularCityCardPH ph-item h-100 w-100">
                                 <Link to='/hotel-per-city/:city_id/:city_name'> <img className="w-100 h-100" src={img7} alt=""/></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            // </div>
        );
    }
}

export default PopularCityPlaceholder;