import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import About from "../../component/other/About/About";
import Footer from "../../component/common/footer/Footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

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