import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import ApiURL from "../../api/ApiURL";
import axios from "axios";
class UserVerification extends Component {
    constructor() {
        super();
        this.state={
            OtpCode:"",
            userRedirect:false,
            UserID: sessionStorage.getItem('UserID'),
        }
        console.log(this.state.UserID);
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    OtpOnChange=(event)=>{
        let OtpCode=event.target.value;
        this.setState(({OtpCode:OtpCode}));
    }

    onUserRedirect(){
        if(this.state.userRedirect===true){
            return(
                <Redirect to="/userLogin"/>
            )
        }
    }

    onOTPFromSubmit = (event) => {
        let UserID = this.state.UserID;
        let OtpCode = this.state.OtpCode;

        let OtpBtn = document.getElementById('OtpBtn');
        let OtpForm = document.getElementById('OtpForm');

        if (OtpCode.length === 0) {
            toast.error('Otp Code is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if(OtpCode.length!== 6){
            toast.error('Otp 6 Digit Code is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            OtpBtn.innerHTML = "Verifying...";

            let MyFormData = new FormData();
            MyFormData.append("user_id", UserID);
            MyFormData.append("code", OtpCode);

            console.log(MyFormData);

            axios.post(ApiURL.otpSend,MyFormData).then((response)=> {
                if (response.data.error===false) {
                    toast.success('Verification Successfully', {
                        position: "bottom-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    this.setState({userRedirect:true});
                    OtpBtn.innerHTML = "OTP VERIFICATION";
                    OtpForm.reset();
                }
                else{
                    toast.success(response.data.message, {
                        position: "bottom-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    OtpBtn.innerHTML = "OTP VERIFICATION";
                    OtpForm.reset();
                }
            }).catch((error)=> {
                toast.error('Verification not Successfully', {
                    position: "bottom-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
                OtpForm.innerHTML = "OTP VERIFICATION";
            })
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
                            <Form id="OtpForm" onSubmit={this.onOTPFromSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input type="text" onChange={this.OtpOnChange} className="form-control placeholder-text" placeholder="Enter Your OTP"/>
                                </div>
                                <Button id="OtpBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">OTP VERIFICATION</Button>
                            </Form>
                            <h1 className="forgotText text-center mb-5 mt-3"> <p className="signUpText">Resend</p> </h1>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserVerification;