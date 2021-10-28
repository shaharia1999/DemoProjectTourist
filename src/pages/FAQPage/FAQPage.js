import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Faq from "../../component/other/FAQ/FAQ";

class FaqPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Faq/>
                <Footer/>
            </Fragment>
        );
    }
}

export default FaqPage;