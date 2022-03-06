import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import OrderImage from "../../asset/images/city/city5.jpg"
import axios from "axios";
import ApiURL from "../../api/ApiURL";
class OrderDetailsDescription extends Component {
    constructor(props) {
        super(props);
        this.state={
            booking_id: props.booking_id,
            OrderDetailsDescriptionData:[],
        }
    }

    componentDidMount() {
        let booking_id = this.state.booking_id;
        axios.get(ApiURL.OrderDetails + booking_id + '/').then(response => {
            if (response.data.error === false) {
                this.setState({
                    OrderDetailsDescriptionData: response.data.data,
                });
            }
        }).catch(error => {

        });
    }


    render() {
        return (
            <Fragment>
                <div className="container p-5 mt-3">
                    <div className="orderCard">
                        <div className="row pl-4 pr-4 pt-3">
                            <div className="pt-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                                <span className="">
                                    <h6 className="text-left OrderNumberText">Order Number</h6>
                                </span>
                            </div>
                            <div className="p-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                               <span className="text-right">
                                    <h6 className="OrderNumberRed">{this.state.OrderDetailsDescriptionData.booking_id_default}</h6>
                                    <h6 className="OrderNo1">12-12-2022 5:45</h6>
                               </span>
                            </div>
                        </div>

                        <div className="row pl-4 pr-4 pt-0">
                            <div className="pt-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                                <span className="">
                                    <h6 className="text-left FormTo">Form</h6>
                                    <h6 className="text-left NameText">Porzotok</h6>
                                    <h6 className="text-left OrderAddress">B/1, Main Road, Banasree, Dhaka</h6>
                                </span>
                            </div>
                            <div className="p-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                               <span className="text-right">
                                    <h6 className="FormTo">To</h6>
                                    <h6 className="NameText">Monirul Islam</h6>
                                    <h6 className="OrderAddress">B/1, Main Road, Banasree, Dhaka</h6>
                               </span>
                            </div>
                        </div>
                    </div>


                    <div className="orderCard mt-3 ">
                        <div className="row pl-4 pr-4 pt-3">
                            <div className="pt-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                                <span className="">
                                    <h6 className="text-left OrderNumberText">Order List</h6>
                                </span>
                            </div>
                        </div>

                        <div className="row pl-4 pr-4 pt-0">
                            <div className="pt-4 col-xl-1 col-lg-1 col-sm-1 col-md-1">
                                <span className="">
                                    <img className="w-100 OrderImage" src={OrderImage} alt=""/>
                                </span>
                            </div>
                            <div className="pt-4 col-xl-8 col-lg-8 col-sm-8 col-md-8">
                                <span className="">
                                     <h6 className="text-left OrderHotelText">Pan Pacific Sonargoan</h6>
                                     <h6 className="text-left OrderRoomText">(102) DULEX DOUBLE SEA VIEW</h6>
                                     <h6 className="text-left OrderCheckInOut">Check In: 2022-02-24</h6>
                                     <h6 className="text-left OrderCheckInOut">Check out: 2022-02-27</h6>
                                </span>
                            </div>
                            <div className="p-4 col-xl-3 col-lg-3 col-sm-3 col-md-3">
                               <span className="text-right">
                                    <h6 className="OrderBigAmount">৳ 14000.00</h6>
                               </span>
                            </div>
                        </div>

                        <hr className="hrWeight"/>

                        <div className="row pl-4 pr-4 pt-0 pb-3">
                            <div className="col-xl-1 col-lg-1 col-sm-1 col-md-1">
                            </div>
                            <div className="col-xl-8 col-lg-8 col-sm-8 col-md-8">
                                <span className="">
                                     <h6 className="text-left OrderSubTotalDiscountTotal">Subtotal</h6>
                                     <h6 className="text-left OrderSubTotalDiscountTotal">Discount</h6>
                                     <h6 className="text-left OrderSubTotalDiscountTotal">Total</h6>
                                </span>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3">
                               <span className="text-right">
                                    <h6 className="OrderAmount mr-4">৳ 14000.00</h6>
                                    <h6 className="OrderAmount mr-4">(-)৳ 0.00</h6>
                                    <h6 className="OrderAmount mr-4">৳ 14000.00</h6>
                               </span>
                            </div>
                        </div>

                    </div>


                    <div className="orderCard mt-3">
                        <div className="row pl-4 pr-4 pt-3">
                            <div className="pt-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                                <span className="">
                                    <h6 className="text-left OrderNumberText">Payment Details</h6>
                                </span>
                            </div>
                        </div>


                        <div className="row pl-4 pr-4 pt-3 pb-3">
                            <div className="pt-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                                <span className="">
                                    <h6 className="text-left OrderSubTotalDiscountTotal">Payment Method: <span className="OrderPaymentDetailsText">Bkash</span> </h6>
                                    <h6 className="text-left OrderSubTotalDiscountTotal">Amount: <span className="OrderPaymentDetailsText">৳ 14000.00</span> </h6>
                                </span>
                            </div>
                            <div className="p-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                               <span className="text-right">
                                    <h6 className="OrderPaid">PAID</h6>
                               </span>
                            </div>
                        </div>
                    </div>


                    {/*<Row className="orderCard">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12} className="pt-3 pl-5">
                            <i className="fas fa-check-circle arrowColor"> </i>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                            <span className="">
                                 <Link to="/" className="text-left OrderNo">PZ0239578290452</Link>
                                <h6 className="OrderNo1">Other</h6>
                            </span>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12} className="p-4">
                           <span className="text-right">
                                <h1 className="OrderTaka">৳ 1250</h1>
                                <h6 className="OrderNo1">12-12-2022 5:45</h6>
                            </span>
                        </Col>
                    </Row>*/}
                </div>
            </Fragment>
        );
    }
}

export default OrderDetailsDescription;