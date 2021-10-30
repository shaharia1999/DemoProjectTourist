import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import ChangePassword from "../../component/login/ChangePassword";
import Footer from "../../component/common/footer/Footer";

class ChangePasswordPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ChangePassword/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ChangePasswordPage;