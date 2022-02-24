import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
class OrderDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-3">
                    <Row className="notificationCard">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12} className="pt-4 pl-5">
                             <i className="fas fa-check-circle arrowColor"> </i>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                            <span className="">
                                <h1 className="text-left OrderNo">PZ0239578290452</h1>
                                <h6 className="OrderNo1">11231214</h6>
                            </span>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12} className="p-4">
                           <span className="text-right">
                                <h1 className="OrderTaka">৳ 1250</h1>
                                <h6 className="OrderNo1">12-12-2022 </h6>
                            </span>
                        </Col>
                    </Row>
                    <Row className="notificationCard">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12} className="pt-4 pl-5">
                            <i className="fas fa-check-circle arrowColor"> </i>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                            <span className="">
                                <h1 className="text-left OrderNo">PZ0239578290452</h1>
                                <h6 className="OrderNo1">11231214</h6>
                            </span>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12} className="p-4">
                           <span className="text-right">
                                <h1 className="OrderTaka">৳ 1250</h1>
                                <h6 className="OrderNo1">12-12-2022 </h6>
                            </span>
                        </Col>
                    </Row>
                    <Row className="notificationCard">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12} className="pt-4 pl-5">
                            <i className="fas fa-check-circle arrowColor"> </i>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                            <span className="">
                                <h1 className="text-left OrderNo">PZ0239578290452</h1>
                                <h6 className="OrderNo1">11231214</h6>
                            </span>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12} className="p-4">
                           <span className="text-right">
                                <h1 className="OrderTaka">৳ 1250</h1>
                                <h6 className="OrderNo1">12-12-2022 </h6>
                            </span>
                        </Col>
                    </Row>
                    <Row className="notificationCard">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12} className="pt-4 pl-5">
                            <i className="fas fa-check-circle arrowColor"> </i>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                            <span className="">
                                <h1 className="text-left OrderNo">PZ0239578290452</h1>
                                <h6 className="OrderNo1">11231214</h6>
                            </span>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12} className="p-4">
                           <span className="text-right">
                                <h1 className="OrderTaka">৳ 1250</h1>
                                <h6 className="OrderNo1">12-12-2022 </h6>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default OrderDetails;