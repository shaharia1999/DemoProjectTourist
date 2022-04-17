import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Map from "../../../asset/images/map.svg";
import Award from "../../../asset/images/award.svg";
import Gift from "../../../asset/images/gift.svg";

class WhyChoose extends Component {
    render() {
        return (
            <Fragment>
                <Container className="justify-content-center whyChooseTop">
                    <h5 className="section-title text-center">Why Choose</h5>
                    <h6 className="sectionSubTitle text-center">One-stop solution for hotel booking service</h6>
                    <Row className="pt-5">
                        <Col className="" xl={4} lg={4} md={4} sm={6} xs={6}>
                            <div className="m-2 p-3">
                                <img className="choose-img" src={Gift} alt=""/>
                                <h6 className="text-center whyChoose-title mt-3">Amazing Deal</h6>
                                <h6 className="text-center whyChoose-des">From thousands of hotels you can pick your favorite hotels, restaurant with such bunch of amazing deals like '24hour's Deals, crashed coupon, Gift voucher.'</h6>
                            </div>
                        </Col>

                        <Col className="" xl={4} lg={4} md={4} sm={6} xs={6}>
                            <div className="m-2 p-3">
                                <img className="choose-img" src={Award} alt=""/>
                                <h6 className="text-center whyChoose-title mt-3">Award-Winning Service</h6>
                                <h6 className="text-center whyChoose-des">Travel worry-free knowing that we're here if you need us, 24 hours a day.</h6>
                            </div>
                        </Col>

                        <Col className="" xl={4} lg={4} md={4} sm={6} xs={6}>
                            <div className="m-2 p-3">
                                <img className="choose-img" src={Map} alt=""/>
                                <h6 className="text-center whyChoose-title mt-3">One Stop Tour solution</h6>
                                <h6 className="text-center whyChoose-des">We are the first startup which has complete hotel booking service in Bangladesh. what do u need? Hotel or Tour package or tour guide. Everything you'll get in Porzotok.</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WhyChoose;