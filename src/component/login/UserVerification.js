import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Redirect} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiURL from "../../api/ApiURL";
import axios from "axios";
class UserVerification extends Component {
    constructor() {
        super();
        this.state={
            minutes:"00",
            seconds:"00",
            OtpCode:"",
            userRedirect:false,
            UserID: sessionStorage.getItem('UserID'),
            ResendTime: sessionStorage.getItem('ResendTime'),
        }
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    OtpOnChange=(event)=>{
        let OtpCode=event.target.value;
        this.setState(({OtpCode:OtpCode}));
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
       var time = 60; // This is the time allowed
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

           var seconds = 1000;
           var minutes = seconds * 60;
           var timeMinutes = Math.floor((distance / minutes))
           var timeSeconds = Math.floor((distance % minutes) / seconds)

           timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
           timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

           if (distance>0) {
               this.setState({minutes: timeMinutes});
               this.setState({seconds: timeSeconds});
               document.getElementById("Resend").style.visibility = "hidden";
           }else if (distance <= 0) {
               clearInterval(x);
               localStorage.removeItem('saved_countdown');
               document.getElementById("Resend").style.visibility = "visible";
               document.getElementById("demo").style.visibility = "hidden";
           }

       }, 1000);
   }

   ResendOnClick=()=>{
       let UserID = this.state.UserID;
       axios.put(ApiURL.otpResend+UserID+"/").then((response)=> {
           if (response.data.error===false){
               this.ResendTime();
               document.getElementById("Resend").style.visibility = "hidden";
               document.getElementById("demo").style.visibility = "visible";
           }
       }).catch((error)=> {

       })
   }

   /* componentDidMount() {
        function showCountdown(countSeconds)
        {
            var countStatus = new Date(1000 * countSeconds).toISOString().substr(11, 8);
            document.getElementById('output').innerHTML = countStatus;
        }
        var count = 20;
        function countdown() {
            // starts countdown
            if (count === 0) {
                return document.getElementById('output').innerHTML = "Resend";
            }
            count--;
            setTimeout(countdown, 1000);
            showCountdown(count);
        };
        countdown();
    }*/


    onOTPFromSubmit=(event)=> {
        let UserID = this.state.UserID;
        let OtpCode = this.state.OtpCode;

        let OtpBtn = document.getElementById('OtpBtn');
        let OtpForm = document.getElementById('OtpForm');
        let Resend = document.getElementById('Resend');
        let demo = document.getElementById('demo');

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
                                <h1 id="demo" className="forgotText text-center mb-1 mt-3"> <p className="signUpText">{this.state.minutes}:{this.state.seconds}</p> </h1>
                                <h6 onClick={this.ResendOnClick} className="forgotText btn text-white bg-white mb-1 mt-0"> <p id="Resend" className="signUpText">Resend</p> </h6>
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

export default UserVerification;