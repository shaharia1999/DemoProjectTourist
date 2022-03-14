import React, {Component, Fragment} from 'react';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Col, Container, Row} from "react-bootstrap";

class ReferPendingHistory extends Component {
    constructor() {
        super();
        this.state = {
            MyRefer: [],
            user_id: sessionStorage.getItem('UserID'),
            AccessToken: sessionStorage.getItem('AccessToken'),
        }
    }

    componentDidMount() {
        let user_id = this.state.user_id;
        let config = {
            headers: {
                Authorization: `Token ` + this.state.AccessToken
            }
        }

        axios.get(ApiURL.MyReferWalletHistory + user_id + '/', config).then((response) => {
            if (response.data.error === false) {
                this.setState({
                    MyRefer: response.data.data,
                });
            }
        }).catch(error => {

        });
    }
    render() {
        const myList = this.state.MyRefer;
        const myReferPendingView = myList.map((myPendingRefer, i) => {
            if (myPendingRefer.is_ref_account ===true && myPendingRefer.is_verify === false) {
                return <Row className="EarnCard">
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-4">
                        <span className="">{myPendingRefer.ref_use_user_info.user_name}</span>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="p-4">
                 <span className="text-right">
                    <h1 className="">৳ {myPendingRefer.per_ref_code_amount}</h1>
                 </span>
                    </Col>
                </Row>
            }
        });
        return (
            <Fragment>
                <Container className="mt-3">
                    <h5 className="section-title mt-4 mb-3 text-center">Pending History</h5>
                    {myReferPendingView}
                </Container>
            </Fragment>
        );
    }
}

export default ReferPendingHistory;