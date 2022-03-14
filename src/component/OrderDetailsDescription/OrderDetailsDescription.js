import React, {Component, Fragment} from 'react';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import OrderDetailsDescriptionPlaceholder from "../placeholder/OrderDetailsDescriptionPlaceholder";
class OrderDetailsDescription extends Component {
    constructor(props) {
        super(props);
        this.state={
            booking_id: props.booking_id,
            OrderDetailsDescriptionData:[],
            OrderDetailsDescriptionData1:[],
            OrderDetailsDescriptionData2:[],
            isLoading: "",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        let booking_id = this.state.booking_id;
        axios.get(ApiURL.OrderDetails + booking_id + '/').then(response => {
            if (response.data.error === false) {
                this.setState({
                    OrderDetailsDescriptionData: response.data.data,
                    OrderDetailsDescriptionData1: response.data.data.customer_details,
                    OrderDetailsDescriptionData2: response.data.data.booking_information,
                    isLoading: "d-none", MainDiv: " "
                });
                console.log('OrderDetailsDescriptionData',this.state.OrderDetailsDescriptionData2);
            }
        }).catch(error => {

        });
    }


    render() {
        return (
            <Fragment>
                <OrderDetailsDescriptionPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
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
                                    <h6 className="OrderNo1">{this.state.OrderDetailsDescriptionData.date}</h6>
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
                                    <h6 className="NameText">{this.state.OrderDetailsDescriptionData1.user_name}</h6>
                                    <h6 className="OrderAddress">{this.state.OrderDetailsDescriptionData1.user_short_address}</h6>
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

                            {this.state.OrderDetailsDescriptionData2.map((my_order) => (
                                <div className="row pl-4 pr-4 pt-0">
                                    <div className="pt-4 col-xl-1 col-lg-1 col-sm-1 col-md-1">
                                <span className="">
                                    <img className="w-100 OrderImage" src={ApiURL.BaseUrl1 + my_order.room_details.image_url[0].Image} alt=""/>
                                </span>
                                    </div>
                                    <div className="pt-4 col-xl-8 col-lg-8 col-sm-8 col-md-8">
                                <span className="">
                                     <h6 className="text-left OrderHotelText">{my_order.room_details.hotel_details.hotel_name}</h6>
                                     <h6 className="text-left OrderRoomText">{my_order.room_details.room_name}</h6>
                                     <h6 className="text-left OrderCheckInOut">Check In: {my_order.check_in_date}</h6>
                                     <h6 className="text-left OrderCheckInOut">Check out: {my_order.check_out_date}</h6>
                                </span>
                                    </div>
                                    <div className="p-4 col-xl-3 col-lg-3 col-sm-3 col-md-3">
                               <span className="text-right">
                                    <h6 className="OrderBigAmount">৳ 14000.00</h6>
                               </span>
                                    </div>
                                </div>
                            ))}



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
                                    <h6 className="text-left OrderSubTotalDiscountTotal">Payment Method: <span className="OrderPaymentDetailsText">{this.state.OrderDetailsDescriptionData.payment_method}</span> </h6>
                                    <h6 className="text-left OrderSubTotalDiscountTotal">Amount: <span className="OrderPaymentDetailsText">৳ {this.state.OrderDetailsDescriptionData.total_amount}</span> </h6>
                                </span>
                                </div>
                                <div className="p-4 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                               <span className="text-right">
                                    <h6 className="OrderPaid">PAID</h6>
                               </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default OrderDetailsDescription;