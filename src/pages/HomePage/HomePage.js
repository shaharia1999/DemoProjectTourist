import React, {Component, Fragment} from 'react';
import Footer from "../../component/common/footer/Footer";
import NavTopSection from "../../component/common/navTopSection/NavTopSection";


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                 <NavTopSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;