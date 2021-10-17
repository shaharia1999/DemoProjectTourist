import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Contact from "../../component/other/Contact/Contact";
import Footer from "../../component/common/footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;