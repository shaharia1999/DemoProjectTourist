import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import room1 from "../../../src/asset/images/room/room1.jpg"
import room2 from "../../../src/asset/images/room/room2.jpg"
import room3 from "../../../src/asset/images/room/room3.jpg"
import room4 from "../../../src/asset/images/room/room4.jpg"
import {BsCart4} from "react-icons/all";

class CartList extends Component {
    render() {
        return (
            <Fragment>
                <br/>
                <Container className="TopSection pb-5 text-center shadow-sm bg-white">
                    <Row className="p-2 bg-light text-center">
                        <Col className="p-3" key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="RoomCartListTitle"> ROOM CART LIST</h5>
                            <h6 className="RoomCartListPrice m-0 p-2">Total Price 18000BDT | Total Item 06</h6>
                            <Link to="/order" className="btn m-1 CheckOutBtn CheckOutText"><BsCart4/> Checkout Now</Link>
                        </Col>
                    </Row>
                    <Row className="p-3">

                        <Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="RoomOnCartCard w-100">
                                <img className="CartRoomImage" src={room1} alt=""/>
                                <Card.Body>
                                    <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                    <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-100 CartDeleteBtn"><i className="fa fa-trash-alt"></i> </Button>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="RoomOnCartCard w-100">
                                <img className="CartRoomImage" src={room2} alt=""/>
                                <Card.Body>
                                    <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                    <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-100 CartDeleteBtn"><i className="fa fa-trash-alt"></i> </Button>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="RoomOnCartCard w-100">
                                <img className="CartRoomImage" src={room3} alt=""/>
                                <Card.Body>
                                    <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                    <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-100 CartDeleteBtn"><i className="fa fa-trash-alt"></i> </Button>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="RoomOnCartCard w-100">
                                <img className="CartRoomImage" src={room4} alt=""/>
                                <Card.Body>
                                    <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                    <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-100 CartDeleteBtn"><i className="fa fa-trash-alt"></i> </Button>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="RoomOnCartCard w-100">
                                <img className="CartRoomImage" src={room3} alt=""/>
                                <Card.Body>
                                    <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                    <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-100 CartDeleteBtn"><i className="fa fa-trash-alt"></i> </Button>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="RoomOnCartCard w-100">
                                <img className="CartRoomImage" src={room1} alt=""/>
                                <Card.Body>
                                    <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                    <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-100 CartDeleteBtn"><i className="fa fa-trash-alt"></i> </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CartList;