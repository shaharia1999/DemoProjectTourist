import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
class OrderListPlaceholder extends Component {
    render() {
        return (
            <Container className="p-5">
                <h5 className="section-title mt-4 text-center">Order List</h5>
                <Row className="mt-2">
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-2 card shadow-sm border-0">
                        <div className="ph-item w-100">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                </div>
                            </div>
                        </div>

                        <div className="ph-item w-100">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                </div>
                            </div>
                        </div>

                        <div className="ph-item w-100">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                    <div className="ph-col-12"/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OrderListPlaceholder;