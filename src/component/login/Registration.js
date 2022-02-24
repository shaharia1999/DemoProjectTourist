import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {Redirect} from "react-router-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_name:"",
            user_email:"",
            user_mobile:"",
            user_password:"",
            confirm_password:"",
            refer_code:"",
            userRedirect: false,
        };
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    onUserRedirect(){
        if(this.state.userRedirect===true){
            return(
                <Redirect to="/user-verification"/>
            )
        }
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
    refer_codeOnChange=(event)=>{
        let refer_code=event.target.value;
        this.setState(({refer_code:refer_code}))
    }

    onFromRegistrationSubmit=(event)=>{
        let NumberRegx=/^\d+$/;
        let user_name=this.state.user_name;
        let user_email=this.state.user_email;
        let user_mobile=this.state.user_mobile;
        let user_password=this.state.user_password;
        let confirm_password=this.state.confirm_password;
        let refer_code=this.state.refer_code;

        let RegistrationBtn=document.getElementById('RegistrationBtn');
        let RegistrationForm=document.getElementById('RegistrationForm');

        if (user_name.length===0){
            toast.error('Name is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(user_email.length===0){
            toast.error('Email is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(user_mobile.length===0){
            toast.error('Mobile is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(user_mobile.length!==11){
            toast.error('Mobile 11 digit is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(!(NumberRegx).test(user_mobile)){
            toast.error("Invalid Mobile Number",{
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(user_password.length===0){
            toast.error('Password is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(user_password.length<6){
            toast.error('Password 6 digit Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(user_password!==confirm_password){
            toast.error('Confirm Password not match!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else{
            RegistrationBtn.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("name",user_name);
            MyFormData.append("email",user_email);
            MyFormData.append("mobile",user_mobile);
            MyFormData.append("password",user_password);
            MyFormData.append("ref_code",refer_code);

            axios.post(ApiUrl.Registration,MyFormData).then((response)=> {
                if(response.data.error===false){
                    toast.success(response.data.message, {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 3000,
                    })
                    RegistrationBtn.innerHTML="Registration";
                    sessionStorage.setItem("UserID",response.data.data.user_id);
                    this.setState({userRedirect:true});
                }
                else{
                    toast.error(response.data.message, {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 3000,
                    })
                    RegistrationBtn.innerHTML="Registration";
                }
            }).catch((error)=> {
                if (error.response) {
                    toast.error(error.response.data.message,{
                        position: "top-center",
                        theme:"colored",
                        autoClose: 3000,
                    });
                    RegistrationBtn.innerHTML="Registration";
                }
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm border-0 pt-4 pb-4">
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
                                <div className="form-group">
                                    <input onChange={this.refer_codeOnChange} type="text" className="form-control placeholder-text" placeholder="Enter Refer Code"/>
                                </div>
                                <Button id="RegistrationBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">Registration</Button>
                            </Form>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
                {this.onUserRedirect()}
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default Registration;