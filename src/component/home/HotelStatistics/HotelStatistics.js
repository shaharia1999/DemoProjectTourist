import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import customer from "../../../asset/images/customer.svg"
import business from "../../../asset/images/business.svg"
import project from "../../../asset/images/project.svg"
import years from "../../../asset/images/years.svg"


class HotelStatistics extends Component {
    render() {
        return (
            <Fragment>
                <div className="statistic-container p-0 m-0">
                    <Container className="justify-content-center mt-0 mb-0">
                        <Row className="pt-5">
                            <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                <div className="Project-card m-2 p-3">
                                    <img className="statistics-img" src={customer} alt=""/>
                                    <h6 className="text-center statistics-title">650+</h6>
                                    <h6 className="text-center statistics-des">Total Places</h6>
                                </div>
                            </Col>

                            <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                <div className="Project-card m-2 p-3">
                                    <img className="statistics-img" src={business} alt=""/>
                                    <h6 className="text-center statistics-title">3340+</h6>
                                    <h6 className="text-center statistics-des">Total Hotels</h6>
                                </div>
                            </Col>

                            <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                <div className="Project-card m-2 p-3">
                                    <img className="statistics-img" src={project} alt=""/>
                                    <h6 className="text-center statistics-title">26700+</h6>
                                    <h6 className="text-center statistics-des">Total Rooms</h6>
                                </div>
                            </Col>

                            <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                <div className="Project-card m-2 p-3">
                                    <img className="statistics-img" src={years} alt=""/>
                                    <h6 className="text-center statistics-title">10+</h6>
                                    <h6 className="text-center statistics-des">Total Years</h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default HotelStatistics;