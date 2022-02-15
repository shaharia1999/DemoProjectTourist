import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import img1 from "../../asset/images/img1.png";
import {
    BiIdCard,
    FaUserFriends,
    GiModernCity,
    GoCalendar,
    GoDeviceMobile,
    HiOutlineMail,
    IoLocationOutline
} from "react-icons/all";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user_id: sessionStorage.getItem('UserID'),
            user_name:"",
            user_email:"",
            user_phone:"",
            gender:"",
            user_national_id_card:"",
            date_of_birth:"",
            user_short_address:"",
            user_image:"",
        }
    }

    componentDidMount() {
        let user_id=this.state.user_id;
        axios.get(ApiURL.UserProfileView + user_id + '/').then((response) => {
            if (response.data.error===false){
                this.setState({
                    user_name: response.data.data.user_name,
                    user_email: response.data.data.user_email,
                    user_phone: response.data.data.user_phone,
                    user_national_id_card: response.data.data.user_national_id_card,
                    date_of_birth: response.data.data.date_of_birth,
                    user_short_address: response.data.data.user_short_address,
                    user_image: response.data.data.user_image,
                });

                if (response.data.data.gender==='1'){
                    this.setState({gender:'Male'});
                }else if (response.data.data.gender==='2'){
                    this.setState({gender:'Female'});
                }else if (response.data.data.gender==='3'){
                    this.setState({gender:'Other'});
                }
            }
        }).catch(error => {

        });

    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="ProfileCard shadow-sm">
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <div>
                                <img className="profileImg mt-4" src={img1} alt=""/>
                                <div className="mt-5">
                                    <h6 className="profileTxt2"><GoDeviceMobile/> Mobile No:<span
                                        className="profileTxt"> {this.state.user_phone}</span></h6>
                                    <h6 className="profileTxt2"><FaUser/> Full Name:<span className="profileTxt"> {this.state.user_name}</span>
                                    </h6>
                                    <h6 className="profileTxt2"><HiOutlineMail/> Email:<span
                                        className="profileTxt"> {this.state.user_email}</span></h6>
                                    <h6 className="profileTxt2"><BiIdCard/> NID Number:<span
                                        className="profileTxt"> 1234567890</span></h6>
                                    <h6 className="profileTxt2"><FaUserFriends/> Gender:<span
                                        className="profileTxt"> {this.state.gender}</span></h6>
                                    <h6 className="profileTxt2"><GoCalendar/> Date of Birth:<span
                                        className="profileTxt"> 01/11/2021</span></h6>
                                    <h6 className="profileTxt2"><GiModernCity/> City:<span
                                        className="profileTxt"> Dhaka</span></h6>
                                    <h6 className="profileTxt2"><IoLocationOutline/> Address:<span
                                        className="profileTxt"> Banasree, Block A, Dhaka</span></h6>
                                </div>
                                <h1><Link to="/editProfile" className="btn ProfileEditBtnColorText mb-5 btn-block">Edit
                                    Profile</Link></h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Profile;