import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Support from "../../component/other/Support/Support";

class SupportPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Support/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SupportPage;