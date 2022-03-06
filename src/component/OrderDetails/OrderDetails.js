import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class OrderDetails extends Component {
    constructor() {
        super();
        this.state = {
            OrderListData: [],
            user_id: sessionStorage.getItem('UserID'),
        }
    }

    componentDidMount() {
        let user_id = this.state.user_id;
        axios.get(ApiURL.OrderList + user_id).then(response => {
            if (response.data.error === false) {
                this.setState({
                    OrderListData: response.data.data,
                });
            }
        }).catch(error => {

        });
    }

    render() {
        const MyList = this.state.OrderListData;
        const MyOrderListView = MyList.map((MyOrderListData, i) => {
            return <Row className="orderCard" key={i}>
                <Col xl={1} lg={1} md={1} sm={12} xs={12} className="pt-3 pl-5">
                    <i className="fas fa-check-circle arrowColor"> </i>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                    <span className="">
                        <Link to={"/order-details/" + MyOrderListData.booking_id}
                              className="text-left OrderNo">{MyOrderListData.booking_id_default}</Link>
                        {(() => {
                            if (MyOrderListData.booking_for_myself === true) {
                                return (
                                    <h6 className="OrderNo1">Self</h6>
                                )
                            } else if (MyOrderListData.booking_for_others === true) {
                                return (
                                    <h6 className="OrderNo1">{MyOrderListData.booking_others_name}</h6>
                                )
                            }
                        })()}
                    </span>
                </Col>
                <Col xl={5} lg={5} md={5} sm={12} xs={12} className="p-4">
                   <span className="text-right">
                        <h1 className="OrderTaka">৳ {MyOrderListData.total_amount}</h1>
                        <h6 className="OrderNo1">{MyOrderListData.date}</h6>
                    </span>
                </Col>
            </Row>
        });

        return (
            <Fragment>
                <Container className="mt-3">
                    {MyOrderListView}
                </Container>
            </Fragment>
        );
    }
}

export default OrderDetails;