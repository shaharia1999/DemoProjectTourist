import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
    BsArrowRightCircle,
} from "react-icons/bs";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class ReferRewards extends Component {
    constructor() {
        super();
        this.state = {
            user_id: sessionStorage.getItem('UserID'),
            AccessToken:sessionStorage.getItem('AccessToken'),
            // Wallet
            my_ref_code:"XXXXXX",
            total_earned_verify: "...",
            total_earned_pending: "...",
            isLoading: "",
            MainDiv: "d-none",
        }
    }
    componentDidMount() {
        let user_id = this.state.user_id;
        let config = {
            headers: {
                Authorization: `Token ` + this.state.AccessToken
            }
        }
        axios.get(ApiURL.MyWalletEarned + user_id + '/', config).then((response) => {
            if (response.data.error === false) {
                this.setState({
                    total_earned_verify: response.data.total_earned_verify,
                    total_earned_pending: response.data.total_earned_pending,
                    my_ref_code: response.data.my_ref_code,
                });
            }
        }).catch(error => {

        });
    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="rewardCard shadow-sm border-0">
                        <Col xl={8} lg={8} md={10} sm={12} xs={12}>
                            <div className="row mt-5 p-4">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="p-3 earnCard shadow-sm border-0">
                                        <div className="text-center">
                                            <h6 className="referTextBig">EARNED</h6>
                                            <h6 className="referAmountText">{this.state.total_earned_verify} ৳</h6>
                                            <Link to="/refer-earn-history" className="referSeeText">See Details <BsArrowRightCircle/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="p-3 pendingCard shadow-sm border-0">
                                        <div className="text-center">
                                            <h6 className="referTextBig">PENDING</h6>
                                            <h6 className="referAmountText">{this.state.total_earned_pending} ৳</h6>
                                            <Link to="/refer-pending-history" className="referSeeText">See Details <BsArrowRightCircle/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="referTextBig text-center">৳ More Friends, More Money!</h6>
                            <h6 className="referText1 mt-4 text-center">Refer friend and get money when they complete their registration</h6>

                            <div className="row mb-5 p-4">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="p-3 earnCard shadow-sm border-0">
                                        <div className="text-center">
                                            <h6 className="MyReferCode">MY REFER CODE: <span className="walletText">{this.state.my_ref_code}</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ReferRewards;