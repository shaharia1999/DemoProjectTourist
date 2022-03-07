import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class OrderDetailsDescriptionPlaceholder extends Component {
    render() {
        let isLoading = this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container className="p-5">
                    <Row className="mt-2 p-4">
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-2 card shadow-sm border-0">
                            <div className="ph-item w-100">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4 big"></div>
                                        <div className="ph-col-4 empty big"></div>
                                        <div className="ph-col-4 big"></div>
                                        <div className="mt-5 ph-col-12 empty"></div>
                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-2"></div>

                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-2"></div>

                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-4 empty"></div>
                                        <div className="ph-col-4"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-3 card shadow-sm border-0 pt-5 pb-5">
                            <div className="ph-item">
                                <div className="ph-col-2">
                                    <div className="ph-avatar w-50"></div>
                                </div>

                                <div className="ph-col-10">
                                    <div className="ph-row">
                                        <div className="ph-col-4 big"></div>
                                        <div className="ph-col-4 empty big"></div>
                                        <div className="ph-col-4 big"></div>

                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>

                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-10 empty"></div>

                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-10 empty"></div>
                                    </div>
                                </div>

                                <hr className="mt-4 mb-4"/>

                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-2"></div>

                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-2"></div>

                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-2"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-3 card shadow-sm border-0">
                            <div className="ph-item w-100">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-2 big"></div>
                                        <div className="ph-col-10 empty big"></div>

                                        <div className="mt-3 ph-col-12 empty"></div>

                                        <div className="ph-col-2"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-2 big"></div>

                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
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

export default OrderDetailsDescriptionPlaceholder;