import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";

class ChangePassword extends Component {
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
                                    <input type="text" className="form-control placeholder-text" placeholder="Enter Current Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" placeholder="Enter New Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" placeholder="Enter Confirm Password"/>
                                </div>
                                <button className="btn SendBtnColorText mb-5 btn-block">Change Password</button>
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

export default ChangePassword;