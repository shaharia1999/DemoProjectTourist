import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class LogIn extends Component {
    render() {
        return (
            <Fragment>
                <Container className="">
                    <Row className="card shadow-sm p-4">
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Form id="contactForm">
                                <h5 className="contact-section-title">Login</h5>
                                <p className="contact-section-subTitle">Write your name, mobile number and message and
                                    send</p>
                                <div className="form-group">
                                    <input id="" type="text" className="form-control placeholder-text py-md-4 py-sm-4 py-4" placeholder="Your name"/>
                                </div>
                                <div className="form-group">
                                    <input id="" type="text" className="form-control placeholder-text py-md-4 py-sm-4 py-4" placeholder="Mobile Number"/>
                                </div>
                                <div className="form-group">
                                    <textarea id="" type="text" className="form-control placeholder-text py-md-4 py-sm-4 py-4" placeholder="Massage"/>
                                </div>
                                <Button id="" type="submit" className="btn btn-block contact-btn py-2">SEND</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default LogIn;