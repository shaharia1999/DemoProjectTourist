import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {Redirect} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class ForgotPasswordSet extends Component {
    constructor() {
        super();
        this.state={
            UserID: sessionStorage.getItem('UserID'),
            userRedirect:false,
            NewPassword:"",
            NewConfirmPassword:"",
        }
    }

    onUserRedirect(){
        if(this.state.userRedirect===true){
            return(
                <Redirect to="/"/>
            )
        }
    }

    NewPasswordOnChange=(event)=>{
        let NewPassword=event.target.value;
        this.setState(({NewPassword:NewPassword}));
    }

    NewConfirmPasswordOnChange=(event)=>{
        let NewConfirmPassword=event.target.value;
        this.setState(({NewConfirmPassword:NewConfirmPassword}));
    }

    onPasswordSetFromSubmit=(event)=> {
        let UserID = this.state.UserID;
        let NewPassword = this.state.NewPassword;
        let NewConfirmPassword = this.state.NewConfirmPassword;
        let PasswordBtn = document.getElementById('PasswordBtn');
        let ConfirmPasswordForm = document.getElementById('ConfirmPasswordForm');

        if (NewPassword.length === 0) {
            toast.error('New Password is Required !', {
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
        else if (NewPassword!==NewConfirmPassword) {
            toast.error('Confirm Password Not Match !', {
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
            PasswordBtn.innerHTML = "Verifying...";
            let MyFormData = new FormData();
            // MyFormData.append("user_id", UserID);
            MyFormData.append("new_password", NewPassword);

            axios.put(ApiURL.ResetConfirmPasswordSet+UserID+'/',MyFormData).then((response)=> {
                if (response.data.error===false) {
                    toast.success('New Password Set Successfully', {
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
                    ConfirmPasswordForm.reset();
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
                    PasswordBtn.innerHTML = "SET PASSWORD";
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
                PasswordBtn.innerHTML = "SET PASSWORD";
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
                            <Form id="ConfirmPasswordForm" onSubmit={this.onPasswordSetFromSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input onChange={this.NewPasswordOnChange} type="Password" className="form-control placeholder-text" placeholder="Enter new Password"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.NewConfirmPasswordOnChange} type="Password" className="form-control placeholder-text" placeholder="Enter Confirm Password"/>
                                </div>
                                <Button id="PasswordBtn" type="submit" className="btn SendBtnColorText mb-5 btn-block">SET PASSWORD</Button>
                            </Form>
                        </Col>
                    </Row>
                    <ToastContainer/>
                </Container>
                {this.onUserRedirect()}
            </Fragment>
        );
    }
}

export default ForgotPasswordSet;