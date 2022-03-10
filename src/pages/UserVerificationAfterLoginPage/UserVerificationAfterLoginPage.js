import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import UserVerificationAfterLogin from "../../component/login/UserVerificationAfterLogin";
import {Redirect} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";

class UserVerificationAfterLoginPage extends Component {
    constructor() {
        super();
        this.state={
            RedirectStatus:false,
        }
    }

    pageRedirect=()=>{
        if (this.state.RedirectStatus===true){
            return(
                <Redirect to="/user-login" />
            )
        }
    }

    componentDidMount() {
        window.scroll(0,0);
        let UserID=SessionHelper.GetUserID();
        if (UserID===null){
            this.setState({RedirectStatus:true})
        }
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <UserVerificationAfterLogin/>
                <Footer/>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default UserVerificationAfterLoginPage;