import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import cardPhotoPlaceholder from "../../asset/images/cardPhotoPlaceholder.svg";
class MostPopularHotelPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container fluid={true} className="bg-light p-5">
                    <h5 className="section-title mt-4 text-center">Most Popular Hotel</h5>
                    <h6 className="sectionSubTitle text-center mb-5">Our dream is to make Cyber heroes. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.</h6>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={6} xs={6}>
                            <div className="TwentyFourHoursCardPH ph-item h-100 w-100">
                                <img className="w-100" src={cardPhotoPlaceholder} alt=""/>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MostPopularHotelPlaceholder;