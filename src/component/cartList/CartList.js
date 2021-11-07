import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import room1 from "../../../src/asset/images/room/room1.jpg"
import room2 from "../../../src/asset/images/room/room2.jpg"
import room3 from "../../../src/asset/images/room/room3.jpg"
import {ImArrowRight2} from "react-icons/all";
import Porzotok from "../../asset/images/Porzotok.png";

class CartList extends Component {
    render() {
        return (
            <Fragment>
                <br/>
                <Container className="TopSection pb-5 text-center shadow-sm bg-white">
                    <Row className="p-2 bg-light text-center">
                        <Col className="p-3" key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="RoomCartListTitle"> ROOM CART LIST</h5>
                        </Col>
                    </Row>
                    <div className="p-5">
                        <Row>
                            <Col className="p-2" key={1} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard w-100">
                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">IMAGE</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">ROOM NUMBER</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">ROOM NAME</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">PRICE</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">ACTION</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">TOTAL PRICE</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="p-2" key={1} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard w-100">
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <img className="CartRoomImage" src={room1} alt=""/>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">#12345</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">9000 TK</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <Button className="btn text-danger CartDeleteBtn"><i className="fa fa-trash-alt"> </i> </Button>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">15000 TK</h6>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="p-2" key={1} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard w-100">
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <img className="CartRoomImage" src={room2} alt=""/>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">#12345</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">6000 TK</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <Button className="btn text-danger CartDeleteBtn"><i className="fa fa-trash-alt"> </i> </Button>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">15000 TK</h6>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="p-2" key={1} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard w-100">
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <img className="CartRoomImage" src={room3} alt=""/>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">#12345</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">A room assigned to one person</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">3000 TK</h6>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <Button className="btn text-danger CartDeleteBtn"><i className="fa fa-trash-alt"> </i> </Button>
                                    </Col>
                                    <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListCartTitle">15000 TK</h6>
                                    </Col>
                                </Row>
                            </Col>
                            {/*<Col className="p-2" key={1} xl={3} lg={3} md={3} sm={4} xs={6}>
                                <Card className="RoomOnCartCard w-100">
                                    <img className="CartRoomImage" src={room1} alt=""/>
                                    <Card.Body>
                                        <h5 className="RoomNameOnCard m-0 p-0">DELUXE KING SPECIAL SUPER ROOM</h5>
                                        <p className="RoomPriceOnCard m-0 p-0">Total Price: 3000TK</p>
                                    </Card.Body>
                                    <div className="input-group m-0 p-0 w-100">
                                        <Button className="btn text-danger w-100 CartDeleteBtn"><i
                                            className="fa fa-trash-alt"> </i> </Button>
                                    </div>
                                </Card>
                            </Col>*/}
                        </Row>


                        <Row>
                            <Col className="p-2" key={1} xl={8} lg={8} md={8} sm={8} xs={8} >
                            </Col>
                            <Col className="p-2" key={1} xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="RoomOnCartCard bg-white w-100">
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="SubTotalPriceTitle">SUBTOTAL </h6>
                                    </Col>
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="SubTotalPriceTitle">3000 TK</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="p-2" xl={2} lg={2} md={2} sm={2} xs={2} >
                            </Col>
                            <Col className="p-2" xl={6} lg={6} md={6} sm={6} xs={6} >
                                <Row className="RoomOnCartCard bg-white w-100">
                                    <Col className="" xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Form>
                                            <div className="form-group">
                                                <input type="text" className="form-control placeholder-text" placeholder="PROMO CODE"/>
                                                <Button id="" type="submit" className="btn PromoCodeBtn">SEND</Button>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="p-2" xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="RoomOnCartCard bg-white w-100">
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="SubTotalPriceTitle">DISCOUNT </h6>
                                    </Col>
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="SubTotalPriceTitle">990 TK</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="p-2" key={1} xl={8} lg={8} md={8} sm={8} xs={8} >
                            </Col>
                            <Col className="p-2" key={1} xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="RoomOnCartCard bg-white w-100">
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="TotalPriceTitle">TOTAL PRICE</h6>
                                    </Col>
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="TotalPriceTitle">12000 TK</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Link to="/order" className="btn m-1 CheckOutBtn CheckOutText float-right">CHECK OUT <ImArrowRight2/></Link>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default CartList;