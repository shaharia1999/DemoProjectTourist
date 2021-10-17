import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Terms from "../../component/other/Terms/Terms";

class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Terms/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;