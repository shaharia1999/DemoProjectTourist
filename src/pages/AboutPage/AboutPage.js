import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import About from "../../component/other/About/About";
import Footer from "../../component/common/footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;