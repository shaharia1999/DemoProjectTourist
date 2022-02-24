import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class EditProfile extends Component {
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
                    gender: response.data.data.gender,
                    user_national_id_card: response.data.data.user_national_id_card,
                    date_of_birth: response.data.data.date_of_birth,
                    user_short_address: response.data.data.user_short_address,
                    user_image: response.data.data.user_image,
                });
            }
        }).catch(error => {

        });

    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value={this.state.user_phone} disabled />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value={this.state.user_name} placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control placeholder-text" value={this.state.user_email} placeholder="Enter Your Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value={this.state.user_national_id_card} placeholder="Enter NID Number"/>
                                </div>

                                {(() => {
                                    if (this.state.gender==="1") {
                                        return (
                                            <div className="form-group">
                                                <select id="" className="form-control">
                                                    <option value="">select gender</option>
                                                    <option value="1" selected>Male</option>
                                                    <option value="2">Female</option>
                                                    <option value="3">Other</option>
                                                </select>
                                            </div>
                                        )
                                    } else if (this.state.gender==="2") {
                                        return (
                                            <div className="form-group">
                                                <select id="" className="form-control">
                                                    <option value="">select gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="2" selected>Female</option>
                                                    <option value="3">Other</option>
                                                </select>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="form-group">
                                                <select id="" className="form-control">
                                                    <option value="" selected>select gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                    <option value="3">Other</option>
                                                </select>
                                            </div>
                                        )
                                    }
                                })()}

                                <div className="form-group">
                                    <input type="date" value={this.state.date_of_birth} className="form-control placeholder-text" />
                                </div>
                                <div className="form-group">
                                    <select id="" className="form-control">
                                        <option value="">Choose City</option>
                                        <option value="">Dhaka</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Khulna">Khulna</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control placeholder-text" value="Banasree, Block 1, Rampura" placeholder="Enter Password"/>
                                </div>
                                <Button className="btn SendBtnColorText mb-5 btn-block">Save Profile</Button>
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

export default EditProfile;