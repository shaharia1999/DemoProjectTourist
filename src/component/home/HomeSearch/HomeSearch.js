import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class HomeSearch extends Component {
    render() {
        return (
            <Fragment>
                    <Container fluid={true} className="homeSearch">
                        <Row className="justify-content-center">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="text-center">
                               {/* <div className="input-group searchTop">
                                    <input type="text" className="formSearch-control" aria-label="Text input with segmented dropdown button"/>
                                    <button type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                                </div>*/}
                                <h4 className="searchUpText justify-content-center mb-4">LET’S DISCOVER BANGLADESH TOGETHER</h4>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control search-placeholder" placeholder="Search by City, Hotel or Location"
                                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn search-btn" type="button">Search</button>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default HomeSearch;