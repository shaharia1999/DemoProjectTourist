import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import HelpCenter from "../../component/other/HelpCenter/HelpCenter";

class HelpCenterPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <HelpCenter/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HelpCenterPage;