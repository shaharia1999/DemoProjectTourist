import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Refund from "../../component/other/Refund/Refund";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Refund/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;