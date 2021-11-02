import React, {Component,Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import UserVerification from "../../component/login/UserVerification";
import Footer from "../../component/common/footer/Footer";

class UserVerificationPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <UserVerification/>
                <Footer/>
            </Fragment>
        );
    }
}

export default UserVerificationPage;