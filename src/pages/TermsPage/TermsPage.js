import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Terms from "../../component/other/Terms/Terms";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
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