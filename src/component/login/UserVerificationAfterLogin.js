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
            ResendTime: sessionStorage.getItem('ResendTime'),
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

    componentDidMount() {
        this.ResendTime();
    }


    ResendTime=()=>{
        var time = 300; // This is the time allowed
        var saved_countdown = localStorage.getItem('saved_countdown');
        if(saved_countdown == null) {
            // Set the time we're counting down to using the time allowed
            var new_countdown = new Date().getTime() + (time + 2) * 1000;
            time = new_countdown;
            localStorage.setItem('saved_countdown', new_countdown);
        } else {
            time = saved_countdown;
        }

        // Update the count down every 1 second
        var x = setInterval(() => {
            var now = new Date().getTime();
            var distance = time - now;

            let seconds = 1000;
            let minutes = seconds * 60;
            let timeMinutes = Math.floor((distance / minutes))
            var timeSeconds = Math.floor((distance % minutes) / seconds)

            timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
            timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

            let demo = document.getElementById('demo');

            demo.innerHTML = timeMinutes + ":" + timeSeconds;

            document.getElementById("Resend").style.visibility = "hidden";

            if (distance <= 0) {
                clearInterval(x);
                localStorage.removeItem('saved_countdown');
                document.getElementById("Resend").style.visibility = "visible";
                document.getElementById("demo").style.visibility = "hidden";
            }

        }, 1000);
    }

    ResendOnClick=()=>{
        let UserIDForVerify = this.state.UserIDForVerify;
        axios.put(ApiURL.otpResend+UserIDForVerify+"/").then((response)=> {
            if (response.data.error===false){
                document.getElementById("demo").innerHTML = "01:10" ;
                this.ResendTime();
                document.getElementById("Resend").style.visibility = "hidden";
                document.getElementById("demo").style.visibility = "visible";
            }
        }).catch((error)=> {

        })
    }

    onOTPFromSubmit=(event)=> {
        let UserIDForVerify = this.state.UserIDForVerify;
        let OtpCodeForVerify = this.state.OtpCodeForVerify;

        let OtpBtn = document.getElementById('OtpBtn');
        let OtpForm = document.getElementById('OtpForm');
        let Resend = document.getElementById('Resend');
        let demo = document.getElementById('demo');

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
                    Resend.remove();
                    demo.remove();
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
                            </Form>
                            <div className="text-center">
                                <h1 id="demo" className="forgotText text-center mb-1 mt-3"> <p className="signUpText"></p> </h1>
                                <h6 onClick={this.ResendOnClick} className="forgotText text-white bg-white mb-1 mt-0"> <p id="Resend" className="signUpText">Resend</p> </h6>
                            </div>
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