import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import UserVerificationAfterLogin from "../../component/login/UserVerificationAfterLogin";

class UserVerificationAfterLoginPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <UserVerificationAfterLogin/>
                <Footer/>
            </Fragment>
        );
    }
}

export default UserVerificationAfterLoginPage;