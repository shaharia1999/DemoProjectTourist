import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Registration from "../../component/login/Registration";
import Footer from "../../component/common/footer/Footer";

class RegistrationPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Registration/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RegistrationPage;