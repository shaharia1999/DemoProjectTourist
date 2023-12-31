import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import ForgetPasswordVerify from "../../component/login/ForgetPasswordVerify";
import Footer from "../../component/common/footer/Footer";

class ForgetPasswordVerifyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ForgetPasswordVerify/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ForgetPasswordVerifyPage;