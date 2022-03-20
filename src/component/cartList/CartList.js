import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ImArrowRight2} from "react-icons/all";
import CartListPlaceholder from "../placeholder/CartListPlaceholder";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ApiUrl from "../../api/ApiURL";

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_id: sessionStorage.getItem('UserID'),
            CartListData:[],
            isLoading:"",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        let user_id = this.state.user_id;
        axios.get(ApiURL.AllCartList + user_id).then((response,i) => {
            if (response.data.error === false) {
                this.setState({
                    CartListData: response.data.data.cart_room_data,
                    isLoading: "d-none", MainDiv: " "
                });
            }
        }).catch(error => {

        });
    }

    render() {

        const MyList = this.state.CartListData;
        const MyCartListView = MyList.map((MyCartListData, i) => {
            return  <Col className="p-2" key={i} xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Row className="RoomOnCartCard w-100">
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <Link to={"/roomDetails/" + MyCartListData.room_details.room_id}>
                            <img className="PreviewImgLarge w-100"
                                 src={ApiUrl.BaseUrl1 + MyCartListData.room_details.image_url[0].Image}
                                 alt=""/>
                            </Link>
                        </Col>

                        <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                            <Link to={"/roomDetails/" + MyCartListData.room_details.room_id}>
                                <h6 className="CartListCartTitle">{MyCartListData.room_details.room_name}</h6>
                            </Link>
                        </Col>

                        <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                            <h6 className="CartListCartTitle">{MyCartListData.check_in_date}</h6>
                        </Col>
                        <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                            <h6 className="CartListCartTitle">{MyCartListData.check_out_date}</h6>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                            <h6 className="CartListCartTitle">{MyCartListData.static_week_regular_price} TK</h6>
                        </Col>
                        <Col className="" xl={2} lg={2} md={2} sm={2} xs={2}>
                            <h6 className="CartListCartTitle">{MyCartListData.total_amount} TK</h6>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                            <Button className="btn text-danger CartDeleteBtn"><i className="fa fa-trash-alt"> </i> </Button>
                        </Col>
                    </Row>
            </Col>
        });

        return (
            <Fragment>
                <CartListPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                <br/>
                <Container className="TopSection pb-5 text-center shadow-sm bg-white">
                    <Row className="p-2 bg-light text-center">
                        <Col className="p-3" key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className="RoomCartListTitle"> ROOM CART LIST</h5>
                        </Col>
                    </Row>
                    <div className="p-5">
                        <Row>
                            <Col className="p-2" xl={12} lg={12} md={12} sm={12} xs={12} >
                                <Row className="RoomOnCartCard w-100">
                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">IMAGE</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">ROOM NAME</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">CHECK IN</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">CHECK OUT</h6>
                                    </Col>

                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                        <h6 className="CartListTitle">PRICE</h6>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                                        <h6 className="CartListTitle">TOTAL PRICE</h6>
                                    </Col>

                                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                                        <h6 className="CartListTitle">ACTION</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            {MyCartListView}
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
                            <Col className="p-2" xl={4} lg={4} md={4} sm={4} xs={4} >
                            </Col>
                            <Col className="p-0 m-0" xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="PromoCartCard bg-white">
                                    <Form>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="input-group">
                                            <input type="text" className="form-control PromoUppercase ml-5 placeholder-text" placeholder="PROMO CODE"/>
                                            <Button type="submit" className="btn PromoCodeBtn">SEND</Button>
                                        </Col>
                                    </Form>
                                </Row>
                            </Col>
                            <Col className="p-2" xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Row className="RoomOnCartCard bg-white w-100">
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="PromoDiscountPriceTitle">DISCOUNT </h6>
                                    </Col>
                                    <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <h6 className="PromoDiscountPriceTitle">990 TK</h6>
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
                        <Link to="/roomBooking" className="btn m-1 CheckOutBtn CheckOutText float-right">CHECK OUT <ImArrowRight2/></Link>
                    </div>
                </Container>
                </div>
            </Fragment>
        );
    }
}

export default CartList;