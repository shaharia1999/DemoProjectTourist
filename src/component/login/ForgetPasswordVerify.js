import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Link} from "react-router-dom";

class ForgetPasswordVerify extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" placeholder="Enter Your OTP"/>
                                </div>
                                <h1> <Link to="/forgot-password-set" className="btn SendBtnColorText mb-5 btn-block">VERIFY</Link> </h1>
                            </Form>
                            <h1 className="forgotText text-center mb-5 mt-3"> <p className="signUpText">Resend</p> </h1>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ForgetPasswordVerify;