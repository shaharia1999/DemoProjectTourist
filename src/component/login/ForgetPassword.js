import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Link} from "react-router-dom";

class ForgetPassword extends Component {
    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form>
                                <img className="LoginCardPorzotokImg mt-5" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" placeholder="Enter Mobile Number"/>
                                </div>
                                <h1> <Link to="/forgetPasswordVerify" className="btn SendBtnColorText mb-5 btn-block">NEXT</Link> </h1>
                            </Form>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ForgetPassword;