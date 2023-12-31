import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Redirect} from "react-router-dom";
import {toast,ToastContainer} from "react-toastify";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class ForgetPasswordVerify extends Component {
    constructor() {
        super();
        this.state={
            UserID: sessionStorage.getItem('UserID'),
            userRedirect:false,
            OtpCode:"",
        }

    }

    onUserRedirect(){
        if(this.state.userRedirect===true){
            return(
                <Redirect to="/forgot-password-set"/>
            )
        }
    }

    OtpOnChange=(event)=>{
        let OtpCode=event.target.value;
        this.setState(({OtpCode:OtpCode}));
    }


    onForgetOTPVerifyFromSubmit=(event)=> {
        let UserID = this.state.UserID;
        let OtpCode = this.state.OtpCode;
        let OtpBtn = document.getElementById('OtpBtn');
        let OtpForm = document.getElementById('OtpForm');

        if (OtpCode.length === 0) {
            toast.error('Otp Code is Required !', {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if(OtpCode.length!== 6){
            toast.error('Otp 6 Digit Code is Required !', {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
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

            axios.post(ApiURL.otpSend,MyFormData).then((response)=> {
                if (response.data.error===false) {
                    toast.success('Verification Successfully', {
                        position: "top-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    this.setState({userRedirect:true});
                    OtpForm.reset();
                }
                else{
                    toast.success(response.data.message, {
                        position: "top-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    OtpBtn.innerHTML = "Verify";
                    this.setState({userRedirect:false});
                }
            }).catch((error)=> {
                toast.error('Verification not Successfully', {
                    position: "top-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
                OtpBtn.innerHTML = "Verify";
                this.setState({userRedirect:false});
            })
        }
        event.preventDefault();
    }


    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form id="OtpForm" onSubmit={this.onForgetOTPVerifyFromSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input onChange={this.OtpOnChange} type="text" className="form-control placeholder-text" placeholder="Enter Your OTP"/>
                                </div>
                                <Button id="OtpBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">VERIFY</Button>
                            </Form>
                            <h1 className="forgotText text-center mb-5 mt-3"> <p className="signUpText">Resend</p> </h1>
                        </Col>
                    </Row>
                    <ToastContainer/>
                </Container>
                {this.onUserRedirect()}
            </Fragment>
        );
    }
}

export default ForgetPasswordVerify;