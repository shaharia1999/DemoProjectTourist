import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import img1 from "../../asset/images/img1.png";
import {
    BiIdCard,

} from "react-icons/bi";
import {   GiModernCity} from "react-icons/gi";
import { GoCalendar,    GoDeviceMobile,} from "react-icons/go";
import {   HiOutlineMail} from "react-icons/hi";
import {    IoLocationOutline} from "react-icons/io5";

import {FaUser,  FaUserFriends} from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ProfilePagePlaceholder from "../placeholder/ProfilePagePlaceholder";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user_id: sessionStorage.getItem('UserID'),
            AccessToken:sessionStorage.getItem('AccessToken'),
            user_name: "",
            user_email: "",
            user_phone: "",
            gender: "",
            user_national_id_card: "",
            date_of_birth: "",
            user_short_address: "",
            user_image: "",
            isLoading: "",
            // Wallet
            total_earned_verify: "...",
            total_earned_pending: "",
            MainDiv: "d-none",
        }
    }

    componentDidMount() {
        let user_id = this.state.user_id;
        axios.get(ApiURL.UserProfileView + user_id + '/').then((response) => {
            if (response.data.error === false) {
                this.setState({
                    user_name: response.data.data.user_name,
                    user_email: response.data.data.user_email,
                    user_phone: response.data.data.user_phone,
                    user_national_id_card: response.data.data.user_national_id_card,
                    date_of_birth: response.data.data.date_of_birth,
                    user_short_address: response.data.data.user_short_address,
                    user_image: response.data.data.user_image,
                    isLoading: "d-none", MainDiv: " "
                });
                if (response.data.data.gender === '1') {
                    this.setState({gender: 'Male'});
                } else if (response.data.data.gender === '2') {
                    this.setState({gender: 'Female'});
                } else if (response.data.data.gender === '3') {
                    this.setState({gender: 'Other'});
                }
            }
        }).catch(error => {

        });


        // My Wallet Earn api call
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
                });
            }
        }).catch(error => {

        });
    }

    render() {
        return (
            <Fragment>
                <ProfilePagePlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container className="p-5 d-flex justify-content-center">
                        <Row className="ProfileCard shadow-sm">
                            <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                                <div>
                                    <img className="profileImg mt-4" src={img1} alt=""/>
                                    <h6 className="profileTxt2 mt-4 text-center">Total Earned: <span className="walletText">{this.state.total_earned_verify}</span> ৳</h6>
                                    <div className="mt-5">
                                        <h6 className="profileTxt2"><GoDeviceMobile/> Mobile No:<span
                                            className="profileTxt"> {this.state.user_phone}</span></h6>
                                        <h6 className="profileTxt2"><FaUser/> Full Name:<span
                                            className="profileTxt"> {this.state.user_name}</span></h6>
                                        <h6 className="profileTxt2"><HiOutlineMail/> Email:<span
                                            className="profileTxt"> {this.state.user_email}</span></h6>
                                        <h6 className="profileTxt2"><BiIdCard/> NID Number:<span
                                            className="profileTxt"> {this.state.user_national_id_card}</span></h6>
                                        <h6 className="profileTxt2"><FaUserFriends/> Gender:<span
                                            className="profileTxt"> {this.state.gender}</span></h6>
                                        <h6 className="profileTxt2"><GoCalendar/> Date of Birth:<span
                                            className="profileTxt"> {this.state.date_of_birth}</span></h6>
                                        <h6 className="profileTxt2"><GiModernCity/> City:<span
                                            className="profileTxt"> {this.state.city}</span></h6>
                                        <h6 className="profileTxt2"><IoLocationOutline/> Address:<span
                                            className="profileTxt"> {this.state.user_short_address}</span></h6>
                                    </div>
                                    <h1><Link to="/editProfile" className="btn ProfileEditBtnColorText mb-5 btn-block">Edit
                                        Profile</Link></h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Profile;