import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import LogIn from "../../component/login/LogIn";

class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <LogIn/>
                <Footer/>
            </Fragment>
        );
    }
}

export default LoginPage;