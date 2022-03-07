import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class OrderListPlaceholder extends Component {
    render() {
        let isLoading = this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container className="p-5">
                    <Row className="mt-2">
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-2 card shadow-sm border-0">
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-2 big"></div>
                                        <div className="ph-col-8 empty big"></div>
                                        <div className="ph-col-2 big"></div>

                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-2"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-3 card shadow-sm border-0">
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-2 big"></div>
                                        <div className="ph-col-8 empty big"></div>
                                        <div className="ph-col-2 big"></div>

                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-2"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-3 card shadow-sm border-0">
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-2 big"></div>
                                        <div className="ph-col-8 empty big"></div>
                                        <div className="ph-col-2 big"></div>

                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-2"></div>
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

export default OrderListPlaceholder;