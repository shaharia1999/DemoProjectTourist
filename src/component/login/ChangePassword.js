import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state={
            current_pass:"",
            new_pass:"",
            confirm_pass:"",
            userProfileRedirect:false,
            UserID: sessionStorage.getItem('UserID'),
        };
    }

    currentPasswordOnChange=(event)=>{
        let current_pass=event.target.value;
        this.setState(({current_pass:current_pass}))
    }

    newPasswordOnChange=(event)=>{
        let new_pass=event.target.value;
        this.setState(({new_pass:new_pass}))
    }

    Confirm_passwordOnChange=(event)=>{
        let confirm_pass=event.target.value;
        this.setState(({confirm_pass:confirm_pass}))
    }

    onChangePasswordSubmit=(event)=>{
        let UserID = this.state.UserID;
        let current_pass=this.state.current_pass;
        let new_pass=this.state.new_pass;
        let confirm_pass=this.state.confirm_pass;

        let changePassBtn=document.getElementById('changePassBtn');
        let ChangePasswordForm=document.getElementById('ChangePasswordForm');

        if(current_pass.length===0){
            toast.error('Current Password is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 2000,
            });
        }
        else if(new_pass.length===0){
            toast.error('New Password is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(confirm_pass.length===0){
            toast.error('Confirm Password is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else if(new_pass!==confirm_pass){
            toast.error('Confirm Password does not match!', {
                position: "top-center",
                theme:"colored",
                autoClose: 3000,
            });
        }
        else{
            ChangePasswordForm.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("old_password",current_pass);
            MyFormData.append("new_password",new_pass);

            axios.put(ApiUrl.changePassword+UserID+"/",MyFormData).then((response)=>{
                if(response.status===200){
                    toast.success('Password Change Successful', {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 3000,
                    });
                    ChangePasswordForm.reset();
                }
                else{
                    toast.success('Not change', {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 3000,
                    });
                    changePassBtn.innerHTML="Change Password";
                }
            }).catch((error)=> {

            });
        }
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form id="ChangePasswordForm" onSubmit={this.onChangePasswordSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input onChange={this.currentPasswordOnChange} type="text" className="form-control placeholder-text" placeholder="Enter Current Password"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.newPasswordOnChange} type="text" className="form-control placeholder-text" placeholder="Enter New Password"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.Confirm_passwordOnChange} type="text" className="form-control placeholder-text" placeholder="Enter Confirm Password"/>
                                </div>
                                <button id="changePassBtn" className="btn SendBtnColorText mb-5 btn-block">Change Password</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default ChangePassword;