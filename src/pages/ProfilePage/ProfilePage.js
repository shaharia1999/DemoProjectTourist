import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Profile from "../../component/profile/Profile";
import Footer from "../../component/common/footer/Footer";
import {Redirect} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";

class ProfilePage extends Component {
    constructor({match}) {
        super();
        this.state={
            user_id:match.params.user_id,
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
                <Profile user_id={this.state.user_id}/>
                <Footer/>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default ProfilePage;