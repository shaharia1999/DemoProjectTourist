import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Redirect} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class UserVerificationAfterLogin extends Component {
    constructor() {
        super();
        this.state={
            OtpCodeForVerify:"",
            userRedirect:false,
            UserIDForVerify: sessionStorage.getItem('UserIDForVerify'),
        }
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    OtpOnChange=(event)=>{
        let OtpCodeForVerify=event.target.value;
        this.setState(({OtpCodeForVerify:OtpCodeForVerify}));
    }

    onUserRedirect(){
        if(this.state.userRedirect===true){
            return(
                <Redirect to="/user-login"/>
            )
        }
    }

    onOTPFromSubmit=(event)=> {
        let UserIDForVerify = this.state.UserIDForVerify;
        let OtpCodeForVerify = this.state.OtpCodeForVerify;

        let OtpBtn = document.getElementById('OtpBtn');
        let OtpForm = document.getElementById('OtpForm');

        if (OtpCodeForVerify.length === 0) {
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
        } else if(OtpCodeForVerify.length!== 6){
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
            MyFormData.append("user_id", UserIDForVerify);
            MyFormData.append("code", OtpCodeForVerify);

            axios.post(ApiURL.otpSendLogin,MyFormData).then((response)=> {
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
                            <Form id="OtpForm" onSubmit={this.onOTPFromSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input type="text" onChange={this.OtpOnChange} className="form-control placeholder-text" placeholder="Enter Your OTP"/>
                                </div>
                                <Button id="OtpBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">Verify</Button>
                                <h1 className="forgotText text-center mb-5 mt-3"> <p className="signUpText">Resend</p> </h1>
                            </Form>
                        </Col>
                    </Row>
                    {this.onUserRedirect()}
                </Container>
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default UserVerificationAfterLogin;