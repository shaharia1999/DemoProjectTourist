import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";

class Registration extends Component {


    constructor(props) {
        super(props);
        this.state={
            user_name:"",
            user_email:"",
            user_mobile:"",
            user_password:"",
            confirm_password:"",
        };
    }

    user_nameOnChange=(event)=>{
        let user_name=event.target.value;
        this.setState(({user_name:user_name}))
    }
    user_emailOnChange=(event)=>{
        let user_email=event.target.value;
        this.setState(({user_email:user_email}))
    }
    user_mobileOnChange=(event)=>{
        let user_mobile=event.target.value;
        this.setState(({user_mobile:user_mobile}))
    }
    user_passwordOnChange=(event)=>{
        let user_password=event.target.value;
        this.setState(({user_password:user_password}))
    }
    userConfirm_passwordOnChange=(event)=>{
        let confirm_password=event.target.value;
        this.setState(({confirm_password:confirm_password}))
    }

    onFromRegistrationSubmit=(event)=>{
        let MobileRegx=/^(?:\+?88|0088)?01[13-9]\d{8}$/;
        let user_name=this.state.user_name;
        let user_email=this.state.user_email;
        let user_mobile=this.state.user_mobile;
        let user_password=this.state.user_password;
        let confirm_password=this.state.confirm_password;

        let RegistrationBtn=document.getElementById('RegistrationBtn');
        let RegistrationForm=document.getElementById('RegistrationForm');

        if (user_name.length===0){
            toast.error('Name is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }
        else if(user_email.length===0){
            toast.error('Email is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }
        else if(user_mobile.length===0){
            toast.error('Mobile is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }
        else if(user_mobile.length!==11){
            toast.error('Mobile 11 digit is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }

        else if(!(MobileRegx).test(user_mobile)){
            toast.error("Invalid Mobile Number",{
                position: "top-center",
                autoClose: 2000,
            });
        }


        else if(user_password.length===0){
            toast.error('Password is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }

        else if(user_password.length<6){
            toast.error('Password 6 digit Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }

        else if(user_password!==confirm_password){
            toast.error('Confirm Password not match!', {
                position: "top-center",
                autoClose: 2000,
            });
        }

        else{
            RegistrationBtn.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("name",user_name);
            MyFormData.append("email",user_email);
            MyFormData.append("mobile",user_mobile);
            MyFormData.append("password",user_password);

            axios.post(ApiUrl.Registration,MyFormData).then(function (response) {
                if(response.status===200){
                    toast.success('Registration Successful', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    RegistrationBtn.innerHTML="Registration";
                   /* RegistrationForm.reset();*/
                }

                else if(response.status===409){
                    toast.error('Email Already Used', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    RegistrationBtn.innerHTML="Registration";
                }

                else if(response.status===302){
                    toast.error('Phone Number Already Used', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    RegistrationBtn.innerHTML="Registration";
                }

                else{
                    toast.error('Request Fail ! Try Again', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    RegistrationBtn.innerHTML="Registration";
                }
            }).catch(function (error) {
                toast.error('Request Fail ! Try Again', {
                    position: "top-center",
                    autoClose: 2000,
                });
                RegistrationBtn.innerHTML="Registration";
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form id="RegistrationForm" onSubmit={this.onFromRegistrationSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input onChange={this.user_nameOnChange} type="text" className="form-control placeholder-text" placeholder="Your Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.user_emailOnChange} type="email" className="form-control placeholder-text" placeholder="Enter Your Email"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.user_mobileOnChange} type="text" className="form-control placeholder-text" placeholder="Enter Mobile Number"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.user_passwordOnChange} type="password" className="form-control placeholder-text" placeholder="Enter Password"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.userConfirm_passwordOnChange} type="password" className="form-control placeholder-text" placeholder="Enter Confirm Password"/>
                                </div>
                                <Button id="RegistrationBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">Registration</Button>
                            </Form>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default Registration;