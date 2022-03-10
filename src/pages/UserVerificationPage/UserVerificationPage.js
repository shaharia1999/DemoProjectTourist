import React, {Component,Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import UserVerification from "../../component/login/UserVerification";
import Footer from "../../component/common/footer/Footer";
import {Redirect} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";

class UserVerificationPage extends Component {
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
                <UserVerification/>
                <Footer/>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default UserVerificationPage;