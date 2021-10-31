import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import img1 from "../../asset/images/img1.png";
import {BiIdCard,
        FaUserFriends,
        GiModernCity,
        GoCalendar,
        GoDeviceMobile,
        HiOutlineMail,
        IoLocationOutline
} from "react-icons/all";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="ProfileCard shadow-sm">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form>
                                <img className="profileImg mt-4" src={img1} alt=""/>
                                <div className="mt-5">
                                    <h6 className="profileTxt2"><GoDeviceMobile/> Mobile No:<span className="profileTxt"> 01792706304</span></h6>
                                    <h6 className="profileTxt2"><FaUser/> Full Name:<span className="profileTxt"> Monirul Islam Akand</span></h6>
                                    <h6 className="profileTxt2"><HiOutlineMail/> Email:<span className="profileTxt"> monirul@arenawebsecurity.net</span></h6>
                                    <h6 className="profileTxt2"><BiIdCard/> NID Number:<span className="profileTxt"> 1234567890</span></h6>
                                    <h6 className="profileTxt2"><FaUserFriends/> Gender:<span className="profileTxt"> Male</span></h6>
                                    <h6 className="profileTxt2"><GoCalendar/> Date of Birth:<span className="profileTxt"> 01/11/2021</span></h6>
                                    <h6 className="profileTxt2"><GiModernCity/> City:<span className="profileTxt"> Dhaka</span></h6>
                                    <h6 className="profileTxt2"><IoLocationOutline/> Address:<span className="profileTxt"> Banasree, Block A, Dhaka</span></h6>
                                </div>
                                <h1><Link to="/editProfile" className="btn ProfileEditBtnColorText mb-5 btn-block">Edit Profile</Link></h1>
                            </Form>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Profile;