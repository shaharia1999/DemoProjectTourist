import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import ForgetPassword from "../../component/login/ForgetPassword";
import Footer from "../../component/common/footer/Footer";

class ForgetPasswordPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <ForgetPassword/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ForgetPasswordPage;