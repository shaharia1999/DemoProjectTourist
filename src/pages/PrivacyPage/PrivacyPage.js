import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Privacy from "../../component/other/Privacy/Privacy";

class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Privacy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;