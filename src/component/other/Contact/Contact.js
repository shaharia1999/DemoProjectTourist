import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiUrl from "../../../api/ApiURL";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            contact_name:"",
            contact_mobile:"",
            contact_msg:"",
        };
    }

    contact_nameOnChange=(event)=>{
        let contact_name=event.target.value;
        this.setState(({contact_name:contact_name}));
    }
    contact_mobileOnChange=(event)=>{
        let contact_mobile=event.target.value;
        this.setState(({contact_mobile:contact_mobile}));
    }
    contact_msgOnChange=(event)=>{
        let contact_msg=event.target.value;
        this.setState(({contact_msg:contact_msg}));
    }

    onFromContactSubmit=(event)=>{
        let MobileRegx=/^(?:\+?88|0088)?01[13-9]\d{8}$/;
        let contact_name=this.state.contact_name;
        let contact_mobile=this.state.contact_mobile;
        let contact_msg=this.state.contact_msg;

        let ContactBtn=document.getElementById('ContactBtn');
        let ContactForm=document.getElementById('ContactForm');

        if (contact_name.length===0){
            toast.error('Name is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }
        else if(contact_mobile.length===0){
            toast.error('Mobile is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }
        else if(contact_msg.length===0){
            toast.error('Massage is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }
        else if(contact_mobile.length!==11){
            toast.error('Mobile 11 digit is Required!', {
                position: "top-center",
                autoClose: 2000,
            });
        }

        else if(!(MobileRegx).test(contact_mobile)){
            toast.error("Invalid Mobile Number",{
                position: "top-center",
                autoClose: 2000,
            });
        }

        else{
            ContactBtn.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("name",contact_name);
            MyFormData.append("mobile",contact_mobile);
            MyFormData.append("msg",contact_msg);

            axios.post(ApiUrl.Contact,MyFormData).then(function (response) {
                if(response.code===200){
                    toast.success('Contact Send Successful', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    ContactBtn.innerHTML="SEND";
                    /* RegistrationForm.reset();*/
                }
                else{
                    toast.error('Request Fail ! Try Again', {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    ContactBtn.innerHTML="SEND";
                }
            }).catch(function (error) {
                toast.error('Request Fail ! Try Again', {
                    position: "top-center",
                    autoClose: 2000,
                });
                ContactBtn.innerHTML="SEND";
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container className="">
                    <Breadcrumb className="mt-2">
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbText"> <Link to="/contact">Contact</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <h4 className="text-center font26 m-3">Contact & Address</h4>
                    <Row className="shadow-sm contactCardPadding p-4">
                        <Col className="text-center mt-3" xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Form id="ContactForm" onSubmit={this.onFromContactSubmit}>
                                <div className="form-group">
                                    <input onChange={this.contact_nameOnChange} type="text" className="form-control placeholderApplyText py-md-4 py-sm-4 py-4" placeholder="Your name"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.contact_mobileOnChange} className="form-control placeholderApplyText py-md-4 py-sm-4 py-4" placeholder="Mobile Number"/>
                                </div>
                                <div className="form-group">
                                    <textarea onChange={this.contact_msgOnChange} type="text" className="form-control placeholderApplyText py-md-4 py-sm-4 py-4" placeholder="Massage"/>
                                </div>
                                <Button id="ContactBtn" type="submit" className="btn btn-block SendBtnColorText">SEND</Button>
                            </Form>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-3">
                            <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.492105191644!2d90.4251011154022!3d23.765484494115892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1631611812115!5m2!1sen!2sbd"></iframe>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default Contact;