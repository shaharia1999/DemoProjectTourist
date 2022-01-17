import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import ApiURL from "../../api/ApiURL";

class ForgetPassword extends Component {
    constructor() {
        super();
        this.state={
            mobileNumber:"",
            userRedirect:false,
        }
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    mobileNumberOnChange=(event)=>{
        let mobileNumber=event.target.value;
        this.setState(({mobileNumber:mobileNumber}));
    }

    onUserRedirect(){
        if(this.state.userRedirect===true){
            return(
                <Redirect to="/forget-password-verify"/>
            )
        }
    }

    onResetFromSubmit=(event)=> {
        let mobileNumber = this.state.mobileNumber;

        let NextBtn = document.getElementById('NextBtn');
        let ForgetPasswordForm = document.getElementById('ForgetPasswordForm');

        if (mobileNumber.length === 0) {
            toast.error('Mobile Number is Required !', {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            NextBtn.innerHTML = "Sending...";
            let MyFormData = new FormData();
            MyFormData.append("mobile", mobileNumber);

            axios.post(ApiURL.ResetPasswordForMobile,MyFormData).then((response)=> {
                if (response.data.error===false) {
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
                    this.setState({userRedirect:true});
                    ForgetPasswordForm.reset();
                }
                else if (response.data.status===401) {
                    toast.success('User Not Found!', {
                        position: "top-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    NextBtn.innerHTML = "NEXT";
                    this.setState({userRedirect:false});
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
                    NextBtn.innerHTML = "NEXT";
                    this.setState({userRedirect:false});
                }
            }).catch((error)=> {
                toast.error('User Not Found!', {
                    position: "top-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
                NextBtn.innerHTML = "NEXT";
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
                            <Form id="ForgetPasswordForm" onSubmit={this.onResetFromSubmit}>
                                <img className="LoginCardPorzotokImg mt-5" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input onChange={this.mobileNumberOnChange} type="text" className="form-control placeholder-text" placeholder="Enter Mobile Number"/>
                                </div>
                                <Button id="NextBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">NEXT</Button>
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

export default ForgetPassword;