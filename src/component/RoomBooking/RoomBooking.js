import React, {Component, Fragment} from 'react';
import {Button, Col, Collapse, Container, Form, Row} from "react-bootstrap";
import room1 from "../../asset/images/room/room1.jpg";

class RoomBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            open1: true,
            open2: true,
        };
    }
    render() {
        const open = this.state.open;
        const open1 = this.state.open1;
        const open2 = this.state.open2;
        return (
            <Fragment>
                <Container fluid={true} className="mt-5 bookingPadding">
                    <Row className="p-5">
                        <Col className="bookingCard" xl={8} lg={8} md={8} sm={12} xs={12}>
                            <Form>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <input className="form-control" placeholder="Enter Full Name" />
                                    </Col>
                                    <Col>
                                        <input className="form-control" placeholder="Email Address" />
                                    </Col>
                                </Row>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <input className="form-control" placeholder="Enter Mobile Number" />
                                    </Col>
                                    <Col>
                                        <input className="form-control" placeholder="National ID Number" />
                                    </Col>
                                </Row>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                    </Col>
                                    <Col>
                                        <input type="password" className="form-control" placeholder="Enter Confirm Password" />
                                    </Col>
                                </Row>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <input type="date" className="form-control" placeholder="First name" />
                                    </Col>
                                    <Col className="form-check form-check-inline">
                                        <label className="form-check-label placeholderApplyText ml-2 mr-3" htmlFor="inlineRadio1">Gender*: </label>
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male"/>
                                        <label className="form-check-label placeholderApplyText mr-3" htmlFor="inlineRadio1">Male</label>
                                        <input className="form-check-input ml-3" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female"/>
                                        <label className="form-check-label placeholderApplyText mr-3" htmlFor="inlineRadio2">Female</label>
                                    </Col>
                                </Row>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <select className="form-control">
                                            <option>Select Country</option>
                                            <option>Bangladesh</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <select className="form-control">
                                            <option>Select State</option>
                                            <option>Bangladesh</option>
                                            <option>USA</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <select className="form-control">
                                            <option>Select City</option>
                                            <option>Dhaka</option>
                                            <option>Rangpur</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <textarea className="form-control" placeholder="Enter Your Address" />
                                    </Col>
                                </Row>
                                <Button className="btn BookingBtn btn-lg float-right mr-4">NEXT</Button>
                            </Form>
                        </Col>
                        <Col className="bookingCard1" xl={4} lg={4} md={4} sm={12} xs={12}>

                            <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open: !open})}
                                    aria-controls="example0"
                                    aria-expanded={open1}>
                                    <h6 className="float-left">Room</h6>
                                </Button>
                                <Collapse in={this.state.open}>
                                    <div className="p-2">
                                        <Row>
                                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <img className="CartRoomImage" src={room1} alt=""/>
                                            </Col>
                                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <h6 className="CartListCartTitle">#12345</h6>
                                            </Col>
                                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <img className="CartRoomImage" src={room1} alt=""/>
                                            </Col>
                                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <h6 className="CartListCartTitle">#12345</h6>
                                            </Col>
                                            <Col className="" xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Collapse>
                            </div>

                            <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open1: !open1})}
                                    aria-controls="example0"
                                    aria-expanded={open1}>
                                    <h6 className="float-left">Booking Details</h6>
                                </Button>
                                <Collapse in={this.state.open1}>
                                    <Form id="example0">
                                        <h6 className="CartListCartTitle">Room Number:</h6>
                                        <h6 className="CartListCartTitle">Check In Time:</h6>
                                        <h6 className="CartListCartTitle">Check Out Time:</h6>
                                        <h6 className="CartListCartTitle">Duration:</h6>
                                        <h6 className="CartListCartTitle">Room Price(Night):</h6>
                                    </Form>
                                </Collapse>
                            </div>

                            <div className="pr-3" style={{width: 'auto'}}>
                                <Button
                                    className="btn-block porzotokCollapseBtn porzotokCollapseMainTitle"
                                    onClick={() => this.setState({open2: !open2})}
                                    aria-controls="example0"
                                    aria-expanded={open2}>
                                    <h6 className="float-left">Payment</h6>
                                </Button>
                                <Collapse in={this.state.open2}>
                                    <Form id="example0">
                                        <h6 className="CartListCartTitle">Room Price:</h6>
                                        <h6 className="CartListCartTitle">Subtotal:</h6>
                                        <h6 className="CartListCartTitle">Discount:</h6>
                                        <h6 className="CartListCartTitle">Total Amount:</h6>
                                    </Form>
                                </Collapse>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RoomBooking;