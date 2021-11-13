import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";

class EditProfile extends Component {
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
                                    <input type="text" className="form-control placeholder-text" value="01792706304"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control placeholder-text" value="Monirul Islam Akand" placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value="monirul.arenawebsecurity.net" placeholder="Enter Your Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value="1234567890" placeholder="Enter NID Number"/>
                                </div>

                                <div className="form-group">
                                    <select id="" className="form-control">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input type="date" className="form-control placeholder-text" />
                                </div>
                                <div className="form-group">
                                    <select id="" className="form-control">
                                        <option value="">Choose City</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Khulna">Khulna</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value="Banasree, Block 1, Rampura" placeholder="Enter Password"/>
                                </div>
                                <Button className="btn SendBtnColorText mb-5 btn-block">Save Profile</Button>
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

export default EditProfile;