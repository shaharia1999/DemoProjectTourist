import React, {Component, Fragment} from 'react';
import {Button, Col, Collapse, Container, Form, Modal, Row} from "react-bootstrap";
import room1 from "../../asset/images/room/room1.jpg";
import {DatePicker} from 'react-rainbow-components';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";

class RoomBooking extends Component {

    constructor(props) {
        super(props);
        this.state={
            FaqModal1:false,
            FaqModal2:false,
            FaqModal3:false,
            open: true,
            open1: true,
            open2: true,
            CountryData: [],
            StateData: [],
            CityData:[],
            StateByCity:''
        }
    }

    handleClose1=()=>{
        this.setState({ FaqModal1:false})
    }

    handleOpen1=()=>{
        this.setState({ FaqModal1:true})
    }

    handleClose2=()=>{
        this.setState({ FaqModal2:false})
    }
    handleOpen2=()=>{
        this.setState({ FaqModal2:true})
    }

    handleClose3=()=>{
        this.setState({ FaqModal3:false})
    }
    handleOpen3=()=>{
        this.setState({ FaqModal3:true})
    }

    StateByCityOnChange = (event) => {
        let StateByCity = event.target.value;
        this.setState(({StateByCity: StateByCity}));
        console.log('StateByCity',StateByCity);

        axios.get(ApiUrl.StateByCityUrl + StateByCity).then((response) => {
            this.setState({CityData: response.data})
        }).catch(error => {

        });
    }

    componentDidMount() {
        axios.get(ApiUrl.Country).then((response) => {
            this.setState({CountryData: response.data})
        }).catch(error => {

        });

        axios.get(ApiUrl.State).then((response) => {
            this.setState({StateData: response.data})
        }).catch(error => {

        });
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
                                    <DatePicker
                                        value={this.state.date}
                                        className="inputDateP placeholderApplyText RainbowBorder col-md-6 mt-0"
                                        placeholder="Select Date of Birth"
                                    />
                                    <Col className="form-check form-check-inline">
                                        <label className="form-check-label placeholderApplyText ml-2 mr-3" htmlFor="inlineRadio1">Gender: </label>
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
                                            {this.state.CountryData.map((my_country) => (
                                                <option value={my_country.country_id}>{my_country.country_name}</option>
                                            ))}
                                        </select>
                                    </Col>
                                    <Col>
                                        <select onChange={this.StateByCityOnChange} className="form-control">
                                            <option>Select State</option>
                                            {this.state.StateData.map((my_state) => (
                                                <option value={my_state.state_id}>{my_state.state_name}</option>
                                            ))}
                                        </select>
                                    </Col>
                                    <Col>
                                        <select className="form-control">
                                            <option>Select City</option>
                                            {this.state.CityData.map((my_city) => (
                                                <option value={my_city.city_id}>{my_city.city_name}</option>
                                            ))}
                                        </select>
                                    </Col>
                                </Row>
                                <Row className="mx-2 my-3">
                                    <Col>
                                        <textarea className="form-control" placeholder="Enter Your Address" />
                                    </Col>
                                </Row>
                                <Button  onClick={this.handleOpen1} className="btn BookingBtn btn-lg float-right mr-4">NEXT</Button>
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
                <Modal size="lg" show={this.state.FaqModal1} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose1}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">Are you Sure Confirm a Room? </p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS ONLY FOR  VISIONAL WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={this.state.FaqModal2} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose2}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">What is Porzotok?</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose2}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={this.state.FaqModal3} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose3}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion"> What is the last time of application?</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS A PORZOTOK WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose3}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </Fragment>
        );
    }
}

export default RoomBooking;