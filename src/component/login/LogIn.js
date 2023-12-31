import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import Porzotok from "../../asset/images/Porzotok.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {Link, Redirect} from "react-router-dom";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_mobile:"",
            user_password:"",
            userProfileRedirect:false,
            userOtpVerificationRedirect:false,
            FaqModal1:false,
            FaqModal2:false,
            FaqModal3:false,
            open: true,
            open1: true,
            open2: true,
            CountryData: [],
            StateData: [],
            CityData:[],
            StateByCity:''
        };
    }


    onUserProfileRedirect(){
        if(this.state.userProfileRedirect===true){
            return(
                <Redirect to="/profile"/>
            )
        }
    }
    handleClose1=()=>{
        this.setState({ FaqModal1:false})
        
    }

    handleOpen1=()=>{
        this.setState({ FaqModal1:true})
        console.log('data');
    }

    handleClose2=()=>{
        this.setState({ FaqModal2:false})
    }
    handleOpen2=()=>{
        this.setState({ FaqModal2:true})
    }

    handleClose3=()=>{
        this.setState({ FaqModal3:false})
    }
    handleOpen3=()=>{
        this.setState({ FaqModal3:true})
    }
    onUserOtpVerificationRedirect(){
        if(this.state.userOtpVerificationRedirect===true){
            return(
               <Redirect to="/user-verification-after-login"/>
            )
        }
    }

    mobileLoginOnChange=(event)=>{
        let user_mobile=event.target.value;
        this.setState(({user_mobile:user_mobile}))
    }

    passwordLoginOnChange=(event)=>{
        let user_password=event.target.value;
        this.setState(({user_password:user_password}))
    }

    onLoginSubmit=(event)=>{
        let MobileRegx=/^(?:\+?88|0088)?01[13-9]\d{8}$/;
        let user_mobile=this.state.user_mobile;
        let user_password=this.state.user_password;

        let LogInBtn=document.getElementById('LogInBtn');
        let LoginForm=document.getElementById('LoginForm');

        if(user_mobile.length===0){
            toast.error('Mobile is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 2000,
            });
        }

        else if(user_mobile.length!==11){
            toast.error('Mobile 11 digit is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 2000,
            });
        }

        else if(!(MobileRegx).test(user_mobile)){
            toast.error("Invalid Mobile Number",{
                position: "top-center",
                theme:"colored",
                autoClose: 2000,
            });
        }

        else if(user_password.length===0){
            toast.error('Password is Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 2000,
            });
        }

        else if(user_password.length<6){
            toast.error('Password 6 digit Required!', {
                position: "top-center",
                theme:"colored",
                autoClose: 2000,
            });
        }

        else{
            LogInBtn.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("mobile",user_mobile);
            MyFormData.append("password",user_password);

            axios.post(ApiUrl.UserLogin,MyFormData).then((response)=>{
                if(response.status===200){
                    toast.success('Login Successful', {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 2000,
                    });
                    sessionStorage.setItem("UserID",response.data.data.user_id);
                    sessionStorage.setItem("UserPhone",response.data.data.user_phone);
                    sessionStorage.setItem("UserName",response.data.data.user_name);
                    sessionStorage.setItem("AccessToken",response.data.access_token);
                    sessionStorage.setItem("IsActive",response.data.data.is_active);
                    this.setState({userProfileRedirect:true});
                    LoginForm.reset();
                }

                else if(response.status===400){
                    toast.error('Phone Number or Password Not Match!', {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 2000,
                    });
                    LogInBtn.innerHTML="Login";
                }
                else if(response.status===201){
                    sessionStorage.setItem("UserID",response.data.data.user_id);
                    sessionStorage.setItem("UserPhone",response.data.data.user_phone);
                    sessionStorage.setItem("UserName",response.data.data.user_name);
                    sessionStorage.setItem("AccessToken",response.data.access_token);
                    sessionStorage.setItem("IsActive",response.data.data.is_active);
                    this.setState({userOtpVerificationRedirect:true});
                    LoginForm.reset();
                }

                else{
                    toast.error('Login Fail ! Try Again', {
                        position: "top-center",
                        theme:"colored",
                        autoClose: 2000,
                    });
                    LogInBtn.innerHTML="Login";
                }
            }).catch((error)=> {
               toast.error('Login Fail ! Try Again', {
                    position: "top-center",
                    theme:"colored",
                    autoClose: 2000,
               });
                LogInBtn.innerHTML="Login";
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm border-0 pt-4 pb-4">
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form id="LoginForm" onSubmit={this.onLoginSubmit}>
                                <img className="LoginCardPorzotokImg mt-4" src={Porzotok} alt=""/>
                                <div className="form-group">
                                    <input onChange={this.mobileLoginOnChange} type="text" className="form-control placeholder-text" placeholder="Your Mobile Number"/>
                                </div>
                                <div className="form-group">
                                    <input type={this.state.type} onChange={this.passwordLoginOnChange} type="password" className="form-control placeholder-text inputPassword" placeholder="Enter Password"/>
                                </div>
                                {/* <Button id="LogInBtn" type="submit" className="btn SendBtnColorText btn-block">Login</Button> */}
                                <Button id="LogInBtn" onClick={this.handleOpen1}  className="btn SendBtnColorText btn-block  cursor-pointer">Login</Button>
                            </Form>
                            <h1 className="forgotText text-center mt-3"> <Link to="/forget-password" className="signUpText">Forgot Password</Link> </h1>
                            <h1 className="forgotText text-center mt-3 mb-4"> Don't Have an Account ? <Link to="/sign-up" className="signUpText">SignUp</Link></h1>
                        </Col>
                    </Row>
                    {this.onUserProfileRedirect()}
                    {this.onUserOtpVerificationRedirect()}
                

                </Container>
                <Modal size="lg" show={this.state.FaqModal1} aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose1}>
                        <Modal.Header closeButton>
                            <h6> </h6>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <p className="notificationQuestion">Sorry Sir       !!!!!!!! !</p>
                            <p className="notificationDes text-justify">HEY THERE, THIS IS ONLY FOR  VISIONAL WEBSITE</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="notificationModalBtn btn-sm" variant="danger" onClick={this.handleClose1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                <ToastContainer/>
                
            </Fragment>
        );
    }
}

export default LogIn;