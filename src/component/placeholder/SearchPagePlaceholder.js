import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

class SearchPagePlaceholder extends Component {
    render() {
        let isLoading = this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container className="">
                    <Row className="justify-content-center mb-4">
                        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="input-group searchUpText mb-3">
                            <Row className="SearchPageHotelCardPlaceholder mt-2 w-100">
                                <Col className="pl-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <h1 className="d-none">hello</h1>
                                                <h1 className="d-none">hello</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                            <div className="pr-3" style={{width: 'auto'}}>
                                <div className="ph-item ph-item-padding1 mt-4 w-100">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12 m-0 p-0 big "></div>
                                            <div className="ph-col-12 m-0 p-0 big"></div>
                                        </div>

                                        <div className="ph-row mt-3">
                                            <div className="ph-col-6 m-0 pr-1 big "></div>
                                            <div className="ph-col-6 m-0 pl-1 big"></div>
                                            <div className="ph-col-6 m-0 pr-1 big"></div>
                                            <div className="ph-col-6 m-0 pl-1 big"></div>
                                        </div>

                                        <div className="ph-row mt-3">
                                            <div className="ph-col-12 m-0 p-0 big "></div>
                                            <div className="ph-col-12 m-0 p-0 big"></div>
                                        </div>

                                        <div className="ph-row mt-3">
                                            <div className="ph-col-12 p-0 big"></div>
                                            <div className="ph-col-12 p-0 big"></div>
                                            <div className="ph-col-12 p-0 big"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pr-3" style={{width: 'auto'}}>

                            </div>
                        </Col>
                        <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                            <Row className="SearchPageHotelCardPlaceholder w-100">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <div className="ph-picture PreviewImgLargePlaceholder"/>
                                </Col>
                                <Col className="p-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-3"></div>
                                                <div className="ph-col-10"></div>
                                                <div className="ph-col-2 empty"></div>

                                                <div className="mt-4"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-6 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>

                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-4 big mx-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">

                                                <div className="ph-col-8 mt-4 text-center big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-5"></div>
                                                <div className="ph-col-10 mt-5"></div>
                                                <div className="ph-col-2 empty"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCardPlaceholder mt-2 w-100">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <div className="ph-picture PreviewImgLargePlaceholder"/>
                                </Col>
                                <Col className="p-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-3"></div>
                                                <div className="ph-col-10"></div>
                                                <div className="ph-col-2 empty"></div>

                                                <div className="mt-4"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-6 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>

                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-4 big mx-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">

                                                <div className="ph-col-8 mt-4 text-center big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-5"></div>
                                                <div className="ph-col-10 mt-5"></div>
                                                <div className="ph-col-2 empty"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="SearchPageHotelCardPlaceholder mt-2 w-100">
                                <Col className="pl-0" xl={4} lg={4} md={4} sm={4} xs={4}>
                                    <div className="ph-picture PreviewImgLargePlaceholder"/>
                                </Col>
                                <Col className="p-0" xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 big"></div>
                                                <div className="ph-col-4 empty big"></div>

                                                <div className="mt-3"></div>
                                                <div className="ph-col-10"></div>
                                                <div className="ph-col-2 empty"></div>

                                                <div className="mt-4"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-6 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-2 big mx-1"></div>

                                                <div className="ph-col-2 big mx-1"></div>
                                                <div className="ph-col-4 big mx-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="" xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <div className="vl"> </div>
                                    <div className="ph-item ph-item-padding mt-4 w-100">
                                        <div className="ph-col-12">
                                            <div className="ph-row p-0">
                                                <div className="ph-col-8 mt-4 text-center big"> </div>
                                                <div className="ph-col-4 empty big"> </div>

                                                <div className="mt-5"> </div>
                                                <div className="ph-col-10 mt-5"> </div>
                                                <div className="ph-col-2 empty"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchPagePlaceholder;