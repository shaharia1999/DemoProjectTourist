import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import ForgotPasswordSet from "../../component/login/ForgotPasswordSet";
import Footer from "../../component/common/footer/Footer";

class ForgotPasswordSetPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ForgotPasswordSet/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ForgotPasswordSetPage;