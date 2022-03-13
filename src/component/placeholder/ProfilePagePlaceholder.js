import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
class ProfilePagePlaceholder extends Component {
    render() {
        let isLoading = this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container className="p-5">
                    <Row className="mt-2 justify-content-center">
                        <Col xl={10} lg={10} md={12} sm={12} xs={12} className="mt-2 card shadow-sm border-0">
                            <div className="ph-item">
                                <div className="ph-col-12 justify-content-center">
                                    <div className="row">
                                        <div className="ph-col-4 empty"></div>
                                        <div className="ph-col-4">
                                            <div className="ph-avatar w-50"></div>
                                        </div>
                                        <div className="ph-col-4 empty"></div>
                                    </div>

                                    <div className="ph-row mt-5">
                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-8 big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-6 big"></div>
                                        <div className="ph-col-2 empty big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-4 big"></div>
                                        <div className="ph-col-4 empty big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-8 big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-6 big"></div>
                                        <div className="ph-col-2 empty big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-8 big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-6 big"></div>
                                        <div className="ph-col-2 empty big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-4 big"></div>
                                        <div className="ph-col-4 empty big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-6 big"></div>
                                        <div className="ph-col-2 empty big"></div>

                                        <div className="ph-col-2 big mt-3"></div>
                                        <div className="ph-col-2 empty big"></div>
                                        <div className="ph-col-8 big"></div>
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

export default ProfilePagePlaceholder;