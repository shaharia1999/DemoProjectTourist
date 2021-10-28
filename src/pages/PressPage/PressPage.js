import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import Footer from "../../component/common/footer/Footer";
import Press from "../../component/other/Press/Press";

class PressPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <Press/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PressPage;