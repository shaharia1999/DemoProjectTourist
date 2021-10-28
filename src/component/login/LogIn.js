import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";

class LogIn extends Component {
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
                                    <input type="text" className="form-control placeholder-text" placeholder="Your Mobile Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control placeholder-text" placeholder="Enter Password"/>
                                </div>
                                <Button className="btn SendBtnColorText btn-block">Login</Button>
                            </Form>
                            <h1 className="forgotText text-center mt-3"> <Link to="/forgetPassword" className="signUpText">Forgot Password</Link> </h1>
                            <h1 className="forgotText text-center mt-5 mb-4"> Don't Have an Account ? <Link to="/signUp" className="signUpText">SignUp</Link></h1>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default LogIn;