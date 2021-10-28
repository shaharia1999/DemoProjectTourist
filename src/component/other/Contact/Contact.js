import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-2">
                    <h4 className="text-center font26 m-3">Contact & Address</h4>
                    <Row className="shadow-sm contactCardPadding p-4">
                        <Col className="text-center mt-3" xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Form id="contactForm">
                                <div className="form-group">
                                    <input type="text" className="form-control placeholderApplyText py-md-4 py-sm-4 py-4" placeholder="Your name"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control placeholderApplyText py-md-4 py-sm-4 py-4" placeholder="Mobile Number"/>
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control placeholderApplyText py-md-4 py-sm-4 py-4" placeholder="Massage"/>
                                </div>
                                <Button id="ContactSendBtn" type="submit" className="btn btn-block SendBtnColorText">SEND</Button>
                            </Form>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-3">
                            <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.492105191644!2d90.4251011154022!3d23.765484494115892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1631611812115!5m2!1sen!2sbd"></iframe>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;